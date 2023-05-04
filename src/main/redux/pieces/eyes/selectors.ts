import type { EyesVariant } from '@/components/pieces/eyes/Eyes'
import type { RootSelector } from '@/redux/selectors'
import type { SvgColor } from '@/types/svgColor'

// Variant

const selectVariant: RootSelector<EyesVariant> = (state) => state.pieces.eyes.variant

// Sclera color

const selectScleraColor: RootSelector<SvgColor> = (state) => state.pieces.eyes.scleraColor

const selectPrScleraColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.scleraColor
const selectResolvedPrScleraColor: RootSelector<SvgColor> = (state) =>
  selectPrScleraColor(state) ?? selectScleraColor(state)

const selectPlScleraColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.scleraColor
const selectResolvedPlScleraColor: RootSelector<SvgColor> = (state) =>
  selectPlScleraColor(state) ?? selectScleraColor(state)

// Color

const selectColor: RootSelector<SvgColor> = (state) => state.pieces.eyes.color

const selectPrColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.color
const selectResolvedPrColor: RootSelector<SvgColor> = (state) => selectPrColor(state) ?? selectColor(state)

const selectPlColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.color
const selectResolvedPlColor: RootSelector<SvgColor> = (state) => selectPlColor(state) ?? selectColor(state)

// Outline color

const selectOutlineColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.outlineColor
const selectResolvedOutlineColor: RootSelector<SvgColor> = (state) => selectOutlineColor(state) ?? selectColor(state)

const selectPrOutlineColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.outlineColor
const selectResolvedPrOutlineColor: RootSelector<SvgColor> = (state) =>
  selectPrOutlineColor(state) ?? selectOutlineColor(state) ?? selectResolvedPrColor(state)

const selectPlOutlineColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.outlineColor
const selectResolvedPlOutlineColor: RootSelector<SvgColor> = (state) =>
  selectPlOutlineColor(state) ?? selectOutlineColor(state) ?? selectResolvedPlColor(state)

// Iris color

const selectIrisColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.irisColor
const selectResolvedIrisColor: RootSelector<SvgColor> = (state) => selectIrisColor(state) ?? selectColor(state)

const selectPrIrisColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.irisColor
const selectResolvedPrIrisColor: RootSelector<SvgColor> = (state) =>
  selectPrIrisColor(state) ?? selectIrisColor(state) ?? selectResolvedPrColor(state)

const selectPlIrisColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.irisColor
const selectResolvedPlIrisColor: RootSelector<SvgColor> = (state) =>
  selectPlIrisColor(state) ?? selectIrisColor(state) ?? selectResolvedPlColor(state)

// Lashes color

const selectLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.lashesColor
const selectResolvedLashesColor: RootSelector<SvgColor> = (state) => selectLashesColor(state) ?? selectColor(state)

const selectPrLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.lashesColor
const selectResolvedPrLashesColor: RootSelector<SvgColor> = (state) =>
  selectPrLashesColor(state) ?? selectLashesColor(state) ?? selectResolvedPrColor(state)

const selectPlLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.lashesColor
const selectResolvedPlLashesColor: RootSelector<SvgColor> = (state) =>
  selectPlLashesColor(state) ?? selectLashesColor(state) ?? selectResolvedPlColor(state)

// Bottom lashes

const selectBottomLashes: RootSelector<boolean> = (state) => state.pieces.eyes.bottomLashes

const selectPrBottomLashes: RootSelector<Opt<boolean>> = (state) => state.pieces.eyes.pr.bottomLashes
const selectResolvedPrBottomLashes: RootSelector<boolean> = (state) =>
  selectPrBottomLashes(state) ?? selectBottomLashes(state)

const selectPlBottomLashes: RootSelector<Opt<boolean>> = (state) => state.pieces.eyes.pl.bottomLashes
const selectResolvedPlBottomLashes: RootSelector<boolean> = (state) =>
  selectPlBottomLashes(state) ?? selectBottomLashes(state)

// Bottom lashes color

const selectBottomLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.bottomLashesColor
const selectResolvedBottomLashesColor: RootSelector<SvgColor> = (state) =>
  selectBottomLashesColor(state) ?? selectResolvedLashesColor(state)

const selectPrBottomLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.bottomLashesColor
const selectResolvedPrBottomLashesColor: RootSelector<SvgColor> = (state) =>
  selectPrBottomLashesColor(state) ??
  selectBottomLashesColor(state) ??
  selectLashesColor(state) ??
  selectResolvedPrColor(state)

const selectPlBottomLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.bottomLashesColor
const selectResolvedPlBottomLashesColor: RootSelector<SvgColor> = (state) =>
  selectPlBottomLashesColor(state) ??
  selectBottomLashesColor(state) ??
  selectLashesColor(state) ??
  selectResolvedPlColor(state)

// Bottom lash 1 color

const selectBottomLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.bottomLash1Color
const selectResolvedBottomLash1Color: RootSelector<SvgColor> = (state) =>
  selectBottomLash1Color(state) ?? selectResolvedBottomLashesColor(state)

const selectPrBottomLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.bottomLash1Color
const selectResolvedPrBottomLash1Color: RootSelector<SvgColor> = (state) =>
  selectPrBottomLash1Color(state) ?? selectBottomLash1Color(state) ?? selectResolvedPrBottomLashesColor(state)

const selectPlBottomLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.bottomLash1Color
const selectResolvedPlBottomLash1Color: RootSelector<SvgColor> = (state) =>
  selectPlBottomLash1Color(state) ?? selectBottomLash1Color(state) ?? selectResolvedPlBottomLashesColor(state)

// Bottom lash 2 color

const selectBottomLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.bottomLash2Color
const selectResolvedBottomLash2Color: RootSelector<SvgColor> = (state) =>
  selectBottomLash2Color(state) ?? selectResolvedBottomLashesColor(state)

const selectPrBottomLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.bottomLash2Color
const selectResolvedPrBottomLash2Color: RootSelector<SvgColor> = (state) =>
  selectPrBottomLash2Color(state) ?? selectBottomLash2Color(state) ?? selectResolvedPrBottomLashesColor(state)

const selectPlBottomLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.bottomLash2Color
const selectResolvedPlBottomLash2Color: RootSelector<SvgColor> = (state) =>
  selectPlBottomLash2Color(state) ?? selectBottomLash2Color(state) ?? selectResolvedPlBottomLashesColor(state)

// Bottom lash 3 color

const selectBottomLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.bottomLash3Color
const selectResolvedBottomLash3Color: RootSelector<SvgColor> = (state) =>
  selectBottomLash3Color(state) ?? selectResolvedBottomLashesColor(state)

const selectPrBottomLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.bottomLash3Color
const selectResolvedPrBottomLash3Color: RootSelector<SvgColor> = (state) =>
  selectPrBottomLash3Color(state) ?? selectBottomLash3Color(state) ?? selectResolvedPrBottomLashesColor(state)

const selectPlBottomLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.bottomLash3Color
const selectResolvedPlBottomLash3Color: RootSelector<SvgColor> = (state) =>
  selectPlBottomLash3Color(state) ?? selectBottomLash3Color(state) ?? selectResolvedPlBottomLashesColor(state)

// Top lashes

const selectTopLashes: RootSelector<boolean> = (state) => state.pieces.eyes.topLashes

const selectPrTopLashes: RootSelector<Opt<boolean>> = (state) => state.pieces.eyes.pr.topLashes
const selectResolvedPrTopLashes: RootSelector<boolean> = (state) => selectPrTopLashes(state) ?? selectTopLashes(state)

const selectPlTopLashes: RootSelector<Opt<boolean>> = (state) => state.pieces.eyes.pl.topLashes
const selectResolvedPlTopLashes: RootSelector<boolean> = (state) => selectPlTopLashes(state) ?? selectTopLashes(state)

// Top lashes color

const selectTopLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.topLashesColor
const selectResolvedTopLashesColor: RootSelector<SvgColor> = (state) =>
  selectTopLashesColor(state) ?? selectResolvedLashesColor(state)

const selectPrTopLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.topLashesColor
const selectResolvedPrTopLashesColor: RootSelector<SvgColor> = (state) =>
  selectPrTopLashesColor(state) ??
  selectTopLashesColor(state) ??
  selectLashesColor(state) ??
  selectResolvedPrColor(state)

