import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const TeePeanutButterAndJelly = ({ onClick }: OnClickProps) => {
  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      <g
        clipPath={defsBuilder.addDef('clip-path', (id) => (
          <clipPath id={id} x="31" y="10" width="153" height="105">
            <path d="M31 45.5C37.8 31.5 69 10 80.5 10C86.6667 12.5 93 17.5 107.5 17.5C122 17.5 128 12.5 134 10C145.5 10 176.7 31.5 183.5 45.5C181.333 55 168 66.5 164 68.5C161 66.5 154.6 62.1 153 60.5C151 58.5 158 103 157.5 110.5C146.5 112.5 120.1 114.5 106.5 114.5C92.9 114.5 68 113 57 110.5C56.5 103 63.5 58.5 61.5 60.5C59.9 62.1 53.5 66.5 50.5 68.5C46.5 66.5 33.1667 55 31 45.5Z" />
          </clipPath>
        ))}
        transform="translate(-20)"
        onClick={onClick}
      >
        <rect x="20" width="173" height="125" fill="#CD2662" />
        <path d="M107 23C95.4 23 78.5 15.3333 72 11L82 7H133.5L144 11C128 20 118.6 23 107 23Z" fill="#FFCE84" />
        <path
          d="M43.5 54C39 48 35 44 33.5 38.5L28 45C28.4 52.6 42.5 65.1667 49.5 70.5L57.5 66C52 63.5 47 58 43.5 54Z"
          fill="#FFCE84"
        />
        <path
          d="M172 54C177 47 178 45 181 38.5L186.5 45C186.1 52.6 172 65.1667 165 70.5L157 66C161.5 64 165 61.5 172 54Z"
          fill="#FFCE84"
        />
        <path
          d="M104 107.5C93.2 107.5 65.1667 104.5 52.5 103V112.5C58.1 122.9 127.5 116.833 161.5 112.5V103C146.833 104.5 139.5 107.5 104 107.5Z"
          fill="#FFCE84"
        />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="73.1309"
              y="33.2744"
              width="49.4138"
              height="48.7073"
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
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.729167 0 0 0 0 0.112413 0 0 0 0 0.334001 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            fillRule="evenodd"
            d="M112.22 43.2463C112.184 43.1073 112.145 42.9687 112.101 42.8304C110.73 38.5058 105.744 36.2282 100.964 37.7433C96.1842 39.2584 93.4206 43.9924 94.7914 48.317C94.8352 48.4553 94.8828 48.5914 94.9338 48.7254L94.9103 48.7329C94.8748 48.5939 94.8352 48.4553 94.7914 48.317C93.4206 43.9924 88.4346 41.7148 83.6547 43.2299C78.8749 44.745 76.1113 49.479 77.4821 53.8036C77.5259 53.9419 77.5734 54.078 77.6245 54.212L77.6127 54.2158L83.5968 73.0949C84.765 76.7802 88.6994 78.8207 92.3847 77.6526L113.658 70.9096C117.343 69.7415 119.384 65.807 118.216 62.1217L112.231 43.2426L112.22 43.2463Z"
            fill="#FFCE84"
          />
          <path
            d="M112.22 43.2463L110.282 43.7405C110.418 44.2738 110.767 44.7274 111.248 44.9946C111.729 45.2619 112.299 45.3191 112.824 45.1528L112.22 43.2463ZM94.9338 48.7254L95.5382 50.6319C96.0627 50.4657 96.4956 50.0906 96.7349 49.595C96.9742 49.0995 96.9987 48.5272 96.8027 48.013L94.9338 48.7254ZM94.9103 48.7329L92.9723 49.2271C93.1083 49.7604 93.458 50.214 93.939 50.4812C94.4201 50.7485 94.99 50.8057 95.5146 50.6394L94.9103 48.7329ZM77.6245 54.212L78.2288 56.1185C78.7534 55.9523 79.1862 55.5772 79.4255 55.0816C79.6648 54.5861 79.6893 54.0138 79.4933 53.4996L77.6245 54.212ZM77.6127 54.2158L77.0084 52.3092C75.9554 52.643 75.3724 53.7671 75.7061 54.8201L77.6127 54.2158ZM118.216 62.1217L120.122 61.5174L118.216 62.1217ZM112.231 43.2426L114.138 42.6383C113.804 41.5853 112.68 41.0023 111.627 41.336L112.231 43.2426ZM110.194 43.4347C110.227 43.5366 110.256 43.6385 110.282 43.7405L114.158 42.7521C114.113 42.5761 114.063 42.4008 114.007 42.2261L110.194 43.4347ZM101.568 39.6498C105.479 38.4102 109.213 40.3381 110.194 43.4347L114.007 42.2261C112.247 36.6735 106.009 34.0463 100.36 35.8368L101.568 39.6498ZM96.6979 47.7127C95.7164 44.6161 97.6575 40.8895 101.568 39.6498L100.36 35.8368C94.711 37.6273 91.1249 43.3687 92.8849 48.9213L96.6979 47.7127ZM96.8027 48.013C96.7652 47.9146 96.7302 47.8145 96.6979 47.7127L92.8849 48.9213C92.9403 49.096 93.0004 49.2682 93.065 49.4378L96.8027 48.013ZM94.3295 46.8189L94.306 46.8264L95.5146 50.6394L95.5382 50.6319L94.3295 46.8189ZM96.8482 48.2387C96.8034 48.0627 96.7533 47.8874 96.6979 47.7127L92.8849 48.9214C92.9172 49.0232 92.9463 49.1251 92.9723 49.2271L96.8482 48.2387ZM96.6979 47.7127C94.9379 42.1601 88.6992 39.5329 83.0504 41.3234L84.259 45.1364C88.1699 43.8968 91.9034 45.8247 92.8849 48.9214L96.6979 47.7127ZM83.0504 41.3234C77.4016 43.1139 73.8155 48.8554 75.5755 54.408L79.3886 53.1993C78.407 50.1027 80.3481 46.3761 84.259 45.1364L83.0504 41.3234ZM75.5755 54.408C75.6309 54.5826 75.691 54.7548 75.7556 54.9244L79.4933 53.4996C79.4558 53.4013 79.4208 53.3012 79.3886 53.1993L75.5755 54.408ZM77.0202 52.3055L77.0084 52.3092L78.217 56.1223L78.2288 56.1185L77.0202 52.3055ZM75.7061 54.8201L81.6903 73.6992L85.5034 72.4906L79.5192 53.6114L75.7061 54.8201ZM81.6903 73.6992C83.1922 78.4374 88.2508 81.061 92.989 79.5591L91.7804 75.7461C89.1481 76.5805 86.3377 75.1229 85.5034 72.4906L81.6903 73.6992ZM92.989 79.5591L114.262 72.8161L113.054 69.0031L91.7804 75.7461L92.989 79.5591ZM114.262 72.8161C119 71.3142 121.624 66.2556 120.122 61.5174L116.309 62.726C117.143 65.3583 115.686 68.1687 113.054 69.0031L114.262 72.8161ZM120.122 61.5174L114.138 42.6383L110.325 43.8469L116.309 62.726L120.122 61.5174ZM111.627 41.336L111.615 41.3398L112.824 45.1528L112.836 45.1491L111.627 41.336Z"
            fill="#D8753D"
            mask={defsBuilder.addDef('mask', (id) => (
              <mask id={id} fill="white">
                <path
                  fillRule="evenodd"
                  d="M112.22 43.2463C112.184 43.1073 112.145 42.9687 112.101 42.8304C110.73 38.5058 105.744 36.2282 100.964 37.7433C96.1842 39.2584 93.4206 43.9924 94.7914 48.317C94.8352 48.4553 94.8828 48.5914 94.9338 48.7254L94.9103 48.7329C94.8748 48.5939 94.8352 48.4553 94.7914 48.317C93.4206 43.9924 88.4346 41.7148 83.6547 43.2299C78.8749 44.745 76.1113 49.479 77.4821 53.8036C77.5259 53.9419 77.5734 54.078 77.6245 54.212L77.6127 54.2158L83.5968 73.0949C84.765 76.7802 88.6994 78.8207 92.3847 77.6526L113.658 70.9096C117.343 69.7415 119.384 65.807 118.216 62.1217L112.231 43.2426L112.22 43.2463Z"
                />
              </mask>
            ))}
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="93.3044"
              y="45.4346"
              width="48.7595"
              height="48.0075"
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
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.729167 0 0 0 0 0.149418 0 0 0 0 0.112413 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            fillRule="evenodd"
            d="M137.693 65.0735C137.737 64.9371 137.778 64.7988 137.815 64.6586C138.973 60.272 135.98 55.679 131.132 54.3998C126.297 53.1241 121.442 55.6259 120.267 59.9902C121.399 55.6146 118.41 51.0432 113.575 49.7675C108.727 48.4884 103.858 51.0074 102.701 55.394C102.664 55.5342 102.631 55.6746 102.602 55.8151L102.59 55.8119L97.5378 74.9615C96.5515 78.6995 98.7823 82.5294 102.52 83.5156L124.098 89.2087C127.836 90.195 131.666 87.9642 132.652 84.2261L137.705 65.0766L137.693 65.0735ZM120.16 60.4474L120.136 60.4412C120.176 60.3166 120.214 60.1903 120.248 60.0625C120.215 60.1907 120.186 60.319 120.16 60.4474Z"
            fill="#FFCE84"
          />
          <path
            d="M137.693 65.0735L135.791 64.4535C135.621 64.9766 135.673 65.547 135.937 66.0302C136.2 66.5135 136.651 66.8669 137.183 67.0073L137.693 65.0735ZM120.267 59.9902L118.331 59.4895C118.056 60.5552 118.693 61.6432 119.757 61.924C120.822 62.2048 121.913 61.5728 122.199 60.5099L120.267 59.9902ZM102.602 55.8151L102.092 57.749C102.624 57.8893 103.191 57.8043 103.658 57.5138C104.126 57.2233 104.453 56.7531 104.562 56.2139L102.602 55.8151ZM102.59 55.8119L103.1 53.8781C102.588 53.7428 102.042 53.8167 101.584 54.0837C101.125 54.3507 100.792 54.7888 100.656 55.3017L102.59 55.8119ZM97.5378 74.9615L99.4716 75.4717L97.5378 74.9615ZM102.52 83.5156L102.01 85.4494L102.52 83.5156ZM124.098 89.2087L124.608 87.2749L124.098 89.2087ZM137.705 65.0766L139.639 65.5868C139.774 65.074 139.7 64.5283 139.433 64.07C139.166 63.6116 138.728 63.2781 138.215 63.1428L137.705 65.0766ZM120.16 60.4474L119.649 62.3813C120.181 62.5217 120.748 62.4366 121.215 62.1461C121.683 61.8557 122.01 61.3854 122.119 60.8462L120.16 60.4474ZM120.136 60.4412L118.234 59.8212C118.064 60.3443 118.116 60.9147 118.38 61.3979C118.643 61.8812 119.094 62.2346 119.626 62.375L120.136 60.4412ZM120.248 60.0625L122.185 60.5632C122.46 59.4975 121.823 58.4095 120.759 58.1287C119.694 57.8479 118.603 58.4798 118.317 59.5427L120.248 60.0625ZM135.881 64.1484C135.854 64.2517 135.824 64.3534 135.791 64.4535L139.594 65.6935C139.651 65.5209 139.702 65.346 139.749 65.1688L135.881 64.1484ZM130.622 56.3337C134.589 57.3803 136.71 61.0074 135.881 64.1484L139.749 65.1688C141.235 59.5367 137.372 53.9777 131.642 52.466L130.622 56.3337ZM122.199 60.5099C123.04 57.3841 126.666 55.29 130.622 56.3337L131.642 52.466C125.928 50.9583 119.844 53.8677 118.336 59.4705L122.199 60.5099ZM122.204 60.4909C123.656 54.8736 119.8 49.3415 114.085 47.8337L113.065 51.7014C117.02 52.745 119.142 56.3556 118.331 59.4895L122.204 60.4909ZM114.085 47.8337C108.356 46.322 102.253 49.2516 100.767 54.8837L104.635 55.9042C105.463 52.7632 109.098 50.6547 113.065 51.7014L114.085 47.8337ZM100.767 54.8837C100.72 55.0609 100.679 55.2385 100.643 55.4164L104.562 56.2139C104.583 56.1107 104.607 56.0075 104.635 55.9042L100.767 54.8837ZM103.113 53.8813L103.1 53.8781L102.08 57.7457L102.092 57.749L103.113 53.8813ZM100.656 55.3017L95.604 74.4512L99.4716 75.4717L104.524 56.3221L100.656 55.3017ZM95.604 74.4512C94.3359 79.2573 97.2041 84.1814 102.01 85.4494L103.031 81.5818C100.361 80.8773 98.7672 78.1417 99.4716 75.4717L95.604 74.4512ZM102.01 85.4494L123.588 91.1426L124.608 87.2749L103.031 81.5818L102.01 85.4494ZM123.588 91.1426C128.394 92.4106 133.318 89.5425 134.586 84.7364L130.719 83.7159C130.014 86.386 127.279 87.9794 124.608 87.2749L123.588 91.1426ZM134.586 84.7364L139.639 65.5868L135.771 64.5664L130.719 83.7159L134.586 84.7364ZM138.215 63.1428L138.203 63.1397L137.183 67.0073L137.195 67.0104L138.215 63.1428ZM120.67 58.5136L120.646 58.5074L119.626 62.375L119.649 62.3813L120.67 58.5136ZM122.037 61.0612C122.089 60.9035 122.136 60.7438 122.18 60.5823L118.317 59.5427C118.292 59.6369 118.264 59.7297 118.234 59.8212L122.037 61.0612ZM122.119 60.8462C122.139 60.7519 122.16 60.6576 122.185 60.5632L118.312 59.5618C118.27 59.7238 118.233 59.8861 118.2 60.0487L122.119 60.8462Z"
            fill="#D8753D"
            mask={defsBuilder.addDef('mask', (id) => (
              <mask id={id} fill="white">
                <path
                  fillRule="evenodd"
                  d="M137.693 65.0735C137.737 64.9371 137.778 64.7988 137.815 64.6586C138.973 60.272 135.98 55.679 131.132 54.3998C126.297 53.1241 121.442 55.6259 120.267 59.9902C121.399 55.6146 118.41 51.0432 113.575 49.7675C108.727 48.4884 103.858 51.0074 102.701 55.394C102.664 55.5342 102.631 55.6746 102.602 55.8151L102.59 55.8119L97.5378 74.9615C96.5515 78.6995 98.7823 82.5294 102.52 83.5156L124.098 89.2087C127.836 90.195 131.666 87.9642 132.652 84.2261L137.705 65.0766L137.693 65.0735ZM120.16 60.4474L120.136 60.4412C120.176 60.3166 120.214 60.1903 120.248 60.0625C120.215 60.1907 120.186 60.319 120.16 60.4474Z"
                />
              </mask>
            ))}
          />
        </g>
        <circle cx="111.274" cy="58.5461" r="3.1819" transform="rotate(45 111.274 58.5461)" fill="#FFF6E8" />
        <circle cx="110.374" cy="57.6461" r="1.90914" transform="rotate(45 110.374 57.6461)" fill="#B31C52" />
        <circle cx="87.1366" cy="52.2275" r="3.1819" transform="rotate(-152.125 87.1366 52.2275)" fill="#FFF6E8" />
        <circle cx="88.2616" cy="52.8226" r="1.90914" transform="rotate(-152.125 88.2616 52.8226)" fill="#F89840" />
        <circle cx="129.092" cy="62.3644" r="3.1819" transform="rotate(45 129.092 62.3644)" fill="#FFF6E8" />
        <circle cx="128.192" cy="61.4644" r="1.90914" transform="rotate(45 128.192 61.4644)" fill="#B21C52" />
        <circle cx="103.682" cy="47.1365" r="3.1819" transform="rotate(-142.415 103.682 47.1365)" fill="#FFF6E8" />
        <circle cx="104.691" cy="47.9128" r="1.90914" transform="rotate(-142.415 104.691 47.9128)" fill="#F89840" />
        <path
          d="M94 54.1052C94.465 54.573 95.8133 55.3683 97.4872 54.8069C99.161 54.2455 99.1145 52.7017 98.8821 52"
          stroke="#F89840"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M120 66.1052C119.628 66.573 118.549 67.3683 117.21 66.8069C115.871 66.2455 115.908 64.7017 116.094 64"
          stroke="#B21C52"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
