import React from 'react'

import { AvatarPiece, AvatarPieceBaseProps } from '@/components/AvatarPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { useSvgDefsBuilder } from '@/hooks/useSvgDefsBuilder'
import { selectors } from '@/redux/selectors'

import type { OnClickProps } from '@/types/react'

export type HairVariant = (typeof hairVariants)[number]
export const hairVariants = [
  'bob',
  'brock',
  'chill',
  'chipper',
  'dino',
  'diva',
  'eggshell',
  'fairy',
  'kindergarten',
  'leafy',
  'no-mess-bun',
  'princess',
  'shaggy',
  'smooth',
  'some-mess-bun',
  'straight-up',
  'twin-braids',
  'undercut',
  'up-top',
] as const

export const HairPiece = React.forwardRef<SVGSVGElement, AvatarPieceBaseProps & OnClickProps>(
  ({ onClick, ...avatarPieceProps }, ref) => (
    <AvatarPiece
      {...avatarPieceProps}
      ref={ref}
      pieceType="hair"
      highlightOnHover={!!onClick}
      contentComponent={Hair}
      onClick={onClick}
    />
  )
)

const Hair = ({ onClick }: OnClickProps): JSX.Element => {
  const variant = useRootSelector(selectors.pieces.hair.variant.select)
  const color = useRootSelector(selectors.pieces.hair.color.select)

  const defsBuilder = useSvgDefsBuilder()

  return (
    <>
      {hairElement(variant, defsBuilder.addFillColor(color), onClick)}
      {defsBuilder.build()}
    </>
  )
}

