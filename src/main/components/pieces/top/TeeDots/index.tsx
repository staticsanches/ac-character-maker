import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const TeeDots = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id}>
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 93 17.5 107.5 17.5C122 17.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 103 157.5 110.5C146.5 112.5 120.1 114.5 106.5 114.5C92.9 114.5 68 113 57 110.5C56.5 103 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect x="20" width="173" height="125" fill="#212121" />

        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter id={id}>
              <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
              <feBlend mode="normal" in="SourceGraphic" />
            </filter>
          ))}
        >
          <circle cx="44" cy="41" r="15" fill="#FF2D5F" />
          <circle cx="64" cy="74" r="15" fill="#53ACFF" />
          <circle cx="64" cy="8" r="15" fill="#FFDE31" />
          <circle cx="84" cy="41" r="15" fill="#3AF00D" />
          <circle cx="84" cy="107" r="15" fill="#FF2D5F" />
          <circle cx="44" cy="107" r="15" fill="#3AF00D" />
          <circle cx="104" cy="74" r="15" fill="#FFDE31" />
          <circle cx="104" cy="8" r="15" fill="#53ACFF" />
          <circle cx="124" cy="41" r="15" fill="#FF2D5F" />
          <circle cx="124" cy="107" r="15" fill="#3AF00D" />
          <circle cx="164" cy="107" r="15" fill="#FF2D5F" />
          <circle cx="144" cy="74" r="15" fill="#53ACFF" />
          <circle cx="144" cy="8" r="15" fill="#FFDE31" />
          <circle cx="164" cy="41" r="15" fill="#3AF00D" />
          <circle cx="184" cy="74" r="15" fill="#FFDE31" />
        </g>
      </g>

      {defsBuilder.build()}
    </>
  )
}
