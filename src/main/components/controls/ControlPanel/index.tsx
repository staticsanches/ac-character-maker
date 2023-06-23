import { useDispatch } from 'react-redux'
import { NavigateOptions, To, useNavigate } from 'react-router-dom'

import { ArrowBack, SettingsBackupRestore } from '@mui/icons-material'
import { IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'

import type { AnyAction } from '@reduxjs/toolkit'

export type ControlPanelProps = {
  readonly title: string

  readonly resetActionProvider: () => AnyAction

  readonly children: Exclude<React.ReactNode, null | undefined>
} & NavigateBackToProps

export type NavigateBackToProps =
  | {
      readonly navigateBackTo?: To
      readonly navigateBackToOptions?: NavigateOptions
    }
  | {
      readonly navigateBackTo?: number
      readonly navigateBackToOptions?: never
    }

export const ControlPanel = ({
  title,
  navigateBackTo,
  navigateBackToOptions,
  resetActionProvider,
  children,
}: ControlPanelProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Box width="100%" height="100%">
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: (theme) => theme.palette.background.default,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            {navigateBackTo !== undefined && (
              <IconButton
                onClick={() =>
                  typeof navigateBackTo === 'number'
                    ? navigate(navigateBackTo)
                    : navigate(navigateBackTo, navigateBackToOptions)
                }
              >
                <ArrowBack fontSize="inherit" />
              </IconButton>
            )}
          </Box>

          <Typography variant="h6">{title}</Typography>

          <Tooltip title="Reset" disableInteractive>
            <IconButton onClick={() => dispatch(resetActionProvider())}>
              <SettingsBackupRestore fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Box>

      <Box sx={{ paddingInline: 6, paddingBlock: 2 }}>{children}</Box>
    </Box>
  )
}
