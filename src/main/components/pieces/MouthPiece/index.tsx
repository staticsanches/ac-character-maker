import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { SvgDefsBuilder, useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectMouthAccentColor, selectMouthColor, selectMouthVariant } from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'
import { SvgColor } from '@/types/svgColor'

export type MouthVariant = (typeof mouthVariants)[number]
export const mouthVariants = [
  'bunny-smile',
  'cat-smile',
  'drool',
  'kissy',
  'laugh',
  'small-smile',
  'surprise',
  'wide-smile',
] as const

export type MouthPieceProps = AvatarPieceBaseProps & HandleClickProps

export const MouthPiece = React.forwardRef<SVGSVGElement, MouthPieceProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => {
    return (
      <AvatarPiece
        {...avatarPieceProps}
        ref={ref}
        pieceType="mouth"
        highlightOnHover={!!handleClick}
        contentComponent={Mouth}
        handleClick={handleClick}
      />
    )
  }
)

const Mouth = ({ handleClick }: HandleClickProps): JSX.Element => {
  const variant = useRootSelector(selectMouthVariant)
  const color = useRootSelector(selectMouthColor)
  const accentColor = useRootSelector(selectMouthAccentColor)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      {mouthElement(variant, color, accentColor, defsBuilder, handleClick)}
      {defsBuilder.build()}
    </>
  )
}

const mouthElement = (
  variant: MouthVariant,
  color: SvgColor,
  accentColor: SvgColor,
  defsBuilder: SvgDefsBuilder,
  handleClick: Opt<React.MouseEventHandler>
): JSX.Element => {
  switch (variant) {
    case 'bunny-smile':
      return (
        <>
          <path
            d="M27 15V10H39V15H27Z"
            {...defsBuilder.addFillColor(accentColor)}
            {...defsBuilder.addStrokeColor(color)}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            onClick={handleClick}
          />
          <path
            d="M52 4C52 7.31371 43.4934 10 33 10C22.5066 10 14 7.31371 14 4"
            {...defsBuilder.addStrokeColor(color)}
            strokeLinecap="round"
            strokeWidth="3"
            onClick={handleClick}
          />
        </>
      )
    case 'cat-smile':
      return (
        <path
          d="M7 2C9.33333 4.66667 15.4 10 21 10C26.6 10 31 6.66667 32.5 5C34 6.66667 38.4 10 44 10C49.6 10 55.6667 4.66667 58 2"
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          onClick={handleClick}
        />
      )
    case 'drool':
      return (
        <path
          d="M31.3401 4.83657C35.8401 4.83657 40.3401 3.33655 45.3401 3.33655C53.3401 5.83655 49.5068 11.6699 45.3401 12.8365C46.8401 16.8365 44.3401 20.3365 41.8401 19.3365C39.3401 18.3365 40.8401 14.3365 39.3401 12.8365C38.0653 11.5618 23.3401 14.3365 18.8401 11.8366C14.3401 9.33658 15.8401 3.83657 18.8401 2.33657C21.8401 0.836565 26.8401 4.83657 31.3401 4.83657Z"
          {...defsBuilder.addFillColor(accentColor)}
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          onClick={handleClick}
        />
      )
    case 'kissy':
      return (
        <path
          d="M31 4.65339C33 2.65339 35.5 2.2534 37.5 4.6534C40 7.6534 37 10.6534 34 10.1534C37.6667 11.82 37.7845 13.9767 37 15.1534C36 16.6534 33 17.1534 31 15.1534"
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          onClick={handleClick}
        />
      )
    case 'laugh':
      return (
        <path
          d="M33 14C43.4934 14 52 8.07513 52 2C52 2 40 4 33 4C26 4 13.5 2 13.5 2C13.5 8.07513 22.5066 14 33 14Z"
          {...defsBuilder.addFillColor(accentColor)}
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          onClick={handleClick}
        />
      )
    case 'small-smile':
      return (
        <path
          d="M45 2C45 8.07513 39.4036 13 32.5 13C25.5964 13 20 8.07513 20 2"
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeWidth="3"
          onClick={handleClick}
        />
      )
    case 'surprise':
      return <ellipse cx="32.5" cy="7.5" rx="6.5" ry="7.5" {...defsBuilder.addFillColor(color)} onClick={handleClick} />
    case 'wide-smile':
      return (
        <path
          d="M52 2C52 8.07513 43.4934 13 33 13C22.5066 13 14 8.07513 14 2"
          {...defsBuilder.addStrokeColor(color)}
          strokeLinecap="round"
          strokeWidth="3"
          onClick={handleClick}
        />
      )
  }
}
