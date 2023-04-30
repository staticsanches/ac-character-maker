import { combineReducers, createSlice, Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'

import { earsReducer, EarsState, getEarsInitialState } from './ears'
import { getHeadInitialState, headReducer, HeadState } from './head'
import { getNoseInitialState, noseReducer, NoseState } from './nose'

export type PiecesState = {
  readonly head: HeadState
  readonly nose: NoseState
  readonly ears: EarsState
}

const initialState: () => PiecesState = () => ({
  head: getHeadInitialState(),
  nose: getNoseInitialState(),
  ears: getEarsInitialState(),
})

const { reducer: originalReducer, actions: piecesActions } = createSlice({
  name: 'pieces',
  initialState,
  reducers: {},
})

const nestedReducer = combineReducers({ head: headReducer, nose: noseReducer, ears: earsReducer })

const piecesReducer = reduceReducers(originalReducer, nestedReducer) as Reducer<PiecesState>

export { piecesReducer, piecesActions }
