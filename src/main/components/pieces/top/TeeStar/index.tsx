import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'

import type { OnClickProps } from '@/types/react'

export const TeeStar = ({ onClick }: OnClickProps) => {
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
        <rect x="20" width="173" height="125" fill="#A026FF" />
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="79"
              y="34"
              width="57"
              height="53"
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
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.429679 0 0 0 0 0.0397222 0 0 0 0 0.733333 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M95.9771 49.5663C95.5645 44.6913 102.057 36.8795 106.734 35C111.411 36.8795 117.435 44.6913 117.023 49.5663C122.112 48.4504 130.586 50.0362 132.924 52.7674C133.86 58.0242 125.909 66.0122 121.7 67.4218C124.038 71.1809 125.441 79.1689 122.635 83.8677C116.555 84.8074 107.614 80.5785 106.734 76.3496C105.854 80.5785 96.4448 84.8074 90.3649 83.8677C87.5588 79.1689 88.9619 71.1809 91.3002 67.4218C87.0911 66.0122 79.1405 58.0242 80.0758 52.7674C82.4142 50.0362 90.8877 48.4504 95.9771 49.5663Z"
            fill="#FFC453"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="81.7419"
              y="41.5397"
              width="14.2229"
              height="13.8721"
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
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.429679 0 0 0 0 0.0397222 0 0 0 0 0.733333 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M85.119 46.066C84.5748 45.2819 84.9122 43.3293 85.52 42.5563C86.4937 42.4189 88.2726 43.1533 88.6773 44.0177C89.4292 43.3337 91.0162 42.7772 91.6773 43.0113C92.3471 43.8091 91.7803 45.9335 91.2058 46.5814C91.967 46.9894 92.9817 48.2034 92.9646 49.271C92.0281 50.0216 90.1048 50.1768 89.5444 49.5475C89.8071 50.3481 88.6279 51.9789 87.5085 52.4117C86.5768 51.8904 86.0365 50.4032 86.066 49.5401C85.2172 49.7114 83.0955 49.1347 82.742 48.1548C82.8716 47.4655 84.1499 46.3727 85.119 46.066Z"
            fill="#FFC453"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="119.562"
              y="67.6578"
              width="17.7991"
              height="17.1729"
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
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.429679 0 0 0 0 0.0397222 0 0 0 0 0.733333 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M126.506 70.4916C127.079 69.3411 129.603 68.4744 130.91 68.6913C131.703 69.7518 131.988 72.3279 131.23 73.3657C132.524 73.8102 134.21 75.3233 134.361 76.2557C133.853 77.5632 130.978 78.2703 129.841 78.0119C129.852 79.1749 129.076 81.1593 127.805 81.8307C126.312 81.2113 124.883 79.0412 125.263 77.9718C124.488 78.8007 121.798 78.465 120.562 77.4238C120.574 75.9859 121.98 74.3847 123.018 73.8604C122.266 72.9692 121.572 70.0906 122.5 69.0385C123.398 68.7448 125.516 69.5461 126.506 70.4916Z"
            fill="#FFC453"
          />
        </g>
        <g
          filter={defsBuilder.addDef('filter', (id) => (
            <filter
              id={id}
              x="91.8459"
              y="36.7709"
              width="8.96338"
              height="8.99097"
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
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.429679 0 0 0 0 0.0397222 0 0 0 0 0.733333 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          ))}
        >
          <path
            d="M94.4747 38.8117C94.577 38.3477 95.4045 37.8103 95.8924 37.7708C96.272 38.08 96.6056 38.9783 96.4267 39.4186C96.931 39.4618 97.6712 39.8532 97.8093 40.174C97.7445 40.6885 96.7767 41.2001 96.3457 41.2095C96.4542 41.6256 96.354 42.4069 95.9582 42.7619C95.3672 42.6737 94.6599 42.0237 94.7001 41.606C94.4966 41.9729 93.502 42.0938 92.9651 41.8314C92.8404 41.3146 93.2008 40.6142 93.5261 40.333C93.1763 40.0809 92.6692 39.1107 92.9076 38.6501C93.2032 38.4642 94.0349 38.5615 94.4747 38.8117Z"
            fill="#FFC453"
          />
        </g>
        <path d="M31 41C34 53.5 47.5 65 54.5 68" stroke="#FFC453" strokeWidth="6" />
        <path d="M183.5 41C180.5 53.5 167 65 160 68" stroke="#FFC453" strokeWidth="6" />
      </g>

      {defsBuilder.build()}
    </>
  )
}
