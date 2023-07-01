import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const CropTopSecretCat = ({ onClick }: OnClickProps) => {
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
        <rect width="213" height="163" fill="#D2FFC2" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="73"
              y="26"
              width="68"
              height="74.5"
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
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0705882 0 0 0 0 0.231373 0 0 0 0 0.0784314 0 0 0 0.4 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M137.023 96.5L76.7243 97.5C75.1028 85.0223 75.6226 64.4915 84.425 51.5L91.5 29L99 40.6266C101.547 39.8955 104.357 39.5 107.454 39.5C110.578 39.5 113.402 39.8957 115.953 40.6266L124 29L130.379 51.5C138.786 64.2777 138.884 84.3035 137.023 96.5Z"
            fill="#123C14"
          />
        </g>
        <circle cx="98.4286" cy="50.4286" r="6.42857" fill="white" />
        <circle cx="97.1429" cy="50" r="4.28571" fill="#154617" />
        <circle cx="115.571" cy="50.4286" r="6.42857" fill="white" />
        <circle cx="114.286" cy="50" r="4.28571" fill="#154617" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="114.766"
              y="5.43304"
              width="35.6335"
              height="40.6387"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M148.303 21.0344C147.572 16.7699 141.205 11.2783 139.692 7.43302C136.38 8.83017 126.372 7.34606 122.716 9.66082C118.147 12.5543 117.842 20.6262 122.259 19.3066C126.676 17.9869 129.722 16.0579 130.94 18.241C132.159 20.4241 121.396 20.0172 118.35 21.9462C115.304 23.8752 117.029 32.3027 120.329 31.0337C123.629 29.7647 125.051 26.5666 127.132 28.0389C129.213 29.5113 120.786 31.2369 120.024 34.1813C119.466 36.6689 119.262 42.0502 122.917 43.675C126.572 45.2998 130.431 41.5433 131.903 39.4619C133.579 36.9236 129.213 29.5114 131.701 30.0699C134.188 30.6285 132.767 33.8267 134.036 37.1266C135.305 40.4266 142.717 36.0611 142.108 32.5073C141.499 28.9536 133.986 21.2365 136.423 20.6782C138.86 20.1199 139.469 23.6737 141.448 27.8368C143.428 31.9998 149.216 26.365 148.303 21.0344Z"
            fill="#48AD4C"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="122.997"
              y="11.5173"
              width="39.5027"
              height="35.9301"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M159.462 37.7799C161.38 33.9014 159.462 25.7155 160.5 21.7155C157 20.8971 149.78 13.8095 145.462 13.531C140.065 13.183 135.07 19.531 139.418 21.0621C143.766 22.5932 147.364 22.8253 147.065 25.3074C146.766 27.7894 138.302 21.1292 134.704 20.8971C131.106 20.6651 127.544 28.4952 130.959 29.4102C134.374 30.3253 137.405 28.5754 138.222 30.9904C139.039 33.4054 131.208 29.8433 128.86 31.7763C126.945 33.4593 123.615 37.6914 125.615 41.1555C127.615 44.6196 132.945 43.8516 135.36 43.0347C138.209 41.9677 139.039 33.4056 140.722 35.3205C142.405 37.2355 139.374 38.9856 138.459 42.4006C137.544 45.8157 146.106 46.6458 147.704 43.4138C149.302 40.1817 147.766 29.5215 150.065 30.5035C152.364 31.4856 150.766 34.7177 149.918 39.2488C149.07 43.7799 157.065 42.628 159.462 37.7799Z"
            fill="#1A701D"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="136.382"
              y="47.3684"
              width="37.3022"
              height="37.3423"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M151.77 82.5906C156.012 83.4433 163.426 79.4794 167.559 79.4507C167.447 75.858 172.433 67.0542 171.588 62.8107C170.533 57.5064 163.111 54.3172 162.753 58.9131C162.395 63.5089 163.099 67.0452 160.624 67.3964C158.148 67.7475 162.401 57.8522 161.697 54.3159C160.993 50.7797 152.509 49.3573 152.506 52.8928C152.503 56.4283 154.975 58.9056 152.852 60.3177C150.73 61.7298 152.152 53.2459 149.679 51.4758C147.559 50.0595 142.611 47.9334 139.78 50.7591C136.949 53.5848 139.065 58.5366 140.478 60.6592C142.243 63.1358 150.729 61.7299 149.313 63.8498C147.897 65.9697 145.425 63.4926 141.889 63.4891C138.354 63.4857 139.76 71.9723 143.294 72.6829C146.829 73.3934 156.733 69.1604 156.377 71.6349C156.021 74.1094 152.486 73.3989 147.889 73.748C143.293 74.0971 146.468 81.5248 151.77 82.5906Z"
            fill="#1A701D"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="141.465"
              y="17.6826"
              width="34.376"
              height="43.767"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M172.064 27.0133C169.266 23.7133 160.991 22.2233 157.732 19.6825C155.591 22.5699 146.22 26.3827 144.25 30.2349C141.788 35.0502 145.631 42.1552 148.762 38.7724C151.894 35.3897 153.535 32.1794 155.695 33.4393C157.854 34.6993 148.381 39.8233 146.739 43.0335C145.097 46.2436 150.87 52.6219 153.065 49.8508C155.261 47.0798 154.859 43.6031 157.399 43.8122C159.94 44.0212 153.562 49.7934 154.404 52.716C155.188 55.1418 157.75 59.8785 161.724 59.4183C165.697 58.958 167.109 53.7611 167.318 51.2202C167.469 48.1826 159.94 44.0212 162.366 43.2369C164.792 42.4526 165.195 45.9292 167.966 48.125C170.737 50.3207 174.898 42.7919 172.566 40.042C170.234 37.292 159.841 34.4691 161.655 32.749C163.469 31.0288 165.801 33.7788 169.623 36.3562C173.445 38.9336 175.562 31.1382 172.064 27.0133Z"
            fill="#75D379"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="52.4243"
              y="52.0719"
              width="38.3208"
              height="36.1196"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M54.7544 64.2664C53.432 68.386 56.5404 76.1979 56.1061 80.3074C59.6887 80.5986 67.8787 86.5393 72.19 86.1755C77.5792 85.7207 81.5796 78.7031 77.0527 77.8326C72.5259 76.962 68.933 77.2652 68.8613 74.7662C68.7896 72.2672 78.1465 77.6011 81.7392 77.2979C85.332 76.9947 87.6958 68.7236 84.1829 68.3241C80.67 67.9247 77.9314 70.104 76.7659 67.8366C75.6005 65.5691 83.8716 67.9328 85.9077 65.6735C87.5525 63.7255 90.2194 59.0471 87.7286 55.9173C85.2378 52.7874 80.0801 54.336 77.8126 55.5015C75.1539 56.9784 75.6004 65.569 73.6524 63.9243C71.7045 62.2795 74.443 60.1001 74.8424 56.5872C75.2418 53.0743 66.6511 53.5209 65.5491 56.9539C64.4471 60.3869 67.5442 70.7023 65.1252 70.0714C62.7061 69.4406 63.808 66.0074 63.976 61.4007C64.1439 56.794 56.4074 59.1169 54.7544 64.2664Z"
            fill="#1A701D"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="77.7061"
              y="62.0048"
              width="36.8225"
              height="37.7891"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M91.7261 97.5995C95.9218 98.6559 103.519 95.0546 107.648 95.2254C107.71 91.6315 113.115 83.0786 112.476 78.7993C111.678 73.4502 104.419 69.9065 103.84 74.4797C103.26 79.0529 103.792 82.6191 101.303 82.8503C98.8137 83.0816 103.539 73.403 103.007 69.837C102.474 66.2709 94.069 64.4406 93.8949 67.9718C93.7208 71.503 96.0707 74.0968 93.8824 75.4047C91.694 76.7127 93.5243 68.3074 91.1395 66.4199C89.0904 64.903 84.2511 62.5405 81.2868 65.2262C78.3226 67.9119 80.1976 72.9601 81.5056 75.1485C83.1493 77.7074 91.6939 76.7128 90.177 78.7619C88.6601 80.8109 86.3101 78.2173 82.7789 78.0432C79.2476 77.8691 80.2423 86.4138 83.7387 87.2941C87.2351 88.1745 97.3316 84.4245 96.8566 86.8789C96.3816 89.3334 92.885 88.453 88.277 88.5798C83.669 88.7066 86.4815 96.2789 91.7261 97.5995Z"
            fill="#48AD4C"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="37.8552"
              y="1.64795"
              width="42.0444"
              height="35.152"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M52.4621 3.90909C48.2997 5.08988 43.5173 12.0048 39.8552 13.9195C41.5971 17.0636 41.1873 27.1729 43.8782 30.561C47.2418 34.7961 55.3003 34.2398 53.5178 29.9886C51.7352 25.7375 49.4928 22.914 51.5337 21.4701C53.5746 20.0263 54.3163 30.771 56.5587 33.5944C58.8011 36.4179 66.9969 33.8046 65.3837 30.6585C63.7705 27.5125 60.4392 26.4395 61.6815 24.2132C62.9238 21.9869 65.5371 30.1827 68.5459 30.6264C71.0788 30.9169 76.4512 30.5461 77.6775 26.7387C78.9038 22.9313 74.7577 19.4947 72.5313 18.2524C69.8291 16.8568 62.9239 21.9868 63.2143 19.454C63.5048 16.9211 66.8362 17.994 69.9822 16.3808C73.1283 14.7676 67.9982 7.86239 64.5295 8.84638C61.0608 9.83038 54.1877 18.1226 53.3731 15.759C52.5585 13.3955 56.0272 12.4114 59.9558 9.99967C63.8843 7.58791 57.6651 2.4331 52.4621 3.90909Z"
            fill="#1A701D"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="64.2874"
              y="6.47089"
              width="34.396"
              height="43.8135"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M94.9806 16.0095C92.2307 12.6692 83.9787 11.0588 80.7569 8.47089C78.5744 11.3268 69.1482 15.0027 67.1224 18.8258C64.5902 23.6048 68.3294 30.765 71.5099 27.4282C74.6904 24.0913 76.3786 20.9053 78.5193 22.1966C80.6601 23.4878 71.1131 28.4733 69.425 31.6593C67.7369 34.8452 73.4156 41.3068 75.6514 38.568C77.8873 35.8293 77.5354 32.3471 80.0729 32.5931C82.6104 32.8391 76.1489 38.5179 76.9481 41.4523C77.697 43.8894 80.1898 48.6629 84.1695 48.2605C88.1492 47.8582 89.6362 42.6824 89.8822 40.1448C90.0779 37.1097 82.6106 32.8391 85.0475 32.0902C87.4845 31.3413 87.8366 34.8234 90.5754 37.0593C93.3141 39.2952 97.5847 31.8278 95.2931 29.0442C93.0015 26.2605 82.6499 23.2866 84.4889 21.5931C86.3279 19.8995 88.6196 22.6832 92.4036 25.3159C96.1876 27.9487 98.418 20.185 94.9806 16.0095Z"
            fill="#75D379"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="38.8772"
              y="34.644"
              width="34.3835"
              height="43.7847"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M42.6273 69.0225C45.4081 72.3372 53.6746 73.8709 56.9203 76.4288C59.0762 73.5527 68.4679 69.7895 70.4581 65.9477C72.9457 61.1454 69.1403 54.0202 65.9909 57.3865C62.8415 60.7527 61.183 63.9542 59.0304 62.6829C56.8777 61.4116 66.378 56.3377 68.0364 53.1362C69.6949 49.9347 63.9564 43.5261 61.7461 46.2855C59.5357 49.0449 59.92 52.5237 57.3803 52.3012C54.8406 52.0788 61.2491 46.3403 60.4227 43.4134C59.6511 40.9834 57.1142 36.2333 53.1384 36.6725C49.1625 37.1118 47.7237 42.3012 47.5013 44.841C47.3338 47.8777 54.8404 52.0788 52.4105 52.8503C49.9806 53.6218 49.5962 50.1431 46.8368 47.9328C44.0774 45.7224 39.8763 53.2292 42.1937 55.9914C44.511 58.7536 54.8898 61.6313 53.0666 63.3418C51.2435 65.0524 48.926 62.2901 45.1177 59.6926C41.3095 57.0951 39.1512 64.8792 42.6273 69.0225Z"
            fill="#75D379"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="15.4944"
              y="26.8347"
              width="38.6433"
              height="36.0453"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M17.9449 38.2381C16.4466 42.297 19.2164 50.2353 18.6059 54.3224C22.1727 54.7673 30.0997 61.0544 34.4227 60.8763C39.8265 60.6536 44.1248 53.8144 39.6395 52.7501C35.1543 51.6858 31.5517 51.8342 31.5875 49.3345C31.6233 46.8347 40.7422 52.5658 44.3447 52.4173C47.9472 52.2689 50.6642 44.1069 47.1718 43.5569C43.6793 43.0069 40.8495 45.0665 39.7826 42.751C38.7157 40.4356 46.8776 43.1526 49.0089 40.9828C50.7359 39.1074 53.6014 34.5479 51.2474 31.3139C48.8935 28.0799 43.674 29.4053 41.3585 30.4723C38.6387 31.8335 38.7156 40.4354 36.8402 38.7085C34.9647 36.9815 37.7943 34.9218 38.3444 31.4293C38.8944 27.9368 30.2924 28.0138 29.0439 31.3963C27.7954 34.7787 30.4463 45.2177 28.0565 44.4835C25.6668 43.7492 26.9153 40.3666 27.2811 35.7714C27.6469 31.1762 19.8176 33.1643 17.9449 38.2381Z"
            fill="#48AD4C"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="120.468"
              y="60.2137"
              width="35.0544"
              height="42.2415"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M122.765 88.0274C124.019 92.1683 131.018 96.8275 132.997 100.455C136.11 98.6579 146.225 98.8886 149.564 96.1382C153.739 92.7001 153.04 84.6527 148.822 86.5102C144.603 88.3677 141.819 90.6598 140.339 88.6448C138.86 86.6297 149.59 85.6979 152.373 83.4059C155.156 81.1138 152.398 72.9656 149.281 74.6343C146.164 76.3029 145.15 79.6527 142.902 78.45C140.655 77.2473 148.803 74.4893 149.193 71.4731C149.439 68.9355 148.973 63.5705 145.144 62.4118C141.316 61.2531 137.953 65.4594 136.751 67.7074C135.403 70.4339 140.654 77.2472 138.117 77.0017C135.579 76.7561 136.593 73.4062 134.924 70.2892C133.256 67.1722 126.442 72.4238 127.488 75.8745C128.533 79.3252 136.945 86.0504 134.597 86.9068C132.248 87.7631 131.203 84.3123 128.722 80.4271C126.241 76.5419 121.197 82.8513 122.765 88.0274Z"
            fill="#48AD4C"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="80.3127"
              y="1.80579"
              width="37.8203"
              height="36.7515"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M101.122 3.86301C96.8379 3.2578 89.6657 7.64496 85.542 7.9133C85.862 11.4934 81.3951 20.5716 82.4842 24.7589C83.8455 29.9931 91.4395 32.7465 91.5304 28.1377C91.6213 23.5288 90.7137 20.0392 93.1644 19.5451C95.6151 19.051 91.9439 29.1763 92.8514 32.6658C93.759 36.1553 102.311 37.0833 102.11 33.5535C101.908 30.0237 99.2961 27.694 101.333 26.1612C103.37 24.6284 102.442 33.1804 105.014 34.8042C107.213 36.0951 112.275 37.9308 114.938 34.9456C117.6 31.9605 115.2 27.1398 113.667 25.1026C111.761 22.7325 103.371 24.6283 104.661 22.4298C105.952 20.2314 108.564 22.5609 112.094 22.3593C115.624 22.1577 113.728 13.7669 110.158 13.2625C106.588 12.7582 96.9464 17.5585 97.1582 15.0674C97.3701 12.5764 100.94 13.0808 105.509 12.4657C110.077 11.8506 106.477 4.61952 101.122 3.86301Z"
            fill="#1A701D"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="154.825"
              y="28.5944"
              width="43.6355"
              height="34.3784"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M186.069 60.1825C189.918 58.206 193.246 50.4854 196.46 47.8877C194.134 45.1477 192.547 35.1553 189.242 32.3627C185.111 28.8721 177.32 31.0027 179.904 34.8202C182.488 38.6376 185.242 40.9648 183.525 42.7819C181.808 44.5991 178.967 34.2102 176.213 31.883C173.459 29.5559 165.937 33.7304 168.138 36.4976C170.338 39.2648 173.816 39.6616 173.036 42.0887C172.255 44.5159 168.081 36.9944 165.044 37.1511C162.503 37.3646 157.309 38.785 156.855 42.7593C156.402 46.7335 161.143 49.2873 163.57 50.0674C166.494 50.9042 172.255 44.516 172.469 47.0565C172.682 49.597 169.205 49.2004 166.438 51.401C163.671 53.6015 170.059 59.3626 173.266 57.7155C176.473 56.0684 181.581 46.5862 182.845 48.7433C184.108 50.9004 180.901 52.5476 177.524 55.685C174.146 58.8225 181.258 62.6532 186.069 60.1825Z"
            fill="#48AD4C"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="99.6069"
              y="51.6259"
              width="35.5828"
              height="41.3154"
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
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.439216 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M107.339 88.0062C110.963 90.3702 119.318 89.4365 123.167 90.9413C124.394 87.563 132.288 81.2339 133.076 76.9797C134.062 71.6619 128.351 65.9493 126.315 70.0852C124.279 74.2211 123.622 77.7664 121.193 77.1752C118.764 76.584 126.381 68.9692 127.038 65.424C127.695 61.8788 120.342 57.4135 119.029 60.6959C117.715 63.9784 119.093 67.1956 116.599 67.7204C114.104 68.2453 118.569 60.8928 116.928 58.3321C115.484 56.231 111.677 52.4226 108 53.9978C104.323 55.573 104.454 60.9566 104.979 63.4515C105.7 66.406 114.104 68.2454 112.003 69.6894C109.902 71.1335 108.523 67.9165 105.241 66.603C101.958 65.2895 100.119 73.6929 103.139 75.6629C106.159 77.6328 116.926 77.3716 115.678 79.538C114.43 81.7044 111.41 79.7344 107.012 78.3551C102.613 76.9758 102.809 85.0512 107.339 88.0062Z"
            fill="#75D379"
          />
        </g>
      </g>

      {defsBuilder.build()}
    </>
  )
}
