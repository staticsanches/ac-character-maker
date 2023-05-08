import { Clear } from '@mui/icons-material'

import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'
import { SvgIcon, SvgIconProps } from '@mui/material'

export type SvgColorPreviewIconProps = Omit<SvgIconProps, 'viewBox'> & {
  readonly colorSelector: RootSelector<SvgColor>
}

export const SvgColorPreviewIcon = ({ colorSelector, ...svgIconProps }: SvgColorPreviewIconProps) => {
  const color = useRootSelector(colorSelector)
  const defsBuilder = useSvgDefsBuilder()

  if (color === 'none') {
    return <Clear {...svgIconProps} />
  }

  return (
    <SvgIcon viewBox="0 0 24 24" {...svgIconProps}>
      <rect x={0} y={0} width={24} height={24} rx={4} ry={4} {...defsBuilder.addFillColor(color)} />
      {defsBuilder.build()}
    </SvgIcon>
  )
}
