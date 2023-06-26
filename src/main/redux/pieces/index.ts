import reduceReducers from 'reduce-reducers'

import { combineReducers, createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit'

import { applyPreset, resetAll } from '../globalActions'
import { blushActions, blushReducer, BlushState, getBlushInitialState } from './blush'
import { bodyActions, bodyReducer, BodyState, getBodyInitialState } from './body'
import { chestActions, chestReducer, ChestState, getChestInitialState } from './chest'
import { earsActions, earsReducer, EarsState, getEarsInitialState } from './ears'
import { eyesActions, eyesReducer, EyesState, getEyesInitialState } from './eyes'
import { getHairInitialState, hairActions, hairReducer, HairState } from './hair'
import { getHeadInitialState, headActions, headReducer, HeadState } from './head'
import { getMouthInitialState, mouthActions, mouthReducer, MouthState } from './mouth'
import { getNoseInitialState, noseActions, noseReducer, NoseState } from './nose'
import { getPantsInitialState, pantsActions, pantsReducer, PantsState } from './pants'
import { getTopInitialState, topActions, topReducer, TopState } from './top'

import type { PieceType } from '@/types/piece'
export type PiecesState = {
  readonly blush: BlushState
  readonly body: BodyState
  readonly chest: ChestState
  readonly ears: EarsState
  readonly eyes: EyesState
  readonly hair: HairState
  readonly head: HeadState
  readonly mouth: MouthState
  readonly nose: NoseState
  readonly pants: PantsState
  readonly top: TopState
}

export const getPiecesInitialState: () => PiecesState = () => ({
  blush: getBlushInitialState(),
  body: getBodyInitialState(),
  chest: getChestInitialState(),
  ears: getEarsInitialState(),
  eyes: getEyesInitialState(),
  hair: getHairInitialState(),
  head: getHeadInitialState(),
  mouth: getMouthInitialState(),
  nose: getNoseInitialState(),
  pants: getPantsInitialState(),
  top: getTopInitialState(),
})

const resetNestedSlice = <Key extends keyof PiecesState>(key: Key, state: PiecesState) => {
  state[key] = getPiecesInitialState()[key]
}

const { reducer: originalReducer, actions: originalActions } = createSlice({
  name: 'pieces',
  initialState: getPiecesInitialState,
  reducers: {
    reset: (state, action: PayloadAction<keyof PiecesState & PieceType>) => resetNestedSlice(action.payload, state),
  },
  extraReducers: (builder) => {
    builder.addCase(applyPreset, (_, action) => action.payload.pieces).addCase(resetAll, () => getPiecesInitialState())
  },
})

const nestedReducer = combineReducers({
  blush: blushReducer,
  body: bodyReducer,
  chest: chestReducer,
  ears: earsReducer,
  eyes: eyesReducer,
  hair: hairReducer,
  head: headReducer,
  mouth: mouthReducer,
  nose: noseReducer,
  pants: pantsReducer,
  top: topReducer,
})

const piecesReducer = reduceReducers(originalReducer, nestedReducer) as Reducer<PiecesState>

const piecesActions = {
  ...originalActions,

  blush: blushActions,
  body: bodyActions,
  chest: chestActions,
  ears: earsActions,
  eyes: eyesActions,
  hair: hairActions,
  head: headActions,
  mouth: mouthActions,
  nose: noseActions,
  pants: pantsActions,
  top: topActions,
}

export { piecesReducer, piecesActions }
