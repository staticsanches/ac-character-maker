import merge from 'ts-deepmerge'

export const autoMergeDeep = <S>(inboundState: S, originalState: S, reducedState: S): S => {
  const newState = { ...reducedState }
  // only rehydrate if inboundState exists and is an object
  if (inboundState && typeof inboundState === 'object') {
    const keys = Object.keys(inboundState) as (keyof S)[]
    keys.forEach((key) => {
      // ignore _persist data
      if (key === '_persist') return
      // if reducer modifies substate, skip auto rehydration
      if (originalState[key] !== reducedState[key]) {
        return
      }
      const newValue = newState[key]
      const oldValue = inboundState[key]
      if (isPlainEnoughObject(newValue) && isPlainEnoughObject(oldValue)) {
        // if object is plain enough merge the new values
        const mergedValue = merge(newValue, oldValue)
        newState[key] = mergedValue as S[keyof S]
        return
      }
      // otherwise hard set
      newState[key] = inboundState[key]
    })
  }

  return newState
}

const isPlainEnoughObject = (o: unknown): o is object => {
  return o !== null && !Array.isArray(o) && typeof o === 'object'
}
