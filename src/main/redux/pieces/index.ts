import type { PieceType } from '@/types/piece'
import { combineReducers, createSlice, type PayloadAction, type Reducer } from '@reduxjs/toolkit'
import reduceReducers from 'reduce-reducers'
import { applyPreset, resetAll } from '../globalActions'
import { blushActions, blushReducer, getBlushInitialState, type BlushState } from './blush'
import { bodyActions, bodyReducer, getBodyInitialState, type BodyState } from './body'
import { chestActions, chestReducer, getChestInitialState, type ChestState } from './chest'
import { earsActions, earsReducer, getEarsInitialState, type EarsState } from './ears'
import { eyesActions, eyesReducer, getEyesInitialState, type EyesState } from './eyes'
import { getHairInitialState, hairActions, hairReducer, type HairState } from './hair'
import { getHeadInitialState, headActions, headReducer, type HeadState } from './head'
import { getMouthInitialState, mouthActions, mouthReducer, type MouthState } from './mouth'
import { getNoseInitialState, noseActions, noseReducer, type NoseState } from './nose'
import { getPantsInitialState, pantsActions, pantsReducer, type PantsState } from './pants'
import { getTopInitialState, topActions, topReducer, type TopState } from './top'

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

export { piecesActions, piecesReducer }
