import React, { useMemo } from 'react'

import type { SvgColor, SvgGradient, SvgGradientStop, SvgLinearGradient, SvgRadialGradient } from '@/types/svgColor'
import { isRGBAColor } from '@/utils/svgColorUtils'
import { uniqueID } from '@/utils/uniqueID'

export type SvgDefsBuilder = {
  addDef: (defType: string, builder: (id: string) => JSX.Element) => string

  addColor: (color: SvgColor) => [string, number | undefined]
  addFillColor: (color: SvgColor) => { fill: string; fillOpacity?: number }
  addStrokeColor: (color: SvgColor) => { stroke: string; strokeOpacity?: number }

  /**
   * Builds the defs block and forgets all added data.
   * Must be called only once, after collecting all defs.
   */
  build: () => JSX.Element | undefined
}

export const useSvgDefsBuilder = (): SvgDefsBuilder => {
  return useMemo(() => new Builder(), [])
}

class Builder implements SvgDefsBuilder {
  #defs: JSX.Element[] = []

  #gradients: SvgGradient[] = []
  #gradientIDs: string[] = []
  #ids: string[] = []
  #idPointer = 0

  addDef = (defType: string, builder: (id: string) => JSX.Element) => {
    const id = this.#nextID(defType)
    this.#defs.push(builder(id))
    return `url(#${id})`
  }

  addColor = (color: SvgColor): [string, number | undefined] => {
    if (typeof color === 'string') {
      return [color, undefined]
    }
    if (isRGBAColor(color)) {
      return [`rgb(${color.r}, ${color.g}, ${color.b})`, color.a]
    }

    // Checks if the gradient has been used
    for (let i = 0; i < this.#gradients.length; i++) {
      const gradient = this.#gradients[i]
      if (isEqualsGradient(color, gradient)) {
        return [`url(#${this.#gradientIDs[i]})`, undefined]
      }
    }

    const url = this.addDef(color.type, (id) => {
      // Adds the missing gradient
      this.#gradients.push(color)
      this.#gradientIDs.push(id)

      const stops = color.stops?.map((stop, index) => (
        <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
      ))
      switch (color.type) {
        case 'linearGradient':
          return (
            <linearGradient id={id} x1={color.x1} x2={color.x2} y1={color.y1} y2={color.y2}>
              {stops}
            </linearGradient>
          )
        case 'radialGradient':
          return (
            <radialGradient id={id} cx={color.cx} cy={color.cy} fx={color.fx} fy={color.fy} fr={color.fr} r={color.r}>
              {stops}
            </radialGradient>
          )
      }
    })

    return [url, undefined]
  }

  addFillColor = (color: SvgColor) => {
    const [fill, fillOpacity] = this.addColor(color)
    return { fill, fillOpacity }
  }

  addStrokeColor = (color: SvgColor) => {
    const [stroke, strokeOpacity] = this.addColor(color)
    return { stroke, strokeOpacity }
  }

  build = () => {
    if (this.#defs.length === 0) return

    const defs = (
      <defs>
        {this.#defs.map((def, index) => (
          <React.Fragment key={index}>{def}</React.Fragment>
        ))}
      </defs>
    )

    this.#reset()

    return defs
  }

  #reset = () => {
    this.#defs = []
    this.#idPointer = 0
    this.#gradients = []
    this.#gradientIDs = []
  }

  #nextID = (type: string) => {
    if (this.#idPointer === this.#ids.length) {
      this.#ids.push(uniqueID())
    }
    return this.#buildSvgID(type, this.#ids[this.#idPointer++])
  }

  #buildSvgID = (type: string, id: string) => `${type}-${id}`
}

const isEqualsGradient = (g1: SvgGradient, g2: SvgGradient): boolean => {
  if (g1 === g2) {
    return true
  }
  if (g1.type === 'linearGradient' && g2.type === 'linearGradient') {
    return isEqualsLinearGradient(g1, g2)
  }
  if (g1.type === 'radialGradient' && g2.type === 'radialGradient') {
    return isEqualsRadialGradient(g1, g2)
  }
  return false
}

const isEqualsLinearGradient = (g1: SvgLinearGradient, g2: SvgLinearGradient): boolean => {
  return g1.x1 === g2.x1 && g1.x2 === g2.x2 && g1.y1 === g2.y1 && g1.y2 === g2.y2 && isEqualsStops(g1.stops, g2.stops)
}

const isEqualsRadialGradient = (g1: SvgRadialGradient, g2: SvgRadialGradient): boolean => {
  return (
    g1.cx === g2.cx &&
    g1.cy === g2.cy &&
    g1.fx === g2.fx &&
    g1.fy === g2.fy &&
    g1.fr === g2.fr &&
    g1.r === g2.r &&
    isEqualsStops(g1.stops, g2.stops)
  )
}

const isEqualsStops = (stops1: SvgGradientStop[] | undefined, stops2: SvgGradientStop[] | undefined): boolean => {
  if (stops1 === stops2) {
    return true
  }
  if (stops1 === undefined) {
    return false
  }
  if (stops2 === undefined) {
    return false
  }
  if (stops1.length !== stops2.length) {
    return false
  }

  for (let i = 0; i < stops1.length; i++) {
    const s1 = stops1[i]
    const s2 = stops2[i]
    if (!isEqualsStop(s1, s2)) {
      return false
    }
  }

  return true
}

const isEqualsStop = (s1: SvgGradientStop, s2: SvgGradientStop) => {
  return s1 === s2 || (s1.color === s2.color && s1.offset === s2.offset && s1.opacity === s2.opacity)
}
