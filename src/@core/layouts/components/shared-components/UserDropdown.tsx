// ** React Imports
import { Fragment, SyntheticEvent, useState } from 'react'

// ** Next Import

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import IconifyIcon from '../../../components/icon'
import { useAuth } from '../../../context/auth-and-perm/AuthProvider'
import { Settings } from '../../../context/settingsContext'

interface Props {
  settings: Settings
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))

const UserDropdown = (props: Props) => {
  const { settings } = props
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const { logout , user } = useAuth();
  const navigate= useNavigate()
  const { direction } = settings

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
  
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      mx: 2,
      fontSize: '1.375rem',
      color: 'text.primary'
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
    handleDropdownClose()
  }

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt='John Doe'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src='/images/avatars/1.png'
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              badgeContent={<BadgeContentSpan />}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar alt='John Doe' src='/images/avatars/1.png' sx={{ width: '2.5rem', height: '2.5rem' }} />
            </Badge>
            <Box sx={{ display: 'flex', mx: 3, alignItems: 'flex-start', flexDirection: 'column' }}>
                {`${user?.userfirstname} ${user?.userlastname}`}
              <Typography sx={{ fontWeight: 600 }}> </Typography>
              <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                {user?.userrole}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: '0 !important' }} />
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:account-outline' />
            Profile
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:email-outline' />
            Inbox
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:message-outline' />
            Chat
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:cog-outline' />
            Settings
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:currency-usd' />
            Pricing
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0  }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <IconifyIcon icon='mdi:help-circle-outline' />
            FAQ
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={{ py: 2, '& svg': { mx: 2, fontSize: '1.375rem', color: 'text.primary' } }}
        >
          <IconifyIcon icon='mdi:logout-variant' />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
