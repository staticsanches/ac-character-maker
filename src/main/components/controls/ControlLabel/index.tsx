import { EmojiPeople } from '@mui/icons-material'
import { Tooltip, Typography } from '@mui/material'

export type ControlLabelProps =
  | {
      readonly side?: never
      readonly title: string
    }
  | {
      readonly side: 'pr' | 'pl'
      readonly title?: never
    }

export const ControlLabel = ({ side, title }: ControlLabelProps) => {
  if (side === undefined) {
    return (
      <Typography variant="subtitle1" component="span">
        {title}
      </Typography>
    )
  }

  return (
    <Tooltip title={side === 'pr' ? 'Proper Right' : 'Proper Left'} disableInteractive>
      <EmojiPeople sx={{ transform: side === 'pl' ? 'scaleX(-1)' : undefined, width: '1em', height: '1em' }} />
    </Tooltip>
  )
}