const selectPlTopLashesColor: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.topLashesColor
const selectResolvedPlTopLashesColor: RootSelector<SvgColor> = (state) =>
  selectPlTopLashesColor(state) ??
  selectTopLashesColor(state) ??
  selectLashesColor(state) ??
  selectResolvedPlColor(state)

// Top lash 1 color

const selectTopLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.topLash1Color
const selectResolvedTopLash1Color: RootSelector<SvgColor> = (state) =>
  selectTopLash1Color(state) ?? selectResolvedTopLashesColor(state)

const selectPrTopLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.topLash1Color
const selectResolvedPrTopLash1Color: RootSelector<SvgColor> = (state) =>
  selectPrTopLash1Color(state) ?? selectTopLash1Color(state) ?? selectResolvedPrTopLashesColor(state)

const selectPlTopLash1Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.topLash1Color
const selectResolvedPlTopLash1Color: RootSelector<SvgColor> = (state) =>
  selectPlTopLash1Color(state) ?? selectTopLash1Color(state) ?? selectResolvedPlTopLashesColor(state)

// Top lash 2 color

const selectTopLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.topLash2Color
const selectResolvedTopLash2Color: RootSelector<SvgColor> = (state) =>
  selectTopLash2Color(state) ?? selectResolvedTopLashesColor(state)

const selectPrTopLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.topLash2Color
const selectResolvedPrTopLash2Color: RootSelector<SvgColor> = (state) =>
  selectPrTopLash2Color(state) ?? selectTopLash2Color(state) ?? selectResolvedPrTopLashesColor(state)

const selectPlTopLash2Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.topLash2Color
const selectResolvedPlTopLash2Color: RootSelector<SvgColor> = (state) =>
  selectPlTopLash2Color(state) ?? selectTopLash2Color(state) ?? selectResolvedPlTopLashesColor(state)

// Top lash 3 color

const selectTopLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.topLash3Color
const selectResolvedTopLash3Color: RootSelector<SvgColor> = (state) =>
  selectTopLash3Color(state) ?? selectResolvedTopLashesColor(state)

const selectPrTopLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pr.topLash3Color
const selectResolvedPrTopLash3Color: RootSelector<SvgColor> = (state) =>
  selectPrTopLash3Color(state) ?? selectTopLash3Color(state) ?? selectResolvedPrTopLashesColor(state)

const selectPlTopLash3Color: RootSelector<Opt<SvgColor>> = (state) => state.pieces.eyes.pl.topLash3Color
const selectResolvedPlTopLash3Color: RootSelector<SvgColor> = (state) =>
  selectPlTopLash3Color(state) ?? selectTopLash3Color(state) ?? selectResolvedPlTopLashesColor(state)