const hairElement = (
  variant: HairVariant,
  fillColor: { fill: string; fillOpacity?: number },
  handleClick: Opt<React.MouseEventHandler>
): JSX.Element => {
  switch (variant) {
    case 'bob':
      return (
        <path
          d="M41.1569 112.824C49.5 100.052 63 62.178 76.5 44.5519C83.8089 35.0091 95.7871 18.5519 148 18.5519C199.246 18.5519 209.882 34.223 217.5 44.5519C230.5 62.178 246 100.052 254.843 112.824C264.756 127.141 287.718 156.45 213.266 191.552C218.584 167.817 225.353 114.73 209.882 92.2649C200.374 90.7606 180.585 87.7519 177.491 87.7519C175.718 80.7316 172.173 65.7884 172.173 62.178C170.722 70.2012 167.532 86.5484 166.371 87.7519C164.921 89.2562 150.901 88.7548 148 88.7548C145.099 88.7548 131.079 89.2562 129.629 87.7519C128.468 86.5484 125.278 70.2012 123.827 62.178C123.827 65.7884 120.282 80.7316 118.509 87.7519C115.415 87.7519 95.6259 90.7606 86.118 92.2649C70.6475 114.73 77.4159 167.817 82.7338 191.552C8.28206 156.45 31.6337 127.403 41.1569 112.824Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'brock':
      return (
        <>
          <path
            opacity="0.75"
            d="M63.5 119.552C63.5 48.7519 115 37.5519 146 37.5519H147C178 37.5519 229.5 48.7519 229.5 119.552C219 119.552 219.5 119.552 214.5 96.5519C204 96.5519 204 96.5519 198.5 78.0519C186.667 76.7185 159.8 74.0519 147 74.0519H146C133.2 74.0519 106.333 76.7185 94.5 78.0519C89 96.5519 89 96.5519 78.5 96.5519C73.5 119.552 74 119.552 63.5 119.552Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M49 63.0454C50.9949 83.1805 58.3095 99.106 64.9591 104.552H76.4297L78.4246 97.0454C83.9105 97.0454 88.8977 100.136 94.3836 80.7077C109.678 79.5302 141.164 77.1753 144.754 77.1753C161.545 77.764 195.724 79.2947 198.118 80.7077C202.606 93.0714 203.604 97.9285 214.077 97.0454L216.072 104.552H228.041C234.691 99.106 242.005 83.1805 244 63.0454C239.678 61.2792 229.138 57.7467 221.558 57.7467C220.726 46.8549 217.169 23.5701 209.588 17.5649C202.44 18.0064 186.547 20.0376 180.164 24.6298C180.164 22.422 148.744 2.55188 144.754 2.55188C141.563 2.55188 122.146 17.2705 112.836 24.6298C106.453 20.0376 90.5601 18.0064 83.4118 17.5649C75.8312 23.5701 72.2737 46.8549 71.4425 57.7467C63.8619 57.7467 53.3223 61.2792 49 63.0454Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'chill':
      return (
        <path
          d="M167 11.5C114.2 11.5 97.3333 38.1667 95.5 51.5C90 49 76.9 45.5 68.5 51.5C58 59 43.5 74 37 76C37 82.5 39.5 90 43.5 91.5C47.5 93 22.5 100 21.5 107.5C22.6667 111.667 25.7 120.2 28.5 121C32 122 34 119 37 117C35.6667 118.833 32.8 123.3 32 126.5C31 130.5 38.5 138 43.5 137C45.5 133.8 51 128.667 53.5 126.5C56.6667 126.5 64.1 125.4 68.5 121C62.9 108.2 74.8333 84 81.5 73.5C79.8333 76.8333 76.6 84.2 77 87C77.4 89.8 85.5 91.1667 89.5 91.5C93.1 91.5 96 71.1667 97 61C112.667 72.5 145 94.7 149 91.5C154 87.5 157 82.5 157.5 78C158 73.5 145.5 72.5 142 68.5C152.833 71 175.9 74.5 181.5 68.5C201 78 216.703 103.758 219 109.5C225 124.5 230.5 134.167 235.5 143.5C239 148.5 254 135 257 133C257.4 130.6 247.833 117.333 243 111C246.5 112.5 246.5 114.5 249 115C251.5 115.5 260.5 109.5 263.5 107.5C264.7 98.7 252.667 84.1667 246.5 78C249 78 252 72 254 64.5C247 56 222 46.5 224.5 46.5C227 46.5 232.5 38.5 233 34C233.5 29.5 203 11.5 167 11.5Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'chipper':
      return (
        <path
          d="M78.5 103C129.7 99 175.167 75 191.5 63.5C195.167 75.5 207.36 98.8665 217.5 104.5C231 112 229.5 114.5 229.5 119C237.333 117.667 251.1 107.4 243.5 77C235.9 46.6 210.667 47.3333 199 51.5C199.5 48 194 18 148.5 18C78.5 18 48.5 67 48.5 91C48.5 110.2 58.5 117.667 63.5 119C66.7 108.2 74.8333 103.833 78.5 103Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'dino':
      return (
        <>
          <path
            opacity="0.75"
            d="M63.5 120C63.5 49.2 115 38 146 38H147C178 38 229.5 49.2 229.5 120C219 120 219.5 120 214.5 97C204 97 204 97 198.5 78.5C186.667 77.1667 159.8 74.5 147 74.5H146C133.2 74.5 106.333 77.1667 94.5 78.5C89 97 89 97 78.5 97C73.5 120 74 120 63.5 120Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M92.7877 16.1776C78.7502 29.8358 70.8681 61.9907 70.3496 81.5227C87.8308 79.549 107.849 75.1062 147.35 75.1062C184.105 75.1062 200.753 79.267 222.746 81.2407C222.227 61.7087 214.53 30.7842 200.493 17.1261C197.015 17.6003 190.867 20.0663 186.694 26.1366C185.825 21.1997 181.725 12.0042 171.861 2.8988C166.802 3.68922 152.883 7.64125 146.054 17.1261C139.225 7.64125 126.308 3.68922 121.25 2.8988C111.386 12.0042 107.884 19.7883 107.884 26.1366C103.711 20.0663 96.2655 16.6518 92.7877 16.1776Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'diva':
      return (
        <path
          fill-rule="evenodd"
          d="M62.2489 56.5C87.4489 31.3 129.082 25 146.749 25H147.749C165.416 25 207.049 31.3 232.249 56.5C260.945 85.1963 250.221 95.6346 245.438 100.29C244.971 100.744 244.56 101.144 244.249 101.5C241.728 104.381 246.989 107.262 252.931 110.517C255.24 111.781 257.651 113.101 259.749 114.5C267.249 119.5 274.749 132.5 263.249 141C251.749 149.5 253.749 153.5 256.749 155.5C257.53 156.021 259.09 156.372 261.111 156.827C266.857 158.12 276.331 160.253 282.249 169.5C290.249 182 276.749 212 244.249 219C216.301 225.02 198.706 224.384 190.51 224.087C189.175 224.039 188.089 224 187.249 224H147.749H146.749H107.249C106.409 224 105.323 224.039 103.988 224.087C95.7921 224.384 78.197 225.02 50.2489 219C17.7489 212 4.24892 182 12.2489 169.5C18.1667 160.253 27.6412 158.12 33.3866 156.827C35.4082 156.372 36.9681 156.021 37.7489 155.5C40.7489 153.5 42.7489 149.5 31.2489 141C19.7489 132.5 27.2489 119.5 34.7489 114.5C36.847 113.101 39.2581 111.781 41.5663 110.517C47.5092 107.262 52.7698 104.381 50.2489 101.5C49.9374 101.144 49.5269 100.744 49.0596 100.29C44.277 95.6346 33.5526 85.1963 62.2489 56.5ZM214.626 177.5C210.337 175.088 208.739 168.97 208.5 165.26C213.5 168.76 215.5 168.76 221 161.76C226.5 154.76 232 143.76 221 136.76C210 129.76 210.5 120.26 213 115.26C213.54 114.18 214.126 113.241 214.678 112.356C216.685 109.14 218.244 106.641 215.5 100.76C214.13 97.8231 210.613 96.343 206.99 94.8185C201.362 92.4496 195.479 89.9738 197 81.7599C199 70.9599 188.167 61.9265 182.5 58.7599C160.1 44.7599 149.5 52.9265 147 58.7598V59C144.5 53.1667 133.9 45 111.5 59C105.833 62.1667 95 71.2 97 82C98.5211 90.2139 92.6383 92.6898 87.0097 95.0586C83.3874 96.5831 79.8705 98.0633 78.5 101C75.7555 106.881 77.3151 109.38 79.3216 112.596C79.874 113.481 80.4603 114.421 81 115.5C83.5 120.5 84 130 73 137C62 144 67.5 155 73 162C78.5 169 80.5 169 85.5 165.5C85.2565 169.274 83.6081 175.537 79.152 177.861C89.7213 187.571 102.901 194.645 111.194 198C116.028 200 129.894 204 146.694 204C163.494 204 177.361 200 182.194 198C190.59 194.604 203.993 187.396 214.626 177.5Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'eggshell':
      return (
        <path
          d="M63.5 119C63.5 48.2 115 37 146 37C177 37 229.5 48.2 229.5 119L226 122.5C225.667 118.833 222.2 102.6 217 93C211.8 83.4 208.5 81.3333 207.5 81.5L198.5 87.5L187 75L172.5 83.5L158.5 72.5L146.5 87.5L134.5 72.5L120.5 83.5L106 75L94.5 87.5L85.5 81.5C84.5 81.3333 81.2 83.4 76 93C70.8 102.6 66.8333 118.333 66.5 122L63.5 119Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'fairy':
      return (
        <>
          <path
            fill-rule="evenodd"
            d="M93.7738 51.6367C91.4593 42.3718 81.6445 25.6322 58.5 25.6322C28.5 25.6322 20.5 58.6322 20.5 83.1322C20.5 96.4303 27.5706 102.363 34.9157 108.526C39.9227 112.728 45.0573 117.036 48.1667 123.857C51.9458 121.215 56.7589 119.632 62 119.632C62.6102 119.632 63.2147 119.654 63.8124 119.696L63.823 119.632L63.5 119.632C63.5 83.7765 76.7086 63.2069 93.7738 51.6367ZM74.726 174.089C70.1176 169.096 66.3534 163.539 64.2496 157.534C63.51 157.599 62.7595 157.632 62 157.632C52.202 157.632 43.9 152.1 41.0527 144.456C33.9936 150.346 25.4819 149.129 20.5 148.132C27.0786 163.536 46.8493 189.32 74.726 174.089Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            fill-rule="evenodd"
            d="M197.53 50.5241C200.324 41.0961 210.255 25.6322 232.5 25.6322C262.5 25.6322 270.5 58.6322 270.5 83.1322C270.5 96.4303 263.429 102.363 256.084 108.526C251.321 112.523 246.443 116.616 243.302 122.878C239.79 120.829 235.557 119.632 231 119.632C230.513 119.632 230.029 119.646 229.55 119.673C229.533 119.573 229.517 119.474 229.5 119.374C229.434 82.5009 215.367 61.844 197.53 50.5241ZM217.878 174.925C244.908 188.329 264.048 163.239 270.5 148.132C265.872 149.058 258.197 150.174 251.471 145.606C248.252 152.649 240.3 157.632 231 157.632C230.369 157.632 229.745 157.609 229.128 157.564C226.904 163.895 222.835 169.728 217.878 174.925Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M62.5 119.632C99.7 119.232 136.833 90.1322 150 75.6322C149.5 82.2989 146.4 96.4322 138 99.6322C148.167 100.799 170.3 99.3322 177.5 84.1322C184 93.6322 203.5 114.032 229.5 119.632C229.5 75.6322 208.5 32.1322 146.5 32.1322C88.5 32.1322 62.5 66.6322 62.5 119.632Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'kindergarten':
      return (
        <path
          fill-rule="evenodd"
          d="M187.66 43.8999C185.228 34.8613 175.365 24.5 148 24.5C102.5 24.5 77.5 47.5 68.5 58C65.8441 61.0985 62.0562 66.7224 57.7529 73.1114C47.4737 88.3729 34.2539 108 26.5 108C20.5 108 17 107.5 11.5 105C13.6667 116.5 22.2 140.5 39 144.5C39.5935 144.641 40.173 144.775 40.7387 144.901C40.2568 143.337 40 141.694 40 140C40 129.507 49.8497 121 62 121C62.6102 121 63.2147 121.021 63.8124 121.064C63.8161 121.041 63.8198 121.019 63.8235 120.997C63.8818 120.999 63.9407 121 64 121C80.4 121 88.8334 94.6666 91 81.5C91.8334 85.5 102.6 96.3 137 95.5C158.969 94.9891 172.726 82.5556 180.539 70.2067C184.284 79.0358 196.465 85.5 209.5 85.5C210.333 97.3333 215.5 121 229.5 121C229.515 121 229.529 121 229.543 121C229.546 121.013 229.548 121.027 229.55 121.041C230.029 121.014 230.513 121 231 121C243.15 121 253 129.507 253 140C253 141.544 252.787 143.045 252.384 144.482C269.135 140.429 277.646 116.483 279.81 105C274.31 107.5 270.81 108 264.81 108C257.574 108 248.392 91.9908 240.393 78.0452L240.392 78.045C236.231 70.7898 232.39 64.0932 229.31 60.5C224.721 54.1872 204.035 33.733 187.66 43.8999Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'leafy':
      return (
        <path
          d="M63.5 119C63.5 48.2 115 37 146 37C177 37 229.5 48.2 229.5 119C221.816 119 214.662 105.333 211.329 96.3687C212.062 99.9965 211.172 104.714 210.5 107C188.5 107 173.333 81.3333 168.5 68.5C165.167 78.3333 153.4 98 133 98C132.167 93.5 131 83.5 133 79.5C122 88.6667 95.8 107 79 107C77.8333 111.333 73.1 119 63.5 119Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'no-mess-bun':
      return (
        <path
          fill-rule="evenodd"
          d="M170.605 37.9447C172.768 34.8523 174 31.2907 174 27.5C174 15.6259 161.912 6 147 6C132.088 6 120 15.6259 120 27.5C120 31.1485 121.141 34.5847 123.155 37.5946C75.7144 47.0133 63.5 86.4877 63.5 121L68 120.5C69.0874 119.413 70.8044 105.652 71.7371 97.0025C71.6176 102.01 73.2363 109.264 74.5 108C75.7 106.8 85.6667 103.5 90.5 102C92.0273 99.7091 93.263 87.213 93.5392 82.7699C94.0441 86.5397 97.2497 95.4783 99 100C102.2 98.8 117.333 97.1667 124.5 96.5C125.3 95.3 127.833 79.3333 129 71.5C130.2 73.9 132.5 89.1667 133.5 96.5C134.053 96.5 135.367 96.4321 137.026 96.3463L137.026 96.3462L137.027 96.3462C139.868 96.1993 143.722 96 146.5 96C149.128 96 152.72 96.1784 155.612 96.3221H155.612H155.612C157.562 96.4189 159.195 96.5 160 96.5C161 89.1667 163.3 73.9 164.5 71.5C165.667 79.3333 168.2 95.3 169 96.5C176.167 97.1667 191.3 98.8 194.5 100C196.25 95.4783 199.456 86.5397 199.961 82.7699C200.237 87.213 201.473 99.7091 203 102C207.833 103.5 217.8 106.8 219 108C220.264 109.264 221.882 102.01 221.763 97.0025C222.696 105.652 224.413 119.413 225.5 120.5L230 121C230 86.8997 216.958 47.9551 170.605 37.9447ZM93.5 81.5C93.4501 81.7996 93.4671 82.2321 93.5392 82.7699C93.6246 81.3947 93.6182 80.7909 93.5 81.5ZM71.7371 97.0025C71.8337 96.107 71.9218 95.2662 72 94.5C71.8425 95.2088 71.7594 96.0664 71.7371 97.0025Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'princess':
      return (
        <path
          fill-rule="evenodd"
          d="M41.9934 125.975C37.9882 132.812 34.8012 138.253 33.5 141C29 150.5 19.5 173 26.5 191.5C30.1308 201.096 36.0483 205.445 40.9036 209.014C45.4092 212.326 49 214.965 49 220.5C49 225.248 45.3344 230.594 41.4527 236.254C35.9335 244.302 29.9774 252.987 33.5 261.5C38.3 273.1 55.5 280.667 63.5 283C62.5 280.667 61.1 274.1 63.5 266.5C67 276.333 78 296.2 94 297C91.8267 288.91 88.5512 273.753 88.2798 262.516C91.1842 264.767 94.3677 266.53 97.5 267C96.3333 264 94.7 256.7 97.5 251.5C107.167 255.167 130 262.6 144 263L148 251.5L152 263C166 262.6 188.833 255.167 198.5 251.5C201.3 256.7 199.667 264 198.5 267C201.632 266.53 204.816 264.767 207.72 262.516C207.449 273.753 204.173 288.91 202 297C218 296.2 229 276.333 232.5 266.5C234.9 274.1 233.5 280.667 232.5 283C240.5 280.667 257.7 273.1 262.5 261.5C266.023 252.987 260.066 244.302 254.547 236.254C253.248 234.359 251.972 232.499 250.85 230.685L247 220.5C247 214.965 250.591 212.326 255.096 209.014C255.722 208.554 256.366 208.081 257.02 207.585C261.44 204.236 266.337 199.858 269.5 191.5C276.5 173 267 150.5 262.5 141C258 131.5 245.5 103 232 69.5C220.09 39.9456 210 22 145 22C144.128 22 143.016 21.9591 141.702 21.9108C126.445 21.3495 83.8501 19.7826 70.5 69.5C66.6288 83.917 51.8391 109.166 41.9934 125.975ZM196.565 190.789C197.205 186.105 198.758 181.448 202 176.5C205.111 171.751 208.598 167.967 211.811 164.481C218.407 157.324 223.845 151.423 222.5 141C209.3 126.2 195 85.5 189.5 67C185.9 72.2 188 85.5 189.5 91.5C179.5 91.5 165 79.1667 159 73C159.8 78.6 165 87.6667 167.5 91.5C133.5 92.7 123 68.6667 122 56.5C109.5 85 102 101 83.5 99C83.5 104.757 81.3084 111.748 78.9327 119.325C76.7693 126.225 74.4532 133.613 73.5 141C72.1674 151.328 77.7164 157.216 84.3784 164.285C87.7146 167.825 91.33 171.662 94.5 176.5C98.1568 182.081 99.5911 187.292 99.972 192.589C104.147 194.895 108.027 196.719 111.194 198C116.028 200 129.894 204 146.694 204C163.494 204 177.361 200 182.194 198C186.145 196.402 191.206 193.959 196.565 190.789Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'shaggy':
      return (
        <>
          <path
            d="M226.655 70.4222C226.439 70.252 226.22 70.1101 226 70C226.178 70.1269 226.399 70.2708 226.655 70.4222Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M124 90C128.4 87.6 133.5 77.6667 135.5 73C138 78.6667 144 90 148 90C152 90 157.5 77.4 157.5 73C159.5 77.6667 164.6 87.6 169 90C172 87.5 178.4 81.8 180 79C181.5 83.6667 185 93.3 187 94.5C189.833 93.1667 196 89.8 198 87C199.5 91.3334 203.5 100.7 207.5 103.5C209.5 102.667 214 100.5 216 98.5C216 103.5 216.6 114.1 219 116.5C220.833 115.833 224.8 114.2 226 113C226.833 114.667 228.7 118.2 229.5 119C230.5 120 237 112.5 231.5 94.5C233.167 96.1667 237.3 99.7 240.5 100.5C238.5 96.8334 234.4 89 234 87C233.528 84.6376 230.376 73.3456 226.655 70.4222C226.399 70.2708 226.178 70.1269 226 70C226.22 70.1101 226.439 70.252 226.655 70.4222C228.085 71.2649 230.626 72.3391 233 72C230.5 69.1667 225.3 62.9 224.5 60.5C223.5 57.5 214 42.5 207.5 42.5C209 42.3334 212.4 41.4 214 39C207.5 38.8334 193.6 37.8 190 35C185.5 31.5 165.5 27.5 157.5 28C156.667 28 154.6 27.5 153 25.5C153 26.7 151.333 27.6667 150.5 28C150.5 25.6 147.833 23 146.5 22C144.5 23.2 143 26.1667 142.5 27.5C141.3 27.1 140.333 26 140 25.5C138.4 27.5 136.333 28 135.5 28C127.5 27.5 107.5 31.5 103 35C99.4 37.8 85.5 38.8334 79 39C80.6 41.4 84 42.3334 85.5 42.5C79 42.5 69.5 57.5 68.5 60.5C67.7 62.9 62.5 69.1667 60 72C62.3736 72.3391 64.9149 71.2649 66.3446 70.4222C66.5613 70.252 66.7799 70.1101 67 70C66.8224 70.1269 66.6014 70.2708 66.3446 70.4222C62.6239 73.3456 59.4725 84.6376 59 87C58.6 89 54.5 96.8334 52.5 100.5C55.7 99.7 59.8333 96.1667 61.5 94.5C56 112.5 62.5 120 63.5 119C64.3 118.2 66.1667 114.667 67 113C68.2 114.2 72.1667 115.833 74 116.5C76.4 114.1 77 103.5 77 98.5C79 100.5 83.5 102.667 85.5 103.5C89.5 100.7 93.5 91.3334 95 87C97 89.8 103.167 93.1667 106 94.5C108 93.3 111.5 83.6667 113 79C114.6 81.8 121 87.5 124 90Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'smooth':
      return (
        <path
          opacity="0.75"
          d="M63.5 119C63.5 48.2 115 37 146 37H147C178 37 229.5 48.2 229.5 119C219 119 219.5 119 214.5 96C204 96 204 96 198.5 77.5C186.667 76.1667 159.8 73.5 147 73.5H146C133.2 73.5 106.333 76.1667 94.5 77.5C89 96 89 96 78.5 96C73.5 119 74 119 63.5 119Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'some-mess-bun':
      return (
        <path
          fill-rule="evenodd"
          d="M171.984 35.6663C173.284 33.1484 174 30.3908 174 27.5C174 15.6259 161.912 6 147 6C132.088 6 120 15.6259 120 27.5C120 30.3054 120.675 32.9853 121.902 35.4424C81.3575 45.8759 63.5 82.5451 63.5 121C62.5 121.333 59.5 125.8 55.5 141C52.2262 153.44 59.67 164.38 65.9019 173.539C69.1878 178.368 72.1369 182.702 73 186.5C75 195.3 70.8333 204.833 68.5 208.5C67.1666 209.167 65.7 210.1 70.5 208.5C76.5 206.5 87.5 200.5 86.5 183C85.9596 173.544 82.4997 167.592 79.1964 161.909C76.3862 157.075 73.6895 152.435 73 146C71.8 134.8 79.5 114.333 83.5 105.5C105.5 105.5 118 76.8333 121.5 62.5C121.5 88.5 180.5 102 210 105.5C214 114.333 221.7 134.8 220.5 146C219.811 152.435 217.114 157.075 214.304 161.909C211 167.592 207.54 173.544 207 183C206 200.5 217 206.5 223 208.5C227.8 210.1 226.333 209.167 225 208.5C222.667 204.833 218.5 195.3 220.5 186.5C221.363 182.702 224.312 178.368 227.598 173.539C233.83 164.38 241.274 153.44 238 141C234 125.8 231 121.333 230 121C230 82.8154 212.041 46.3916 171.984 35.6663Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'straight-up':
      return (
        <path
          fill-rule="evenodd"
          d="M95.9999 61.5C95.9999 68.3333 96.7999 82.6 99.9999 85C103.2 87.4 132 92 147 92C162 92 189.971 87.4 193.171 85C196.371 82.6 197.171 68.3333 197.171 61.5C205.442 85.5249 216.679 128.769 219.955 172.015C208.881 184.733 192.071 194.005 182.194 198C177.361 200 163.494 204 146.694 204C129.894 204 116.028 200 111.194 198C101.257 193.981 84.3044 184.621 73.2331 171.784C76.5315 128.615 87.7438 85.4821 95.9999 61.5ZM81.0989 254.432C81.1228 254.497 81.1467 254.562 81.1707 254.626C68.4471 254.251 40.8999 246.6 32.4999 219C21.9999 184.5 38.364 63.233 78.4999 39C105 23 119 23 146.5 23C174 23 188 23 214.5 39C254.636 63.233 271.171 184.5 260.671 219C252.271 246.6 224.724 254.251 212 254.626C212.057 254.472 212.115 254.317 212.171 254.162L212 254.5C202.5 248 178.2 234.5 147 234.5C115.908 234.5 90.6747 247.907 81.0989 254.432Z"
          {...fillColor}
          onClick={handleClick}
        />
      )
    case 'twin-braids':
      return (
        <>
          <path
            d="M146.5 92.5C91.5 92.5 92.5 91.5 92.5 62C91.3334 73.8334 92.5 105 76 100L63.5 119.5C63.5 84.5 74.5 30 146.5 30C218.5 30 230 84.5 230 119.5L217.5 100C201 104 202.167 73.8333 201 62C201 91.5 201.5 92.5 146.5 92.5Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            fill-rule="evenodd"
            d="M55.6037 156.184C57.6278 156.715 59.7753 157 62 157C62.7595 157 63.51 156.967 64.2496 156.902C66.5287 163.407 70.7565 169.387 75.8951 174.693C73.3438 177.674 69.7226 179.502 65.8819 179.58C69.1305 183.722 69.8077 189.781 67.1364 195.089C64.0774 201.168 57.6119 204.307 51.6515 203.056C57.7622 209.747 55.1894 220.808 53 226.5C48.6667 226.833 39.909 225.78 36 223.5C30 220 28.5 217.5 25 211C28.8684 206.272 37.5403 198.366 44.9806 199.29C41.1331 195.158 40.1626 188.627 43.018 182.952C45.5866 177.848 50.5569 174.817 55.6133 174.717C52.9934 171.45 51.8189 166.916 52.8022 162.306C53.2957 159.993 54.2774 157.919 55.6037 156.184Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            fill-rule="evenodd"
            d="M218.268 173.881C223.048 168.788 226.963 163.096 229.128 156.932C229.745 156.977 230.37 157 231 157C233.757 157 236.395 156.562 238.827 155.762C240.469 157.637 241.683 159.982 242.251 162.644C243.234 167.255 242.06 171.788 239.44 175.055C244.496 175.155 249.467 178.187 252.035 183.291C254.891 188.965 253.92 195.496 250.073 199.628C257.513 198.704 266.185 206.61 270.053 211.338C266.553 217.838 265.053 220.338 259.053 223.838C255.144 226.119 246.387 227.172 242.053 226.838C239.864 221.146 237.291 210.085 243.402 203.395C237.441 204.645 230.976 201.506 227.917 195.428C225.246 190.119 225.923 184.061 229.171 179.919C224.859 179.831 220.823 177.537 218.268 173.881Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'undercut':
      return (
        <>
          <path
            opacity="0.75"
            d="M63.5 121C63.5 50.2 115 39 146 39H147C178 39 229.5 50.2 229.5 121C219 121 219.5 121 214.5 98C204 98 204 98 198.5 79.5C186.667 78.1667 159.8 75.5 147 75.5H146C133.2 75.5 106.333 78.1667 94.5 79.5C89 98 89 98 78.5 98C73.5 121 74 121 63.5 121Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M71.5 79C66.3333 76 59.1 65.8 71.5 49C86.6261 28.5066 132.227 23.2505 146.5 23.0089C146.147 23.0029 145.814 23 145.5 23H147.5C147.186 23 146.853 23.0029 146.5 23.0089C160.773 23.2505 206.374 28.5066 221.5 49C233.9 65.8 226.667 76 221.5 79C218.5 85.6667 210.9 98.9 204.5 98.5C200 95.8333 190.3 89.1 187.5 83.5C184.667 86.8333 177.4 94 171 96C167.333 93.3333 159.6 87.1 158 83.5C155.833 87.8333 150.7 96.5 147.5 96.5C144.3 96.5 137.833 87.8333 135 83.5C133.4 87.1 125.667 93.3333 122 96C115.6 94 108.333 86.8333 105.5 83.5C102.7 89.1 93 95.8333 88.5 98.5C82.1 98.9 74.5 85.6667 71.5 79Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
    case 'up-top':
      return (
        <>
          <path
            opacity="0.75"
            d="M63.5 119C63.5 48.2 115 37 146 37H147C178 37 229.5 48.2 229.5 119C219 119 219.5 119 214.5 96C204 96 204 96 198.5 77.5C186.667 76.1667 159.8 73.5 147 73.5H146C133.2 73.5 106.333 76.1667 94.5 77.5C89 96 89 96 78.5 96C73.5 119 74 119 63.5 119Z"
            {...fillColor}
            onClick={handleClick}
          />
          <path
            d="M59.6639 53.221C65.6872 59.347 67.8623 77.0442 69.2008 83C86.4342 79.7385 122.407 74.9171 146.5 74.9171C170.593 74.9171 206.566 79.7385 223.799 83C225.138 77.0442 226.666 58.6354 233.336 53.221C241 47 237.5 45.5 232.332 40.884C227.009 36.1294 221.791 31.9503 217.274 44.2873C216.772 43.2947 216.795 41.2436 218 37.5C219.506 32.8204 227.5 30 215.768 23.8674C203.062 17.2254 204.51 21.1934 202 28C200.494 29.7017 198.602 34.9282 196.192 34.9282C196.36 33.5101 197.697 29.9934 198.5 27.2707C199.504 23.8674 205.5 18 196.192 13C185.304 7.15079 187.5 9 180.13 27.2707C179.628 25.7109 179 22.5 179 19C179 13.232 185.245 7.62535 170.593 7.27624C159 7 158.547 8 158.547 16.2099C158.547 22.3883 157.877 25.0018 157.041 25.5691C156.539 24.7182 155.111 22.1673 155.5 18.7624C156.5 10 159.238 6 147.504 6C134.955 6 138 10.5 138 16.21C138 18.724 137.13 23.442 135.959 25.5691C135.123 25.0019 133.65 22.3359 134.453 16.21C135.457 8.55249 137.002 5.94407 122.407 7.27625C109 8.5 114.5 12 114 18.7624C113.767 21.9203 113.372 25.7109 112.87 27.2707C107.85 7.27627 107 7.27625 95.3019 13.2321C83.9168 19.0285 93.4961 25.5967 94.5 29C95.3031 31.7227 96.6404 33.5102 96.8077 34.9282C94.3984 34.9282 91.5058 30.7017 90 29C87.4903 22.1934 87.4638 18.7348 77.2319 23.8674C67 29 71.9942 32.3204 73.5 37C74.7047 40.7436 76.228 43.2947 75.7261 44.2873C71.2086 31.9503 66.6911 37.0553 60.6678 40.884C54.6445 44.7127 52.1348 45.5636 59.6639 53.221Z"
            {...fillColor}
            onClick={handleClick}
          />
        </>
      )
  }
}
