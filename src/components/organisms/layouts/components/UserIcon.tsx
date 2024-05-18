import { Icon, IconProps } from "@mui/material"

const UserIcon = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} {...rest} />
}

export default UserIcon
