// ** MUI Import
import Grid from '@mui/material/Grid'
import { CardStatsHorizontalProps } from '../../../../@core/components/card-statistics/types'
import IconifyIcon from '../../../../@core/components/icon'


interface Props {
  data: CardStatsHorizontalProps[]
}

const CardStatsHorizontal = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item: any, index: number) => {
          return (
            <Grid item xs={12} md={3} sm={6} key={index}>
              <CardStatsHorizontal {...item} icon={<IconifyIcon icon={item.icon as string} />} />
            </Grid>
          )
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsHorizontal
