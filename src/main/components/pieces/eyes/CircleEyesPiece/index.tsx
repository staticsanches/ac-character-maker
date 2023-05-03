import React from 'react'

import { AvatarPiece } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { SvgDefsBuilder, useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import {
  selectEyesBottomLashes,
  selectEyesTopLashes,
  selectResolvedEyesPlBottomLash1Color,
  selectResolvedEyesPlBottomLash2Color,
  selectResolvedEyesPlBottomLash3Color,
  selectResolvedEyesPlIrisColor,
  selectResolvedEyesPlOutlineColor,
  selectResolvedEyesPlScleraColor,
  selectResolvedEyesPlTopLash1Color,
  selectResolvedEyesPlTopLash2Color,
  selectResolvedEyesPlTopLash3Color,
  selectResolvedEyesPrBottomLash1Color,
  selectResolvedEyesPrBottomLash2Color,
  selectResolvedEyesPrBottomLash3Color,
  selectResolvedEyesPrIrisColor,
  selectResolvedEyesPrOutlineColor,
  selectResolvedEyesPrScleraColor,
  selectResolvedEyesPrTopLash1Color,
  selectResolvedEyesPrTopLash2Color,
  selectResolvedEyesPrTopLash3Color,
} from '@/redux/selectors'
import type { HandleClickProps } from '@/types/react'
import type { BottomLashesProps, IrisColorProps, OutlineColorProps, ScleraColorProps, TopLashesProps } from '../Eyes'
import type { EyesPieceBaseProps } from '../EyesPiece'

export const CircleEyesPiece = React.forwardRef<SVGSVGElement, EyesPieceBaseProps>(
  ({ handleClick, ...avatarPieceProps }, ref) => {
    return (
      <AvatarPiece
        ref={ref}
        {...avatarPieceProps}
        pieceType="eyes"
        contentComponent={CircleEyes}
        highlightOnHover={!!handleClick}
        handleClick={handleClick}
      />
    )
  }
)

type CircleEyesProps = OutlineColorProps &
  IrisColorProps &
  ScleraColorProps &
  BottomLashesProps &
  TopLashesProps &
  HandleClickProps

const CircleEyes = ({ handleClick }: HandleClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  const propsFromSelectors: CircleEyesProps = {
    prOutlineColor: useRootSelector(selectResolvedEyesPrOutlineColor),
    plOutlineColor: useRootSelector(selectResolvedEyesPlOutlineColor),

    prIrisColor: useRootSelector(selectResolvedEyesPrIrisColor),
    plIrisColor: useRootSelector(selectResolvedEyesPlIrisColor),

    prScleraColor: useRootSelector(selectResolvedEyesPrScleraColor),
    plScleraColor: useRootSelector(selectResolvedEyesPlScleraColor),

    bottomLashes: useRootSelector(selectEyesBottomLashes),
    prBottomLash1Color: useRootSelector(selectResolvedEyesPrBottomLash1Color),
    prBottomLash2Color: useRootSelector(selectResolvedEyesPrBottomLash2Color),
    prBottomLash3Color: useRootSelector(selectResolvedEyesPrBottomLash3Color),
    plBottomLash1Color: useRootSelector(selectResolvedEyesPlBottomLash1Color),
    plBottomLash2Color: useRootSelector(selectResolvedEyesPlBottomLash2Color),
    plBottomLash3Color: useRootSelector(selectResolvedEyesPlBottomLash3Color),

    topLashes: useRootSelector(selectEyesTopLashes),
    prTopLash1Color: useRootSelector(selectResolvedEyesPrTopLash1Color),
    prTopLash2Color: useRootSelector(selectResolvedEyesPrTopLash2Color),
    prTopLash3Color: useRootSelector(selectResolvedEyesPrTopLash3Color),
    plTopLash1Color: useRootSelector(selectResolvedEyesPlTopLash1Color),
    plTopLash2Color: useRootSelector(selectResolvedEyesPlTopLash2Color),
    plTopLash3Color: useRootSelector(selectResolvedEyesPlTopLash3Color),

    handleClick,
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
  { bottomLashes, handleClick, ...props }: BottomLashesProps & HandleClickProps
): Opt<JSX.Element> => {
  if (!bottomLashes) return

  return (
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
  )
}

const topLashes = (
  defsBuilder: SvgDefsBuilder,
  { topLashes, handleClick, ...props }: TopLashesProps & HandleClickProps
): Opt<JSX.Element> => {
  if (!topLashes) return

  return (
    <>
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
  )
}

const eyes = (
  defsBuilder: SvgDefsBuilder,
  { handleClick, ...props }: OutlineColorProps & IrisColorProps & ScleraColorProps & HandleClickProps
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
