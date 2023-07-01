import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const TeeSpringPlaid = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="105">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 103 17 107.5 22C112 17 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 103 157.5 110.5C146.5 112.5 120.1 114.5 106.5 114.5C92.9 114.5 68 113 57 110.5C56.5 103 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect x="20" width="173" height="125" fill="#F4F6F8" />
        <rect x="175" y="15" width="15" height="137" transform="rotate(90 175 15)" fill="#FF78C9" fillOpacity="0.51" />
        <rect x="100" y="16" width="16" height="101" fill="#FF958E" fillOpacity="0.51" />
        <rect x="152" y="16" width="15" height="101" fill="#FF958E" fillOpacity="0.51" />
        <rect x="48" y="16" width="15" height="101" fill="#FF958E" fillOpacity="0.51" />
        <rect x="93" y="12" width="4" height="105" fill="#ACEACE" fillOpacity="0.5" />
        <rect
          x="180"
          y="34"
          width="4.00001"
          height="149"
          transform="rotate(90 180 34)"
          fill="#ACEACE"
          fillOpacity="0.5"
        />
        <rect
          x="180"
          y="59"
          width="4.00001"
          height="149"
          transform="rotate(90 180 59)"
          fill="#ACEACE"
          fillOpacity="0.5"
        />
        <rect x="159" y="86" width="4" height="105" transform="rotate(90 159 86)" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="147" y="113" width="4" height="88" transform="rotate(90 147 113)" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="66" y="12" width="4" height="105" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="40" y="12" width="4" height="57" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="119" y="12" width="4" height="105" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="145" y="12" width="4" height="105" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="171" y="12" width="4" height="61" fill="#ACEACE" fillOpacity="0.5" />
        <rect x="29" y="56" width="15" height="157" transform="rotate(-90 29 56)" fill="#FF958E" fillOpacity="0.51" />
        <rect x="29" y="109" width="15" height="157" transform="rotate(-90 29 109)" fill="#FF958E" fillOpacity="0.51" />
        <rect x="74" y="7" width="15" height="110" fill="#FF78C9" fillOpacity="0.51" />
        <rect x="163" y="67" width="15" height="110" transform="rotate(90 163 67)" fill="#FF78C9" fillOpacity="0.51" />
        <rect x="22" y="7" width="15" height="110" fill="#FF78C9" fillOpacity="0.51" />
        <rect x="126" y="7" width="15" height="110" fill="#FF78C9" fillOpacity="0.51" />
        <rect x="178" y="7" width="15" height="110" fill="#FF78C9" fillOpacity="0.51" />
        <circle cx="108" cy="40" r="4" fill="#FFFEF4" />
        <circle cx="108" cy="60" r="4" fill="#FFFEF4" />
        <circle cx="108" cy="82" r="4" fill="#FFFEF4" />
        <circle cx="108" cy="105" r="4" fill="#FFFEF4" />
        <path
          d="M121.5 33.5C117.9 32.7 110.667 25.5 107.5 22C108.7 14 132 7 134.5 9.99997C134.5 12.8 125.833 26.8333 121.5 33.5Z"
          fill="#ACEACE"
          fillOpacity="0.8"
        />
        <path
          d="M93 33.5C96.6 32.7 103.833 25.5 107 22C105.8 14 82.5 7 80 9.99997C80 12.8 88.6667 26.8333 93 33.5Z"
          fill="#ACEACE"
          fillOpacity="0.8"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
