// ** React Imports
import { SyntheticEvent, useState, useEffect } from 'react'

// ** Next Import

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiTab, { TabProps } from '@mui/material/Tab'
import CircularProgress from '@mui/material/CircularProgress'
import IconifyIcon from '../../../../../@core/components/icon'
import UserViewOverview from '../../../../../pages/users/profile'


interface Props {
  tab: string
  invoiceData: any[]
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1)
  }
}))

const UserViewRight = ({ tab, invoiceData }: Props) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // ** Hooks
  // const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true)
    setActiveTab(value)
    // router
    //   .push({
    //     pathname: `/apps/user/view/${value.toLowerCase()}`
    //   })
    //   .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false)
    }
  }, [invoiceData])

  return (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='overview' label='Overview' icon={<IconifyIcon icon='mdi:account-outline' />} />
        <Tab value='security' label='Security' icon={<IconifyIcon icon='mdi:lock-outline' />} />
        <Tab value='billing-plan' label='Billing & Plan' icon={<IconifyIcon icon='mdi:bookmark-outline' />} />
        <Tab value='notification' label='Notification' icon={<IconifyIcon icon='mdi:bell-outline' />} />
        <Tab value='connection' label='Connection' icon={<IconifyIcon icon='mdi:link-variant' />} />
      </TabList>
      <Box sx={{ mt: 6 }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel sx={{ p: 0 }} value='overview'>
              <UserViewOverview invoiceData={invoiceData} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='security'>
              {/* <UserViewSecurity /> */}
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='billing-plan'>
              {/* <UserViewBilling /> */}
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='notification'>
              {/* <UserViewNotification /> */}
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='connection'>
              {/* <UserViewConnection /> */}
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  )
}

export default UserViewRight
