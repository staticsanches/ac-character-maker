import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import type { OnClickProps } from '@/types/react'

export const TeeFroggy = ({ onClick }: OnClickProps) => {
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
        <rect x="20" width="173" height="125" fill="#FFE27D" />
        <g
          filter={defsBuilder.addDef('drop-shadow', (id) => (
            <filter id={id} colorInterpolationFilters="sRGB">
              <feOffset in="SourceAlpha" dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.313726 0 0 0 0 0.113725 0 0 0 0.3 0" />
              <feBlend mode="normal" in="SourceGraphic" />
            </filter>
          ))}
        >
          <path
            d="M107.5 88C120.753 88 132 78.6332 132 66.5C132 54.3668 120.753 45 107.5 45C94.2473 45 83 54.3668 83 66.5C83 78.6332 94.2473 88 107.5 88Z"
            fill="#8C501D"
            stroke="#8C501D"
            strokeWidth="4"
          />
          <path
            d="M96.5 62C103.31 62 109 56.7183 109 50C109 43.2817 103.31 38 96.5 38C89.6895 38 84 43.2817 84 50C84 56.7183 89.6895 62 96.5 62Z"
            fill="#8C501D"
            stroke="#8C501D"
            strokeWidth="4"
          />
          <path
            d="M119.5 62C126.31 62 132 56.7183 132 50C132 43.2817 126.31 38 119.5 38C112.69 38 107 43.2817 107 50C107 56.7183 112.69 62 119.5 62Z"
            fill="#8C501D"
            stroke="#8C501D"
            strokeWidth="4"
          />
        </g>
        <g
          filter={defsBuilder.addDef('drop-shadow', (id) => (
            <filter id={id} colorInterpolationFilters="sRGB">
              <feOffset in="SourceAlpha" dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.266667 0 0 0 0 0.117333 0 0 0 0 0.0333333 0 0 0 0.25 0" />
              <feBlend mode="normal" in="SourceGraphic" />
            </filter>
          ))}
        >
          <ellipse cx="107.5" cy="66.5" rx="22.5" ry="19.5" fill="#88AC22" />
          <ellipse cx="96.5" cy="50" rx="10.5" ry="10" fill="#88AC22" />
          <ellipse cx="119.5" cy="50" rx="10.5" ry="10" fill="#88AC22" />
        </g>
        <path
          d="M98.0812 62.1863C97.6318 61.8653 97.0073 61.9693 96.6863 62.4188C96.3653 62.8682 96.4693 63.4927 96.9188 63.8137L98.0812 62.1863ZM95.3162 68.0513C94.7923 67.8767 94.226 68.1598 94.0513 68.6838C93.8767 69.2077 94.1598 69.774 94.6838 69.9487L95.3162 68.0513ZM96.9188 63.8137C97.2683 64.0634 97.6072 64.5613 97.7671 65.2039C97.9242 65.8354 97.8811 66.5017 97.6056 67.0528L99.3944 67.9472C99.9189 66.8983 99.9592 65.7312 99.7079 64.7211C99.4594 63.722 98.8984 62.7699 98.0812 62.1863L96.9188 63.8137ZM97.6056 67.0528C97.0818 68.1003 95.9677 68.2685 95.3162 68.0513L94.6838 69.9487C96.0323 70.3982 98.3182 70.0997 99.3944 67.9472L97.6056 67.0528Z"
          fill="#8C501D"
        />
        <path
          d="M99 68.4062C100.735 70.2059 105.384 73.5578 110.098 72.5686C114.812 71.5793 117.564 67.7774 118.351 66"
          stroke="#8C501D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="99" cy="47.5" rx="5" ry="4.5" fill="white" />
        <ellipse cx="117" cy="47.5" rx="5" ry="4.5" fill="white" />
        <ellipse cx="101" cy="46.5" rx="2" ry="2.5" fill="#8C501D" />
        <ellipse cx="115" cy="46.5" rx="2" ry="2.5" fill="#8C501D" />
        <path
          d="M108 24C127.606 24 143.5 16.8366 143.5 8C143.5 7.66415 143.477 7.33072 143.432 7H72.5682C72.523 7.33072 72.5 7.66415 72.5 8C72.5 16.8366 88.3939 24 108 24Z"
          fill="#88AC22"
        />
        <path
          d="M47 56.5C41.4 50.9 36.6667 41.5 35 37.5L28 48.5L49.5 73.5L59 68C57.3333 66.5 52.6 62.1 47 56.5Z"
          fill="#88AC22"
        />
        <path
          d="M168.5 56.5C174.1 50.9 178.833 41.5 180.5 37.5L187.5 48.5L166 73.5L156.5 68C158.167 66.5 162.9 62.1 168.5 56.5Z"
          fill="#88AC22"
        />
        <path
          d="M110 108C96 108 66.5 105 53.5 103.5V112C66.8333 113.833 96.8 117.5 110 117.5C123.2 117.5 149.167 113.833 160.5 112V103.5C149.5 105 124 108 110 108Z"
          fill="#FFD465"
        />
      </g>

      {defsBuilder.build()}
    </>
  )
}
