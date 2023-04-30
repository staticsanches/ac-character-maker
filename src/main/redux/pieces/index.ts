import { combineReducers, createSlice, Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'

import { bodyReducer, BodyState, getBodyInitialState } from './body'
import { chestReducer, ChestState, getChestInitialState } from './chest'
import { earsReducer, EarsState, getEarsInitialState } from './ears'
import { getHeadInitialState, headReducer, HeadState } from './head'
import { getNoseInitialState, noseReducer, NoseState } from './nose'

export type PiecesState = {
  readonly body: BodyState
  readonly chest: ChestState
  readonly ears: EarsState
  readonly head: HeadState
  readonly nose: NoseState
}

const initialState: () => PiecesState = () => ({
  body: getBodyInitialState(),
  chest: getChestInitialState(),
  ears: getEarsInitialState(),
  head: getHeadInitialState(),
  nose: getNoseInitialState(),
})

const { reducer: originalReducer, actions: piecesActions } = createSlice({
  name: 'pieces',
  initialState,
  reducers: {},
})

const nestedReducer = combineReducers({
  body: bodyReducer,
  chest: chestReducer,
  ears: earsReducer,
  head: headReducer,
  nose: noseReducer,
})

const piecesReducer = reduceReducers(originalReducer, nestedReducer) as Reducer<PiecesState>

export { piecesReducer, piecesActions }
