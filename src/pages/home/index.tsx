// ** MUI Imports
import Grid from "@mui/material/Grid";
import ApexChartWrapper from "../../@core/styles/libs/react-apexcharts";
import AnalyticsCongratulations from "../../components/molecules/analytics/AnalyticsCongratulations";
import AnalyticsSessions from "../../components/molecules/analytics/AnalyticsSessions";
import AnalyticsTotalTransactions from "../../components/molecules/analytics/AnalyticsTotalTransactions";
import AnalyticsPerformance from "../../components/molecules/analytics/AnalyticsPerformance";
import AnalyticsProjectStatistics from "../../components/molecules/analytics/AnalyticsProjectStatistics";
import AnalyticsTotalRevenue from "../../components/molecules/analytics/AnalyticsTotalRevenue";
import AnalyticsOverview from "../../components/molecules/analytics/AnalyticsOverview";
import AnalyticsSalesCountry from "../../components/molecules/analytics/AnalyticsSalesCountry";
import AnalyticsTopReferralSources from "../../components/molecules/analytics/AnalyticsTopReferralSources";
import AnalyticsWeeklySales from "../../components/molecules/analytics/AnalyticsWeeklySales";
import AnalyticsVisitsByDay from "../../components/molecules/analytics/AnalyticsVisitsByDay";
import AnalyticsActivityTimeline from "../../components/molecules/analytics/AnalyticsActivityTimeline";
import CardStatsVertical from "../../@core/components/card-statistics/card-stats-vertical";
import IconifyIcon from "../../@core/components/icon";

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className="match-height">
        <Grid item xs={12} md={8}>
          <AnalyticsCongratulations />
        </Grid>
        <Grid item xs={6} md={2}>
          <CardStatsVertical
            stats="155k"
            color="primary"
            trendNumber="+22%"
            title="Total Orders"
            chipText="Last 4 Month"
            icon={<IconifyIcon icon="mdi:cart-plus" />}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <AnalyticsSessions />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTotalTransactions />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsPerformance />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsProjectStatistics />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <AnalyticsTotalRevenue />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats="$13.4k"
                color="success"
                trendNumber="+38%"
                title="Total Sales"
                chipText="Last Six Month"
                icon={<IconifyIcon icon="mdi:currency-usd" />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                color="info"
                stats="142.8k"
                trendNumber="+62%"
                chipText="Last One Year"
                title="Total Impressions"
                icon={<IconifyIcon icon="mdi:link" />}
              />
            </Grid>
            <Grid item xs={6}>
              <AnalyticsOverview />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsSalesCountry />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTopReferralSources />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsWeeklySales />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnalyticsVisitsByDay />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsActivityTimeline />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Home;
