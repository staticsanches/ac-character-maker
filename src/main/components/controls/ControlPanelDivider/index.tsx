import { Divider, type SxProps, type Theme } from '@mui/material'

export type ControlPanelDividerProps = {
  readonly sx?: SxProps<Theme>
}

export const ControlPanelDivider = ({
  sx = {
    marginBlock: 1,
    marginInline: -1,
  },
}: ControlPanelDividerProps) => <Divider sx={sx} />
