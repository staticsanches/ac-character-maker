import { applyScaling } from '@/utils/applyScaling'
import { debounce } from '@/utils/debounce'
import React, { createRef, useEffect } from 'react'

export const useScalableContent = <W extends HTMLElement, C extends HTMLElement>(): {
  scalableWrapperRef: React.RefObject<W>
  scalableContentRef: React.RefObject<C>
} => {
  const scalableWrapperRef = createRef<W>()
  const scalableContentRef = createRef<C>()

  useEffect(() => {
    _applyScaling(scalableWrapperRef, scalableContentRef)

    const handleResize = () => debouncedApplyScaling(scalableWrapperRef, scalableContentRef)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [scalableWrapperRef, scalableContentRef])

  return { scalableWrapperRef, scalableContentRef }
}

const _applyScaling = (
  scalableWrapperRef: React.RefObject<HTMLElement>,
  scalableContentRef: React.RefObject<HTMLElement>
) => {
  const currentWrapper = scalableWrapperRef.current
  const currentContent = scalableContentRef.current
  if (!currentWrapper || !currentContent) {
    return
  }

  applyScaling(currentWrapper, currentContent)
}

const debouncedApplyScaling = debounce(10, _applyScaling)
