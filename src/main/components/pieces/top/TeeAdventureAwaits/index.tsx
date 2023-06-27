import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'

import type { OnClickProps } from '@/types/react'

export const TeeAdventureAwaits = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clipPath', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="105">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 93 17.5 107.5 17.5C122 17.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 103 157.5 110.5C146.5 112.5 120.1 114.5 106.5 114.5C92.9 114.5 68 113 57 110.5C56.5 103 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect width="213" height="163" fill="#5C790B" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="27"
              y="4"
              width="85"
              height="119"
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
              <feOffset dx="3" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <rect x="28" y="8" width="77" height="111" fill="#5C790B" />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="62.2893"
              y="1.5"
              width="89.2107"
              height="57"
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
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M98 28.5C94.6667 31.6475 73.3889 22.1319 67 18.5254C81.6667 -3.90018 132.417 -3.11327 147 18.5254C140.611 22.1319 118.833 31.6475 115.5 28.5C117.583 30.795 131.5 28.5 133.667 33.2791C127 37.5413 113.417 46.8525 112.417 50H101.583C100.583 46.8525 87 37.5413 80.3333 33.2791C83.5 28.5 95.9167 30.795 98 28.5Z"
            fill="#88AC22"
          />
          <path
            d="M67 18.5254L66.5815 18.2518L66.2894 18.6985L66.7542 18.9609L67 18.5254ZM98 28.5L98.3702 28.8361L97.6567 28.1365L98 28.5ZM80.3333 33.2791L79.9165 33.0029L79.6358 33.4266L80.064 33.7004L80.3333 33.2791ZM101.583 50L101.107 50.1514L101.218 50.5H101.583V50ZM147 18.5254L147.246 18.9609C147.367 18.8923 147.455 18.7761 147.487 18.6404C147.519 18.5046 147.493 18.3617 147.415 18.246L147 18.5254ZM115.5 28.5L115.843 28.1365L115.13 28.8361L115.5 28.5ZM133.667 33.2791L133.936 33.7004L134.301 33.4671L134.122 33.0727L133.667 33.2791ZM112.417 50V50.5H112.782L112.893 50.1514L112.417 50ZM66.7542 18.9609C69.9746 20.7787 76.9155 24.0699 83.4712 26.5139C86.7481 27.7357 89.9493 28.7535 92.5516 29.267C93.8513 29.5235 95.0235 29.6587 95.9916 29.6226C96.941 29.5873 97.7917 29.3843 98.3433 28.8635L97.6567 28.1365C97.3749 28.4025 96.8316 28.5907 95.9544 28.6233C95.0959 28.6553 94.009 28.5353 92.7452 28.2859C90.2209 27.7878 87.0782 26.7915 83.8205 25.5769C77.3067 23.1485 70.4143 19.8786 67.2458 18.09L66.7542 18.9609ZM97.6298 28.1639C97.4594 28.3516 97.1403 28.5334 96.6268 28.69C96.1228 28.8437 95.4879 28.9567 94.7459 29.0465C93.2491 29.2276 91.4446 29.3018 89.5318 29.4597C87.6455 29.6155 85.6877 29.8514 83.993 30.36C82.3041 30.8669 80.8023 31.6662 79.9165 33.0029L80.7501 33.5553C81.4477 32.5025 82.6855 31.7965 84.2804 31.3178C85.8696 30.8409 87.7399 30.6111 89.6141 30.4563C91.4616 30.3038 93.3498 30.2227 94.866 30.0393C95.6306 29.9468 96.3323 29.8253 96.9185 29.6465C97.4951 29.4707 98.0198 29.2221 98.3702 28.8361L97.6298 28.1639ZM80.064 33.7004C83.3907 35.8272 88.4425 39.2135 92.784 42.4581C94.9557 44.0811 96.9411 45.6622 98.4421 47.0286C99.1929 47.7122 99.8147 48.3349 100.276 48.8767C100.747 49.4301 101.013 49.8571 101.107 50.1514L102.06 49.8486C101.903 49.356 101.527 48.8035 101.037 48.2286C100.538 47.6421 99.8826 46.9877 99.1152 46.2891C97.5797 44.8913 95.5651 43.2881 93.3826 41.6571C89.0159 38.3936 83.9427 34.9932 80.6027 32.8579L80.064 33.7004ZM146.754 18.09C143.588 19.8772 136.572 23.1469 129.932 25.5759C126.612 26.7905 123.406 27.7872 120.835 28.2856C119.547 28.5351 118.44 28.6553 117.567 28.6233C116.674 28.5906 116.124 28.4015 115.843 28.1365L115.157 28.8635C115.709 29.3853 116.569 29.5874 117.53 29.6227C118.511 29.6586 119.702 29.5236 121.025 29.2673C123.673 28.7541 126.936 27.7366 130.276 26.515C136.956 24.0714 144.023 20.7801 147.246 18.9609L146.754 18.09ZM115.13 28.8361C115.486 29.229 116.044 29.4758 116.653 29.6492C117.277 29.8266 118.031 29.9475 118.857 30.0398C120.497 30.2229 122.54 30.3037 124.513 30.4565C126.515 30.6115 128.477 30.8416 130.063 31.3178C131.666 31.799 132.762 32.4942 133.211 33.4856L134.122 33.0727C133.488 31.6745 132.031 30.8644 130.351 30.36C128.654 29.8507 126.6 29.6151 124.591 29.4595C122.554 29.3018 120.592 29.2273 118.968 29.046C118.163 28.956 117.471 28.8424 116.927 28.6873C116.368 28.5283 116.034 28.3448 115.87 28.1639L115.13 28.8361ZM133.397 32.8579C130.057 34.9932 124.984 38.3936 120.617 41.6571C118.435 43.2881 116.42 44.8913 114.885 46.2891C114.117 46.9877 113.462 47.6421 112.963 48.2286C112.473 48.8035 112.097 49.356 111.94 49.8486L112.893 50.1514C112.987 49.8571 113.253 49.4301 113.724 48.8767C114.185 48.3349 114.807 47.7122 115.558 47.0286C117.059 45.6622 119.044 44.0811 121.216 42.4581C125.558 39.2135 130.609 35.8272 133.936 33.7004L133.397 32.8579ZM101.583 50.5H112.417V49.5H101.583V50.5ZM147.415 18.246C139.987 7.22457 123.445 1.60009 107.034 1.50133C90.6233 1.40256 74.0527 6.82828 66.5815 18.2518L67.4185 18.7991C74.614 7.79697 90.7517 2.40335 107.028 2.50131C123.305 2.59927 139.43 8.1876 146.585 18.8049L147.415 18.246Z"
            fill="#88AC22"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="74.5"
              y="7.94817"
              width="64.6885"
              height="65.5518"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.464882 0 0 0 0 0.5875 0 0 0 0 0.122396 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <g
            filter={defsBuilder.addDef('filter', (id) => (
              <filter
                id={id}
                x="74.5"
                y="7.94817"
                width="64.6885"
                height="65.5518"
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
                <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 0.47451 0 0 0 0 0.0431373 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
            ))}
          >
            <ellipse cx="106.5" cy="30" rx="10.5" ry="6" fill="#FFB21E" />
            <path
              d="M96.7007 48.5C93.5007 39.7 102.034 33.8333 106.701 32C111.367 33.8333 119.901 39.7 116.701 48.5C113.501 57.3 108.701 66.8333 106.701 70.5C104.701 66.8333 99.9007 57.3 96.7007 48.5Z"
              fill="#FFB21E"
            />
            <path
              d="M88.0797 21.5C86.4797 18.3 80.0797 12.8333 77.0797 10.5C76.8393 9.83331 77.0028 8.79997 79.5797 9.99997C82.7797 10.4 94.913 20.5 100.58 25.5C100.746 27.3333 100.28 30.9 97.0797 30.5C93.0797 30 90.0797 25.5 88.0797 21.5Z"
              fill="#FFB21E"
              stroke="#FFB21E"
            />
            <path
              d="M125.609 21.5C127.209 18.3 133.609 12.8333 136.609 10.5C136.849 9.83331 136.686 8.79997 134.109 9.99997C130.909 10.4 118.775 20.5 113.109 25.5C112.942 27.3333 113.409 30.9 116.609 30.5C120.609 30 123.609 25.5 125.609 21.5Z"
              fill="#FFB21E"
              stroke="#FFB21E"
            />
          </g>
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="22.5"
              y="29.5"
              width="41.0613"
              height="45.5"
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
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M61.5 60.5C60.5099 54.0642 44 43.5 40.5 33.5L24.5 40L46.5 75C51 73 62.5 67 61.5 60.5Z"
            fill="#88AC22"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="151"
              y="29.5"
              width="41.0613"
              height="45.5"
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
              <feOffset dy="-2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M153.061 60.5C154.051 54.0642 170.561 43.5 174.061 33.5L190.061 40L168.061 75C163.561 73 152.061 67 153.061 60.5Z"
            fill="#88AC22"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="64"
              y="50.0873"
              width="28.8252"
              height="30.517"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M89.5 51.5C83.1 50.3 73.1667 52 69 53C67 55 66.1667 69.5 66 76.5C67.2 78.5 82.1667 77.3333 89.5 76.5C91.9 73.7 90.5 58.6667 89.5 51.5Z"
            fill="#88AC22"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="64.3005"
              y="50.1702"
              width="28.834"
              height="16.9511"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M66.4999 63.4999C65.6999 62.2999 67.4999 55.9999 68.4999 52.9999C70.4999 51.9999 88.5 50.4999 89.5 51.4999C90.5 52.4999 92 60.4999 90.5 61.9999C89 63.4999 67.4999 64.9999 66.4999 63.4999Z"
            fill="#9CC42D"
          />
        </g>
        <circle cx="78.5" cy="63.5" r="2.5" fill="#F4FCE3" />
        <circle cx="112.5" cy="77.5" r="2.5" fill="#F4FCE3" />
        <circle cx="112.5" cy="98.5" r="2.5" fill="#F4FCE3" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="122.309"
              y="50.0873"
              width="28.8252"
              height="30.517"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M125.635 51.5C132.035 50.3 141.968 52 146.135 53C148.135 55 148.968 69.5 149.135 76.5C147.935 78.5 132.968 77.3333 125.635 76.5C123.235 73.7 124.635 58.6667 125.635 51.5Z"
            fill="#88AC22"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="122"
              y="50.1702"
              width="28.834"
              height="16.9511"
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
              <feColorMatrix type="matrix" values="0 0 0 0 0.31567 0 0 0 0 0.416667 0 0 0 0 0.0295139 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M148.635 63.4999C149.435 62.2999 147.635 55.9999 146.635 52.9999C144.635 51.9999 126.635 50.4999 125.635 51.4999C124.635 52.4999 123.135 60.4999 124.635 61.9999C126.135 63.4999 147.635 64.9999 148.635 63.4999Z"
            fill="#9CC42D"
          />
        </g>
        <circle r="2.5" transform="matrix(-1 0 0 1 136.635 63.5)" fill="#F4FCE3" />
      </g>

      {defsBuilder.build()}
    </>
  )
}
