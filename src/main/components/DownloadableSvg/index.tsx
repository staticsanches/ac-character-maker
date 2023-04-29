import { Button, SxProps, Theme } from '@mui/material'
import { Buffer } from 'buffer'
import React, { useRef } from 'react'

import { convertSvgToImage } from '@/utils/convertSvgToImage'
import { prettifyXml } from '@/utils/prettifyXml'

import { ReactComponent as JpgFileIcon } from './jpgFileIcon.svg'
import { ReactComponent as PngFileIcon } from './pngFileIcon.svg'
import { ReactComponent as SvgFileIcon } from './svgFileIcon.svg'

import classes from './DownloadableSvg.module.css'

export type DownloadableSvgProps = {
  readonly filename: string
  readonly svgBuilder: (ref: React.RefObject<SVGSVGElement>) => JSX.Element
}

export const DownloadableSvg = ({ filename, svgBuilder }: DownloadableSvgProps) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const download = (href: string, extension: `.${string}`) => {
    const element = document.createElement('a')
    element.href = href
    element.download = filename + extension
    document.body.appendChild(element)
    element.click()
    element.parentNode?.removeChild(element)
  }

  const handleSvg = () => {
    const svg = prettifyXml(svgRef.current!.outerHTML) + '\n'
    const base64 = Buffer.from(svg, 'utf-8').toString('base64')
    download(`data:image/svg+xml;charset=utf-8;base64,${base64}`, '.svg')
  }

  const handleImage = async (type: string, fill?: string) => {
    const svg = svgRef.current!.outerHTML
    const href = await convertSvgToImage(svg, `image/${type}`, fill)
    download(href, `.${type}`)
  }

  const buttonSx: SxProps<Theme> = {
    '> svg': { height: '100%' },
    '> svg > path': { fill: (theme) => theme.palette.secondary.main },
  }

  return (
    <div className={classes.container}>
      <div className={[classes.row, classes.svgDiv].join(' ')}>{svgBuilder(svgRef)}</div>
      <div className={[classes.row, classes.actions].join(' ')}>
        <Button onClick={handleSvg} color="secondary" sx={buttonSx}>
          <SvgFileIcon />
        </Button>

        <Button onClick={() => handleImage('png')} color="secondary" sx={buttonSx}>
          <PngFileIcon />
        </Button>

        <Button onClick={() => handleImage('jpeg', 'white')} color="secondary" sx={buttonSx}>
          <JpgFileIcon />
        </Button>
      </div>
    </div>
  )
}
