import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const CropTopDangerZone = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="80">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 93 17.5 107.5 17.5C122 17.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 78 157.5 85.5C146.5 87.5 120.1 89.5 106.5 89.5C92.9 89.5 68 88 57 85.5C56.5 78 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect width="213" height="163" fill="#585858" />
        <rect x="33.8103" y="83.33" width="152" height="14" transform="rotate(-37.2842 33.8103 83.33)" fill="#FFD029" />
        <rect
          x="16.8486"
          y="61.0521"
          width="152"
          height="14"
          transform="rotate(-37.2842 16.8486 61.0521)"
          fill="#FFD029"
        />
        <rect
          x="50.7717"
          y="105.608"
          width="152"
          height="14"
          transform="rotate(-37.2842 50.7717 105.608)"
          fill="#FFD029"
        />
        <rect
          x="67.7334"
          y="127.886"
          width="152"
          height="14"
          transform="rotate(-37.2842 67.7334 127.886)"
          fill="#FFD029"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
