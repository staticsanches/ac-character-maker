import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { SvgDefsBuilder, useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'

import type { OnClickProps } from '@/types/react'
import type { BottomLashesProps, IrisColorProps, OutlineColorProps, ScleraColorProps, TopLashesProps } from '../Eyes'

export const CircleEyesPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      ref={ref}
      {...avatarPieceProps}
      pieceType="eyes"
      contentComponent={CircleEyes}
      highlightOnHover={!!onClick}
      onClick={onClick}
    />
  )
)

type CircleEyesProps = OutlineColorProps &
  IrisColorProps &
  ScleraColorProps &
  BottomLashesProps &
  TopLashesProps &
  OnClickProps

const CircleEyes = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  const propsFromSelectors: CircleEyesProps = {
    prOutlineColor: useRootSelector(selectors.pieces.eyes.pr.outlineColor.selectResolved),
    plOutlineColor: useRootSelector(selectors.pieces.eyes.pl.outlineColor.selectResolved),

    prIrisColor: useRootSelector(selectors.pieces.eyes.pr.irisColor.selectResolved),
    plIrisColor: useRootSelector(selectors.pieces.eyes.pl.irisColor.selectResolved),

    prScleraColor: useRootSelector(selectors.pieces.eyes.pr.scleraColor.selectResolved),
    plScleraColor: useRootSelector(selectors.pieces.eyes.pl.scleraColor.selectResolved),

    prBottomLashes: useRootSelector(selectors.pieces.eyes.pr.bottomLashes.selectResolved),
    plBottomLashes: useRootSelector(selectors.pieces.eyes.pl.bottomLashes.selectResolved),
    prBottomLash1Color: useRootSelector(selectors.pieces.eyes.pr.bottomLash1Color.selectResolved),
    prBottomLash2Color: useRootSelector(selectors.pieces.eyes.pr.bottomLash2Color.selectResolved),
    prBottomLash3Color: useRootSelector(selectors.pieces.eyes.pr.bottomLash3Color.selectResolved),
    plBottomLash1Color: useRootSelector(selectors.pieces.eyes.pl.bottomLash1Color.selectResolved),
    plBottomLash2Color: useRootSelector(selectors.pieces.eyes.pl.bottomLash2Color.selectResolved),
    plBottomLash3Color: useRootSelector(selectors.pieces.eyes.pl.bottomLash3Color.selectResolved),

    prTopLashes: useRootSelector(selectors.pieces.eyes.pr.topLashes.selectResolved),
    plTopLashes: useRootSelector(selectors.pieces.eyes.pl.topLashes.selectResolved),
    prTopLash1Color: useRootSelector(selectors.pieces.eyes.pr.topLash1Color.selectResolved),
    prTopLash2Color: useRootSelector(selectors.pieces.eyes.pr.topLash2Color.selectResolved),
    prTopLash3Color: useRootSelector(selectors.pieces.eyes.pr.topLash3Color.selectResolved),
    plTopLash1Color: useRootSelector(selectors.pieces.eyes.pl.topLash1Color.selectResolved),
    plTopLash2Color: useRootSelector(selectors.pieces.eyes.pl.topLash2Color.selectResolved),
    plTopLash3Color: useRootSelector(selectors.pieces.eyes.pl.topLash3Color.selectResolved),

    onClick: onClick,
  }

  return (
    <>
      {bottomLashes(defsBuilder, propsFromSelectors)}
      {topLashes(defsBuilder, propsFromSelectors)}
      {eyes(defsBuilder, propsFromSelectors)}
      {defsBuilder.build()}
    </>
  )
}

