export const convertSvgToImage = async (
  svg: string,
  imageType: `image/${string}`,
  fill?: string,
  fallbackHeight = 200,
  fallbackWidth = 200
) => {
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }))

  try {
    return await new Promise<string>((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')

        let match = svg.match(/height="(\d+)(px)?"/m)
        canvas.height = match && match[1] ? parseInt(match[1], 10) : fallbackHeight

        match = svg.match(/width="(\d+)(px)?"/m)
        canvas.width = match && match[1] ? parseInt(match[1], 10) : fallbackWidth

        const ctx = canvas.getContext('2d')!
        if (fill) {
          ctx.save()
          ctx.fillStyle = fill
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.strokeRect(0, 0, canvas.width, canvas.height)
          ctx.restore()
        }

        ctx.drawImage(img, 0, 0)

        resolve(canvas.toDataURL(imageType))
      }
      img.onerror = reject
      img.src = url
    })
  } finally {
    URL.revokeObjectURL(url)
  }
}
