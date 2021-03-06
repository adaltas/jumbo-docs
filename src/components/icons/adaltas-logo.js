import React from 'react'
import { Icon } from 'antd'

const AdaltasLogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 330 250"
    width="3.3em"
    height="2.5em"
  >
    <g id="g90">
      <path
        d=" M 0 164.061 C 73.969 164.254 117.925 123.764 145.461 94.301 C 155.756 83.287 177.257 84.47 183.779 94.686 C 185.875 97.972 190.737 101.451 193.596 101.74 C 196.456 102.029 198.457 105.474 192.929 105.508 C 144.696 105.799 147.556 163.479 0 164.061 Z "
        fill="rgb(152,0,0)"
      />
      <path
        d=" M 128.682 42.319 C 76.638 41.739 15.865 81.953 27.264 142.61 C 29.55 154.784 53.621 146.636 51.333 134.462 C 38.56 66.487 90.936 42.319 128.682 42.319 Z "
        fill="rgb(152,0,0)"
      />
      <path
        d=" M 271.092 45.218 C 329.428 211.596 134.727 298.196 66.667 177.034 C 59.063 163.499 36.428 173.235 43.848 188.021 C 110.763 321.354 337.816 223.77 271.092 45.218 Z "
        fill="rgb(152,0,0)"
      />
      <path
        d=" M 330 0 C 248.788 0 192.809 41.783 158.876 80.432 C 171.029 75.196 183.159 79.493 189.307 88.986 C 208.943 48.987 264.992 6.57 330 0 Z "
        fill="rgb(152,0,0)"
      />
    </g>
  </svg>
)

const AdaltasLogo = props => <Icon component={AdaltasLogoSVG} {...props} />

export default AdaltasLogo