const bottomLashes = (
  defsBuilder: SvgDefsBuilder,
  { prBottomLashes, plBottomLashes, onClick: handleClick, ...props }: BottomLashesProps & OnClickProps
): Opt<JSX.Element> => {
  return (
    <>
      {prBottomLashes && (
        <>
          <line
            {...defsBuilder.addStrokeColor(props.prBottomLash1Color)}
            strokeLinecap="round"
            strokeWidth="2"
            x1="17.366"
            x2="14.866"
            y1="46.7057"
            y2="51.0359"
            onClick={handleClick}
          />

          <rect
            {...defsBuilder.addFillColor(props.prBottomLash2Color)}
            x="27"
            y="49"
            width="2"
            height="7"
            rx="1"
            ry="1"
            onClick={handleClick}
          />

          <path
            {...defsBuilder.addStrokeColor(props.prBottomLash3Color)}
            strokeLinecap="round"
            strokeWidth="2"
            d="m39.634 46.706 2.5 4.33"
            onClick={handleClick}
          />
        </>
      )}

      {plBottomLashes && (
        <>
          <line
            {...defsBuilder.addStrokeColor(props.plBottomLash1Color)}
            strokeLinecap="round"
            strokeWidth="2"
            x1="93.366"
            x2="90.866"
            y1="46.7057"
            y2="51.0359"
            onClick={handleClick}
          />

          <rect
            {...defsBuilder.addFillColor(props.plBottomLash2Color)}
            x="103"
            y="49"
            width="2"
            height="7"
            rx="1"
            ry="1"
            onClick={handleClick}
          />

          <path
            {...defsBuilder.addStrokeColor(props.plBottomLash3Color)}
            strokeLinecap="round"
            strokeWidth="2"
            d="m115.634 46.706 2.5 4.33"
            onClick={handleClick}
          />
        </>
      )}
    </>
  )
}

const topLashes = (
  defsBuilder: SvgDefsBuilder,
  { prTopLashes, plTopLashes, onClick: handleClick, ...props }: TopLashesProps & OnClickProps
): Opt<JSX.Element> => {
  return (
    <>
      {prTopLashes && (
        <>
          {' '}
          <path
            {...defsBuilder.addStrokeColor(props.prTopLash1Color)}
            strokeLinecap="round"
            strokeWidth="2"
            d="m17.366 12.294-2.5-4.33"
            onClick={handleClick}
          />
          <rect
            {...defsBuilder.addFillColor(props.prTopLash2Color)}
            x="27"
            y="3"
            width="2"
            height="7"
            rx="1"
            ry="1"
            onClick={handleClick}
          />
          <line
            {...defsBuilder.addStrokeColor(props.prTopLash3Color)}
            strokeLinecap="round"
            strokeWidth="2"
            x1="39.634"
            x2="42.134"
            y1="12.2943"
            y2="7.96413"
            onClick={handleClick}
          />
        </>
      )}

      {plTopLashes && (
        <>
          <path
            {...defsBuilder.addStrokeColor(props.plTopLash1Color)}
            strokeLinecap="round"
            strokeWidth="2"
            d="m93.366 12.294-2.5-4.33"
            onClick={handleClick}
          />

          <rect
            {...defsBuilder.addFillColor(props.plTopLash2Color)}
            x="103"
            y="3"
            width="2"
            height="7"
            rx="1"
            ry="1"
            onClick={handleClick}
          />

          <line
            {...defsBuilder.addStrokeColor(props.plTopLash3Color)}
            strokeLinecap="round"
            strokeWidth="2"
            x1="115.634"
            x2="118.134"
            y1="12.2943"
            y2="7.96413"
            onClick={handleClick}
          />
        </>
      )}
    </>
  )
}

const eyes = (
  defsBuilder: SvgDefsBuilder,
  { onClick: handleClick, ...props }: OutlineColorProps & IrisColorProps & ScleraColorProps & OnClickProps
): JSX.Element => (
  <>
    <circle
      cx="28.5"
      cy="29.5"
      r="19.5"
      {...defsBuilder.addFillColor(props.prScleraColor)}
      {...defsBuilder.addStrokeColor(props.prOutlineColor)}
      strokeWidth="2"
      onClick={handleClick}
    />
    <circle cx="34" cy="29" r="15" {...defsBuilder.addFillColor(props.prIrisColor)} onClick={handleClick} />

    <circle
      cx="104.5"
      cy="29.5"
      r="19.5"
      {...defsBuilder.addFillColor(props.plScleraColor)}
      {...defsBuilder.addStrokeColor(props.plOutlineColor)}
      strokeWidth="2"
      onClick={handleClick}
    />
    <circle cx="110" cy="29" r="15" {...defsBuilder.addFillColor(props.plIrisColor)} onClick={handleClick} />
  </>
)
