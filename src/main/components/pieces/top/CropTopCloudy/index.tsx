import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const CropTopCloudy = ({ onClick }: OnClickProps) => {
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
        <rect width="213" height="163" fill="#67A3FD" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="53"
              y="32"
              width="42"
              height="21"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M93 50H55C60.2301 50 60.7204 45.8411 60.7204 44.1776C60.7204 34.6122 68.4839 37.9393 68.4839 40.0187C68.4839 32.1169 80.3333 27.5421 80.3333 45.0094C80.3333 41.2664 86.4624 41.2664 86.4624 45.0094C86.4624 48.0038 90.8208 49.5841 93 50Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="132"
              y="9"
              width="58"
              height="28"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M134 34H188C180.568 34 179.871 28.1287 179.871 25.7801C179.871 12.276 168.839 16.9731 168.839 19.9088C168.839 8.75325 152 2.29476 152 26.9544C152 21.6702 143.29 21.6702 143.29 26.9544C143.29 31.1818 137.097 33.4129 134 34Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="72"
              y="42.8129"
              width="42"
              height="19.1871"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M74 59H112C106.77 59 106.28 56.3552 106.28 53.1776C106.28 50 99 48 99 56.5C99 39 86.6667 41 86.6667 54.0094C86.6667 50.2664 80.5376 50.2664 80.5376 54.0094C80.5376 57.0038 76.1792 58.5841 74 59Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="121"
              y="23.6033"
              width="27.5"
              height="17.4019"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M123 38.0053H146.5C142.9 38.0053 142 35.0053 142 33.5053C142 25.5 135.5 27.4948 135.5 29.5C135.5 23 130 22 130 32.5053C130 30.0053 126 28.0053 126 35.0053C126 36.6053 124 37.6719 123 38.0053Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="51"
              y="70"
              width="56"
              height="26"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M105 93H53C60.966 93 62.9574 88.0753 62.9575 85.613C62.9575 72.4719 77.3404 75.7464 77.3404 79.0382C77.3404 68.368 89.5106 66.7265 89.5106 83.9714C89.5106 79.8676 98.3617 76.5845 98.3617 88.0753C98.3617 90.7018 102.787 92.4528 105 93Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="119"
              y="53"
              width="45"
              height="28.4004"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M121 78.4004H162C158.4 78.4004 156.833 74.7338 156.5 72.9004C156.5 63.7004 152.167 62.7338 150 63.4004C150 53.0004 136.5 46.4004 136.5 70.4004C136.5 65.4004 128.5 65.4004 128.5 70.4004C128.5 74.4004 123.5 77.4004 121 78.4004Z"
            fill="#EBF3FF"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="34"
              y="54"
              width="26"
              height="17"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.251111 0 0 0 0 0.527333 0 0 0 0 0.941667 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M58 68H36C37.9317 68 38.7724 66.0465 38.9512 65.0697C38.9512 60.1682 41.2764 59.6532 42.439 60.0083C42.439 54.4675 49.6829 50.9511 49.6829 63.7378C49.6829 61.0739 53.9756 61.0739 53.9756 63.7378C53.9756 65.8689 56.6585 67.4672 58 68Z"
            fill="#EBF3FF"
          />
        </g>
      </g>

      {defsBuilder.build()}
    </>
  )
}
