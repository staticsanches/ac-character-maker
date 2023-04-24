import { Buffer } from 'buffer'
import React, { createRef } from 'react'

import { useScalableContent } from '@/hooks/useScalableContent'
import { convertSvgToImage } from '@/utils/convertSvgToImage'
import { prettifyXml } from '@/utils/prettifyXml'
import { Button, useTheme } from '@mui/material'
import classes from './DownloadableSvg.module.css'

export type DownloadableSvgProps = {
  readonly filename: string
  readonly svgBuilder: (ref: React.RefObject<SVGSVGElement>) => JSX.Element
}

export const DownloadableSvg = ({ filename, svgBuilder }: DownloadableSvgProps) => {
  const svgRef = createRef<SVGSVGElement>()
  const { scalableWrapperRef, scalableContentRef } = useScalableContent<HTMLDivElement, HTMLDivElement>()
  const theme = useTheme()

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

  const iconSize = 64
  return (
    <div className={classes.container}>
      <div ref={scalableWrapperRef} className={[classes.row, classes.svgDiv].join(' ')}>
        <div ref={scalableContentRef}>{svgBuilder(svgRef)}</div>
      </div>
      <div className={[classes.row, classes.actions].join(' ')}>
        <Button
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          onClick={handleSvg}
          color="secondary"
        >
          <path
            fill={theme.palette.secondary.main}
            d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.5-8c-.454-.024-.89.18-1.161.545a2.6 2.6 0 0 0-.4 1.547v.876a2.426 2.426 0 0 0 .432 1.514c.29.35.728.541 1.181.518c.28.003.557-.05.816-.154l.013-.005l-.016.007c.245-.101.46-.26.63-.464v-2.011h-1.509v.742h.623v.893l-.078.06a.723.723 0 0 1-.427.117a.641.641 0 0 1-.592-.3a2.01 2.01 0 0 1-.178-.969v-.883a2.018 2.018 0 0 1 .166-.926a.557.557 0 0 1 .523-.292a.531.531 0 0 1 .435.171c.117.19.177.41.175.632H17a1.96 1.96 0 0 0-.423-1.227A1.4 1.4 0 0 0 15.5 14ZM7 17.4c-.006.296.063.59.2.852c.126.234.317.426.55.555c.237.129.503.195.773.193c.366.02.724-.11.994-.357a1.33 1.33 0 0 0 .366-.993c.013-.34-.09-.676-.293-.95a2.186 2.186 0 0 0-.934-.632a1.652 1.652 0 0 1-.513-.334a.536.536 0 0 1-.143-.367a.608.608 0 0 1 .13-.408a.45.45 0 0 1 .363-.154c.148-.008.29.06.377.181A.853.853 0 0 1 9 15.5h.886a1.739 1.739 0 0 0-.172-.782a1.245 1.245 0 0 0-.487-.531A1.382 1.382 0 0 0 8.505 14a1.409 1.409 0 0 0-1 .374a1.3 1.3 0 0 0-.393.986a1.4 1.4 0 0 0 .291.882c.258.293.585.516.951.649c.186.072.356.18.5.317c.101.127.15.287.139.448c0 .361-.157.544-.465.544a.58.58 0 0 1-.484-.19a1.012 1.012 0 0 1-.148-.612L7 17.4Zm3.182-3.332l1.26 4.866h.925l1.269-4.866h-.991L11.9 17.6l-.737-3.529l-.981-.003ZM13 4v5h5l-5-5Z"
          />
        </Button>
        <Button
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          onClick={() => handleImage('png')}
          color="secondary"
        >
          <path
            fill={theme.palette.secondary.main}
            d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.458-8a1.3 1.3 0 0 0-1.126.545a2.66 2.66 0 0 0-.384 1.547v.876a2.479 2.479 0 0 0 .419 1.514c.277.348.705.54 1.149.518c.271.003.54-.05.791-.154l.021-.009a1.55 1.55 0 0 0 .588-.455v-2.009h-1.469v.742h.6v.893l-.076.06a.689.689 0 0 1-.414.117a.62.62 0 0 1-.575-.3a2.063 2.063 0 0 1-.173-.969v-.883c-.016-.317.04-.633.165-.925a.537.537 0 0 1 .507-.292c.16-.013.317.05.423.171c.113.191.171.41.17.632H17a2 2 0 0 0-.41-1.227A1.34 1.34 0 0 0 15.543 14h-.001Zm-4.258 1.746l1.259 3.187h.857v-4.866h-.855v3.195l-1.263-3.195h-.862v4.866h.862v-3.187h.002ZM7 14.067v4.866h.862v-1.711h.575c.388.02.766-.131 1.032-.414c.262-.317.395-.72.373-1.13a1.747 1.747 0 0 0-.379-1.164a1.253 1.253 0 0 0-1.009-.447H7ZM13 4v5h5l-5-5ZM8.454 16.4h-.592v-1.515h.6a.432.432 0 0 1 .37.221c.1.176.148.376.138.578a.9.9 0 0 1-.135.535a.448.448 0 0 1-.381.181Z"
          />
        </Button>
        <Button
          component="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={iconSize}
          height={iconSize}
          onClick={() => handleImage('jpeg', 'white')}
          color="secondary"
        >
          <path
            fill={theme.palette.secondary.main}
            d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.104.104 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051h.042a.421.421 0 0 1 .052.043a.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293a.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2Zm-2.539-8a1.4 1.4 0 0 0-1.188.545a2.552 2.552 0 0 0-.406 1.547v.876c-.029.54.128 1.074.443 1.514c.3.35.746.542 1.207.518c.286.003.57-.05.836-.154h.008h-.006a.189.189 0 0 1 .029-.014h.005l.016-.008l.021-.01c.218-.1.412-.247.568-.43v-2.011H15.45v.742h.637v.893l-.08.06a.753.753 0 0 1-.436.117a.661.661 0 0 1-.607-.3a1.962 1.962 0 0 1-.183-.969v-.883a1.985 1.985 0 0 1 .173-.925a.574.574 0 0 1 .535-.292a.55.55 0 0 1 .446.171c.12.19.182.408.18.632H17a1.933 1.933 0 0 0-.433-1.227c-.297-.28-.7-.421-1.106-.392ZM7 17.5c-.021.396.1.787.344 1.1c.244.272.598.419.963.4c.362.009.709-.149.941-.427a1.7 1.7 0 0 0 .365-1.137v-3.369H8.7v3.322c0 .528-.133.8-.4.8s-.393-.232-.393-.689H7Zm3.327-3.429v4.866h.91v-1.715h.607c.405.022.802-.128 1.09-.414a1.58 1.58 0 0 0 .392-1.13a1.69 1.69 0 0 0-.4-1.164c-.27-.3-.661-.464-1.065-.447l-1.534.004ZM13 4v5h5l-5-5Zm-1.138 12.4h-.625v-1.515h.635c.16 0 .307.084.39.221c.105.174.156.375.146.578a.866.866 0 0 1-.142.535a.483.483 0 0 1-.404.181Z"
          />
        </Button>
      </div>
    </div>
  )
}
