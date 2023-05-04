import { blushSelectors } from './blush/selectors'
import { bodySelectors } from './body/selectors'
import { chestSelectors } from './chest/selectors'
import { earsSelectors } from './ears/selectors'
import { eyesSelectors } from './eyes/selectors'
import { headSelectors } from './head/selectors'
import { mouthSelectors } from './mouth/selectors'
import { noseSelectors } from './nose/selectors'
import { pantsSelectors } from './pants/selectors'

export const piecesSelectors = {
  blush: blushSelectors,
  body: bodySelectors,
  chest: chestSelectors,
  ears: earsSelectors,
  eyes: eyesSelectors,
  head: headSelectors,
  mouth: mouthSelectors,
  nose: noseSelectors,
  pants: pantsSelectors,
} as const
