import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'

import type { OnClickProps } from '@/types/react'

export const TeeSailor = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="105">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 103 30.5 107.5 35.5C112 30.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 103 157.5 110.5C146.5 112.5 120.1 114.5 106.5 114.5C92.9 114.5 68 113 57 110.5C56.5 103 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect x="20" width="173" height="125" fill="#F4F6F8" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="90"
              y="29"
              width="34.5"
              height="62"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.415686 0 0 0 0 0.788235 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M103.5 47C100 49.3333 93 55.6 93 62C93 65.9499 94.2189 69.5342 95.2725 72.6324C96.3528 75.8092 97.2594 78.475 96.5 80.5C99.8333 77.5 106.6 70.1 107 64.5C108 60.5 109 50.2 107 45L103.5 47Z"
            fill="#2C6BCA"
          />
          <path
            d="M107 64.5C108.5 72 113.5 87 121.5 87C119 83.5 119.146 74.6248 119.5 72.5C120 69.5 123.5 53.5 111 47L107 45C109 50.2 108 60.5 107 64.5Z"
            fill="#1D57AE"
          />
          <path
            d="M102.5 42C102.9 40.8 106 42 107.5 42C109 42 112.1 40.8 112.5 42C113 43.5 112.707 45.793 112 46.5C111 47.5 108.5 47.5 107.5 47C106.5 47.5 104 47.5 103 46.5C102.293 45.793 102 43.5 102.5 42Z"
            fill="white"
          />
          <path
            d="M107.5 42.5C94.7 42.5 92.4502 34.8333 93.1168 31H121.117C121.784 34.8333 120.3 42.5 107.5 42.5Z"
            fill="#2867C7"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="67.5"
              y="1"
              width="80"
              height="37.5"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.237778 0 0 0 0 0.499333 0 0 0 0 0.891667 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M107.5 35.5C76.7 35.5 70.8333 17.8333 69.5 9C80.6667 7.66667 103.9 5 107.5 5C111.1 5 134.333 7.66667 145.5 9C144.167 17.8333 138.3 35.5 107.5 35.5Z"
            fill="#67A3FD"
          />
          <path
            d="M107.5 34C77.9158 34 72.2807 16.0437 71 7.06557C81.7259 5.71038 104.042 3 107.5 3C110.958 3 133.274 5.71038 144 7.06557C142.719 16.0437 137.084 34 107.5 34Z"
            fill="white"
          />
          <path
            d="M107.5 33C78.7263 33 73.2456 15.0437 72 6.06557C82.432 4.71038 104.137 2 107.5 2C110.863 2 132.568 4.71038 143 6.06557C141.754 15.0437 136.274 33 107.5 33Z"
            fill="#C7DDFF"
          />
        </g>
        <path
          d="M49.0001 47C46.2001 43.4 41.1668 34.5 39.0001 30.5L29.5001 45C28.7001 50.2 43.1668 63.1667 50.5001 69L61.0001 62C59.5001 61.5 52.5001 51.5 49.0001 47Z"
          fill="#67A3FD"
        />
        <path
          d="M166 47C168.8 43.4 173.833 34.5 176 30.5L185.5 45C186.3 50.2 171.833 63.1667 164.5 69L154 62C155.5 61.5 162.5 51.5 166 47Z"
          fill="#67A3FD"
        />
        <path d="M36.5 35.5C38 38.5 41.7 45.5 44.5 49.5C47.3 53.5 55 61.5 58.5 65" stroke="#F4F6F8" strokeWidth="3" />
        <path
          d="M178 35.5C176.5 38.5 172.8 45.5 170 49.5C167.2 53.5 159.5 61.5 156 65"
          stroke="#F4F6F8"
          strokeWidth="3"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
