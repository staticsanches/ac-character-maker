export const applyScaling = (scaledWrapper: HTMLElement, scaledContent: HTMLElement) => {
  scaledContent.style.transform = 'scale(1, 1)'

  const { width: cw, height: ch } = scaledContent.getBoundingClientRect()
  const { width: ww, height: wh } = scaledWrapper.getBoundingClientRect()
  const scaleFactor = Math.min(ww / cw, wh / ch)

  console.log(scaledContent.querySelector('svg'))

  scaledContent.style.transform = `scale(${scaleFactor}, ${scaleFactor})`
}
