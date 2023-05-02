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

  const [prLash1Value, prLash1Opacity] = defsBuilder.addColor(props.prBottomLash1Color)
  const [prLash2Value, prLash2Opacity] = defsBuilder.addColor(props.prBottomLash2Color)
  const [prLash3Value, prLash3Opacity] = defsBuilder.addColor(props.prBottomLash3Color)

  const [plLash1Value, plLash1Opacity] = defsBuilder.addColor(props.plBottomLash1Color)
  const [plLash2Value, plLash2Opacity] = defsBuilder.addColor(props.plBottomLash2Color)
  const [plLash3Value, plLash3Opacity] = defsBuilder.addColor(props.plBottomLash3Color)

  return (
    <>
      <line
        stroke={prLash1Value}
        strokeOpacity={prLash1Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        x1="17.366"
        x2="14.866"
        y1="46.7057"
        y2="51.0359"
        onClick={handleClick}
      />

      <rect
        fill={prLash2Value}
        fillOpacity={prLash2Opacity}
        x="27"
        y="49"
        width="2"
        height="7"
        rx="1"
        ry="1"
        onClick={handleClick}
      />

      <path
        stroke={prLash3Value}
        strokeOpacity={prLash3Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        onClick={handleClick}
      />

      <line
        stroke={plLash1Value}
        strokeOpacity={plLash1Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        x1="93.366"
        x2="90.866"
        y1="46.7057"
        y2="51.0359"
        onClick={handleClick}
      />

      <rect
        fill={plLash2Value}
        fillOpacity={plLash2Opacity}
        x="103"
        y="49"
        width="2"
        height="7"
        rx="1"
        ry="1"
        onClick={handleClick}
      />

      <path
        stroke={plLash3Value}
        strokeOpacity={plLash3Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        d="m115.634 46.706 2.5 4.33"
      />
    </>
  )
}

const topLashes = (
  defsBuilder: SvgDefsBuilder,
  { topLashes, handleClick, ...props }: TopLashesProps & HandleClickProps
): Opt<JSX.Element> => {
  if (!topLashes) return

  const [prLash1Value, prLash1Opacity] = defsBuilder.addColor(props.prTopLash1Color)
  const [prLash2Value, prLash2Opacity] = defsBuilder.addColor(props.prTopLash2Color)
  const [prLash3Value, prLash3Opacity] = defsBuilder.addColor(props.prTopLash3Color)

  const [plLash1Value, plLash1Opacity] = defsBuilder.addColor(props.plTopLash1Color)
  const [plLash2Value, plLash2Opacity] = defsBuilder.addColor(props.plTopLash2Color)
  const [plLash3Value, plLash3Opacity] = defsBuilder.addColor(props.plTopLash3Color)

  return (
    <>
      <path
        stroke={prLash1Value}
        strokeOpacity={prLash1Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        d="m17.366 12.294-2.5-4.33"
        onClick={handleClick}
      />

      <rect
        fill={prLash2Value}
        fillOpacity={prLash2Opacity}
        x="27"
        y="3"
        width="2"
        height="7"
        rx="1"
        ry="1"
        onClick={handleClick}
      />

      <line
        stroke={prLash3Value}
        strokeOpacity={prLash3Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        x1="39.634"
        x2="42.134"
        y1="12.2943"
        y2="7.96413"
        onClick={handleClick}
      />

      <path
        stroke={plLash1Value}
        strokeOpacity={plLash1Opacity}
        strokeLinecap="round"
        strokeWidth="2"
        d="m93.366 12.294-2.5-4.33"
        onClick={handleClick}
      />

      <rect
        fill={plLash2Value}
        fillOpacity={plLash2Opacity}
        x="103"
        y="3"
        width="2"
        height="7"
        rx="1"
        ry="1"
        onClick={handleClick}
      />

      <line
        stroke={plLash3Value}
        strokeOpacity={plLash3Opacity}
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
): JSX.Element => {
  const [prScleraColor, prScleraOpacity] = defsBuilder.addColor(props.prScleraColor)
  const [plScleraColor, plScleraOpacity] = defsBuilder.addColor(props.plScleraColor)

  const [prOutlineColor, prOutlineOpacity] = defsBuilder.addColor(props.prOutlineColor)
  const [plOutlineColor, plOutlineOpacity] = defsBuilder.addColor(props.plOutlineColor)

  const [prIrisColor, prIrisOpacity] = defsBuilder.addColor(props.prIrisColor)
  const [plIrisColor, plIrisOpacity] = defsBuilder.addColor(props.plIrisColor)

  return (
    <>
      <circle
        cx="28.5"
        cy="29.5"
        r="19.5"
        fill={prScleraColor}
        fillOpacity={prScleraOpacity}
        stroke={prOutlineColor}
        strokeOpacity={prOutlineOpacity}
        strokeWidth="2"
        onClick={handleClick}
      />
      <circle cx="34" cy="29" r="15" fill={prIrisColor} fillOpacity={prIrisOpacity} onClick={handleClick} />

      <circle
        cx="104.5"
        cy="29.5"
        r="19.5"
        fill={plScleraColor}
        fillOpacity={plScleraOpacity}
        stroke={plOutlineColor}
        strokeOpacity={plOutlineOpacity}
        strokeWidth="2"
        onClick={handleClick}
      />
      <circle cx="110" cy="29" r="15" fill={plIrisColor} fillOpacity={plIrisOpacity} onClick={handleClick} />
    </>
  )
}
