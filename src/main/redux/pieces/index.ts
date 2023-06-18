import { combineReducers, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'

import type { PieceType } from '@/types/piece'
import { resetAll } from '../globalActions'
import { blushActions, blushReducer, BlushState, getBlushInitialState } from './blush'
import { bodyActions, bodyReducer, BodyState, getBodyInitialState } from './body'
import { chestActions, chestReducer, ChestState, getChestInitialState } from './chest'
import { earsActions, earsReducer, EarsState, getEarsInitialState } from './ears'
import { eyesActions, eyesReducer, EyesState, getEyesInitialState } from './eyes'
import { getHeadInitialState, headActions, headReducer, HeadState } from './head'
import { getMouthInitialState, mouthActions, mouthReducer, MouthState } from './mouth'
import { getNoseInitialState, noseActions, noseReducer, NoseState } from './nose'
import { getPantsInitialState, pantsActions, pantsReducer, PantsState } from './pants'

export type PiecesState = {
  readonly blush: BlushState
  readonly body: BodyState
  readonly chest: ChestState
  readonly ears: EarsState
  readonly eyes: EyesState
  readonly head: HeadState
  readonly mouth: MouthState
  readonly nose: NoseState
  readonly pants: PantsState
}

const getInitialState: () => PiecesState = () => ({
  blush: getBlushInitialState(),
  body: getBodyInitialState(),
  chest: getChestInitialState(),
  ears: getEarsInitialState(),
  eyes: getEyesInitialState(),
  head: getHeadInitialState(),
  mouth: getMouthInitialState(),
  nose: getNoseInitialState(),
  pants: getPantsInitialState(),
})

const resetNestedSlice = <Key extends keyof PiecesState>(key: Key, state: PiecesState) => {
  state[key] = getInitialState()[key]
}

const { reducer: originalReducer, actions: originalActions } = createSlice({
  name: 'pieces',
  initialState: getInitialState,
  reducers: {
    reset: (state, action: PayloadAction<keyof PiecesState & PieceType>) => resetNestedSlice(action.payload, state),
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => getInitialState())
  },
})

const nestedReducer = combineReducers({
  blush: blushReducer,
  body: bodyReducer,
  chest: chestReducer,
  ears: earsReducer,
  eyes: eyesReducer,
  head: headReducer,
  mouth: mouthReducer,
  nose: noseReducer,
  pants: pantsReducer,
})

const piecesReducer = reduceReducers(originalReducer, nestedReducer) as Reducer<PiecesState>

const piecesActions = {
  ...originalActions,

  blush: blushActions,
  body: bodyActions,
  chest: chestActions,
  ears: earsActions,
  eyes: eyesActions,
  head: headActions,
  mouth: mouthActions,
  nose: noseActions,
  pants: pantsActions,
}

export { piecesReducer, piecesActions }
