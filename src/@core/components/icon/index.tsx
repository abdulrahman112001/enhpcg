// ** Icon Imports

import {  IconProps } from "@mui/material"
import { Icon } from '@iconify/react'

const IconifyIcon = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize='1.5rem' {...rest} />
}

export default IconifyIcon
