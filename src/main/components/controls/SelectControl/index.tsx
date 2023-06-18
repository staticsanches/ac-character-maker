import { Box, BoxProps, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import { useRootSelector } from '@/hooks/useRootSelector'
import type { RootSelector } from '@/redux/selectors'
import { useDispatch } from 'react-redux'
import { ControlLabel } from '../ControlLabel'

export type SelectControlProps<V extends string> = Pick<BoxProps, 'flex'> & {
  readonly title: string

  readonly selector: RootSelector<V>
  readonly actionCreator: ActionCreatorWithPayload<V>

  readonly availableValues: readonly V[]
  readonly labelFactory?: (value: V) => string
}

export const SelectControl = <V extends string>({
  title,
  selector,
  actionCreator,
  availableValues,
  labelFactory = defaultLabelFactory,
  flex,
}: SelectControlProps<V>) => {
  const dispatch = useDispatch()
  const selected = useRootSelector(selector)

  const handleChange = (event: SelectChangeEvent<V>) => dispatch(actionCreator(event.target.value as V))

  return (
    <Box display="flex" flex={flex as any} justifyContent="space-between" alignItems="center">
      <ControlLabel title={title} />

      <Select value={selected} onChange={handleChange} size="small" variant="standard">
        {availableValues.map((value) => (
          <MenuItem key={value} value={value}>
            {labelFactory(value)}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

const defaultLabelFactory = (value: string) =>
  value.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()).replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
