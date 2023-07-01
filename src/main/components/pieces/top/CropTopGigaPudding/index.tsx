import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const CropTopGigaPudding = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="80">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 92.5 25.5 107 25.5C121.5 25.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 78 157.5 85.5C146.5 87.5 120.1 89.5 106.5 89.5C92.9 89.5 68 88 57 85.5C56.5 78 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect width="213" height="163" fill="#FFDD65" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="64.5"
              y="3.5"
              width="87"
              height="39"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.313726 0 0 0 0 0.113725 0 0 0 0.2 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M79 19C76 16.5 70.6667 15.3333 67.5 13.5L79 5.5L106.5 20.5H109.5L137 5.5L148.5 13.5C145.333 15.3333 140 16.5 137 19C136 23.5 137 30 134.5 32C131.5 32.5 125.5 30 123 30.5C120.5 32 118.7 37.3 115.5 38.5C113 37.5 110.5 33 108 32.5C105.5 33 103 37.5 100.5 38.5C97.3 37.3 95.5 32 93 30.5C90.5 30 84.5 32.5 81.5 32C79 30 80 23.5 79 19Z"
            fill="#8C501D"
          />
        </g>
        <path
          d="M94.9732 58.1282C94.8494 56.1209 94.3032 54.2711 93.4442 52.9499C92.5852 51.6287 91.4769 50.9339 90.3417 51.005C89.2065 51.076 88.1284 51.9076 87.3238 53.3329C86.5192 54.7582 86.0475 56.6717 86.0034 58.6895C85.9593 60.7074 86.3461 62.6802 87.0861 64.2121C87.8262 65.7441 88.8647 66.7218 89.9934 66.9491C91.122 67.1765 92.2573 66.6366 93.1714 65.4378C94.0855 64.2391 94.7107 62.4701 94.9217 60.4859L90.5 59L94.9732 58.1282Z"
          fill="#8C501D"
        />
        <path
          d="M129.973 58.1282C129.849 56.1209 129.303 54.2711 128.444 52.9499C127.585 51.6287 126.477 50.9339 125.342 51.005C124.207 51.076 123.128 51.9076 122.324 53.3329C121.519 54.7582 121.047 56.6717 121.003 58.6895C120.959 60.7074 121.346 62.6802 122.086 64.2121C122.826 65.7441 123.865 66.7218 124.993 66.9491C126.122 67.1765 127.257 66.6366 128.171 65.4378C129.085 64.2391 129.711 62.4701 129.922 60.4859L125.5 59L129.973 58.1282Z"
          fill="#8C501D"
        />
        <path
          d="M104 72C104.167 73.1667 105.3 75.5 108.5 75.5C111.7 75.5 112.5 73.1667 112.5 72"
          stroke="#8C501D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
