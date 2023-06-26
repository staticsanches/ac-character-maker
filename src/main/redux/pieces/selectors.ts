import { blushSelectors } from './blush/selectors'
import { bodySelectors } from './body/selectors'
import { chestSelectors } from './chest/selectors'
import { earsSelectors } from './ears/selectors'
import { eyesSelectors } from './eyes/selectors'
import { hairSelectors } from './hair/selectors'
import { headSelectors } from './head/selectors'
import { mouthSelectors } from './mouth/selectors'
import { noseSelectors } from './nose/selectors'
import { pantsSelectors } from './pants/selectors'
import { topSelectors } from './top/selectors'

export const piecesSelectors = {
  blush: blushSelectors,
  body: bodySelectors,
  chest: chestSelectors,
  ears: earsSelectors,
  eyes: eyesSelectors,
  hair: hairSelectors,
  head: headSelectors,
  mouth: mouthSelectors,
  nose: noseSelectors,
  pants: pantsSelectors,
  top: topSelectors,
} as const