export const eyesSelectors = {
  variant: {
    select: selectVariant,
  },

  scleraColor: {
    select: selectScleraColor,
  },

  color: {
    select: selectColor,
  },

  outlineColor: {
    select: selectOutlineColor,
    selectResolved: selectResolvedOutlineColor,
  },

  irisColor: {
    select: selectIrisColor,
    selectResolved: selectResolvedIrisColor,
  },

  lashesColor: {
    select: selectLashesColor,
    selectResolved: selectResolvedLashesColor,
  },

  bottomLashes: {
    select: selectBottomLashes,

    color: {
      select: selectBottomLashesColor,
      selectResolved: selectResolvedBottomLashesColor,
    },
  },

  bottomLash1Color: {
    select: selectBottomLash1Color,
    selectResolved: selectResolvedBottomLash1Color,
  },

  bottomLash2Color: {
    select: selectBottomLash2Color,
    selectResolved: selectResolvedBottomLash2Color,
  },

  bottomLash3Color: {
    select: selectBottomLash3Color,
    selectResolved: selectResolvedBottomLash3Color,
  },

  topLashes: {
    select: selectTopLashes,

    color: {
      select: selectTopLashesColor,
      selectResolved: selectResolvedTopLashesColor,
    },
  },

  topLash1Color: {
    select: selectTopLash1Color,
    selectResolved: selectResolvedTopLash1Color,
  },

  topLash2Color: {
    select: selectTopLash2Color,
    selectResolved: selectResolvedTopLash2Color,
  },

  topLash3Color: {
    select: selectTopLash3Color,
    selectResolved: selectResolvedTopLash3Color,
  },

  pr: {
    scleraColor: {
      select: selectPrScleraColor,
      selectResolved: selectResolvedPrScleraColor,
    },

    color: {
      select: selectPrColor,
      selectResolved: selectResolvedPrColor,
    },

    outlineColor: {
      select: selectPrOutlineColor,
      selectResolved: selectResolvedPrOutlineColor,
    },

    irisColor: {
      select: selectPrIrisColor,
      selectResolved: selectResolvedPrIrisColor,
    },

    lashesColor: {
      select: selectPrLashesColor,
      selectResolved: selectResolvedPrLashesColor,
    },

    bottomLashes: {
      select: selectPrBottomLashes,
      selectResolved: selectResolvedPrBottomLashes,

      color: {
        select: selectPrBottomLashesColor,
        selectResolved: selectResolvedPrBottomLashesColor,
      },
    },

    bottomLash1Color: {
      select: selectPrBottomLash1Color,
      selectResolved: selectResolvedPrBottomLash1Color,
    },

    bottomLash2Color: {
      select: selectPrBottomLash2Color,
      selectResolved: selectResolvedPrBottomLash2Color,
    },

    bottomLash3Color: {
      select: selectPrBottomLash3Color,
      selectResolved: selectResolvedPrBottomLash3Color,
    },

    topLashes: {
      select: selectPrTopLashes,
      selectResolved: selectResolvedPrTopLashes,

      color: {
        select: selectPrTopLashesColor,
        selectResolved: selectResolvedPrTopLashesColor,
      },
    },

    topLash1Color: {
      select: selectPrTopLash1Color,
      selectResolved: selectResolvedPrTopLash1Color,
    },

    topLash2Color: {
      select: selectPrTopLash2Color,
      selectResolved: selectResolvedPrTopLash2Color,
    },

    topLash3Color: {
      select: selectPrTopLash3Color,
      selectResolved: selectResolvedPrTopLash3Color,
    },
  },

  pl: {
    scleraColor: {
      select: selectPlScleraColor,
      selectResolved: selectResolvedPlScleraColor,
    },

    color: {
      select: selectPlColor,
      selectResolved: selectResolvedPlColor,
    },

    outlineColor: {
      select: selectPlOutlineColor,
      selectResolved: selectResolvedPlOutlineColor,
    },

    irisColor: {
      select: selectPlIrisColor,
      selectResolved: selectResolvedPlIrisColor,
    },

    lashesColor: {
      select: selectPlLashesColor,
      selectResolved: selectResolvedPlLashesColor,
    },

    bottomLashes: {
      select: selectPlBottomLashes,
      selectResolved: selectResolvedPlBottomLashes,

      color: {
        select: selectPlBottomLashesColor,
        selectResolved: selectResolvedPlBottomLashesColor,
      },
    },

    bottomLash1Color: {
      select: selectPlBottomLash1Color,
      selectResolved: selectResolvedPlBottomLash1Color,
    },

    bottomLash2Color: {
      select: selectPlBottomLash2Color,
      selectResolved: selectResolvedPlBottomLash2Color,
    },

    bottomLash3Color: {
      select: selectPlBottomLash3Color,
      selectResolved: selectResolvedPlBottomLash3Color,
    },

    topLashes: {
      select: selectPlTopLashes,
      selectResolved: selectResolvedPlTopLashes,

      color: {
        select: selectPlTopLashesColor,
        selectResolved: selectResolvedPlTopLashesColor,
      },
    },

    topLash1Color: {
      select: selectPlTopLash1Color,
      selectResolved: selectResolvedPlTopLash1Color,
    },

    topLash2Color: {
      select: selectPlTopLash2Color,
      selectResolved: selectResolvedPlTopLash2Color,
    },

    topLash3Color: {
      select: selectPlTopLash3Color,
      selectResolved: selectResolvedPlTopLash3Color,
    },
  },
} as const
