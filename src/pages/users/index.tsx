import { useTranslation } from "react-i18next";
import Table from "../../components/molecules/Form/table/Table";
import CustomAvatar from "../../components/molecules/avatar";
import { getInitials } from "../../@core/utils/get-initials";
import { Avatar, Box, Card, CardContent, Grid, Icon, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import IconifyIcon from "../../@core/components/icon";
import CustomChip from "../../components/molecules/chip";

function Users() {
  const { t } = useTranslation();
  const renderClient = (row: any) => {
    if (row?.avatar?.length) {
      return (
        <CustomAvatar src={row?.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
      );
    } else {
      return (
        <CustomAvatar
          skin="light"
          color={row?.avatarColor || "primary"}
          sx={{ mr: 3, width: 34, height: 34, fontSize: "1rem" }}
        >
          {getInitials(row?.firstName ? row?.firstName : "John Doe")}
        </CustomAvatar>
      );
    }
  };
  const userRoleObj: any = {
    Admin: { icon: "mdi:laptop", color: "error.main" },
    author: { icon: "mdi:cog-outline", color: "warning.main" },
    ser: { icon: "mdi:pencil-outline", color: "info.main" },
    maintainer: { icon: "mdi:chart-donut", color: "success.main" },
    User: { icon: "mdi:account-outline", color: "primary.main" },
  };

  const userStatusObj: any = {
    Active: "success",
    pending: "warning",
    Inactive: "secondary",
  };
  const LinkStyled = styled(Link)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "0.8rem",
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }));
  const columns = [
    {
      field: "firstName",
      flex: 0.2,
      // minWidth: 100,
      headerName: "First name",
      renderCell: ({ row }: any) => {
        const { firstName, username } = row;

        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {renderClient(row)}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <LinkStyled href="/apps/user/view/overview/">
                {firstName}
              </LinkStyled>
              <Typography noWrap variant="caption">
                {/* {`@${username}`} */}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "Role",
      headerName: "Role",
      renderCell: ({ row }: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& svg": { mr: 3, color: userRoleObj[row.Role]?.color },
            }}
          >
            <IconifyIcon icon={userRoleObj[row?.Role]?.icon} fontSize={15} />
            <Typography
              noWrap
              sx={{ color: "text.secondary", textTransform: "capitalize" }}
            >
              {row?.Role}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "State",
      flex: 0.1,

      minWidth: 110,
      headerName: "State",
      renderCell: ({ row }: any) => {
        return (
          <div className="flex items-center">
            <CustomChip
              skin="light"
              size="small"
              label={row?.State}
              color={userStatusObj[row?.State]}
              sx={{
                textTransform: "capitalize",
                "& .MuiChip-label": { lineHeight: "18px" },
              }}
            />
          </div>
        );
      },
    },
    {
      field: "Balance",
      headerName: "Balance",
      renderCell: ({ row }: any) => {
        return <Link to={`/dashboard/users/profile/${row?.id}`} className="flex items-center cursor-pointer ">VIEW</Link>;
      },
    },
    {
      field: "ChangeState",
      headerName: "Change State",
    },
    {
      field: "ChangeRole",
      headerName: "Change Role",
    },
    {
      field: "UserResources",
      headerName: "User Resources",
    },
    {
      field: "DeleteUser",
      headerName: "Delete User",
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      email: "jon.snow@example.com",
      Role: "Admin",
      State: "Active",
      Balance: 100,
      ChangeState: "Enable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 14,
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "cersei.lannister@example.com",
      Role: "User",
      State: "Inactive",
      Balance: 200,
      ChangeState: "Disable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 31,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      email: "jaime.lannister@example.com",
      Role: "User",
      State: "Active",
      Balance: 150,
      ChangeState: "Enable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 31,
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      email: "arya.stark@example.com",
      Role: "Admin",
      State: "Inactive",
      Balance: 50,
      ChangeState: "Disable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 11,
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      email: "daenerys.targaryen@example.com",
      Role: "User",
      State: "Active",
      Balance: 300,
      ChangeState: "Enable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: null,
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      email: "melisandre@example.com",
      Role: "Admin",
      State: "Inactive",
      Balance: 500,
      ChangeState: "Disable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 150,
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      email: "ferrara.clifford@example.com",
      Role: "User",
      State: "Active",
      Balance: 75,
      ChangeState: "Enable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 44,
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      email: "rossini.frances@example.com",
      Role: "User",
      State: "Inactive",
      Balance: 90,
      ChangeState: "Disable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 36,
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "harvey.roxie@example.com",
      Role: "Admin",
      State: "Active",
      Balance: 120,
      ChangeState: "Enable",
      ChangeRole: "Change",
      UserResources: "View",
      DeleteUser: "Delete",
      age: 65,
    },
  ];

  const queryParams = {
    start_month: "jan",
    start_year: "2023",
    end_month: "jan",
    end_year: "2024",
    user_id: "2000",
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const endpoint = `user_billing?${searchParams.toString()}`;

  //   const { data:usersData } = useFetch({
  //     endpoint: endpoint,
  //     queryKey: [endpoint],

  //     // enabled: !!page,
  //   });

  return (
    <div className="w-full">
   {/* <Card>
      <CardContent sx={{ py: theme => `${theme.spacing(4.125)} !important` }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar skin='light' color={"color"} variant='rounded'>
            {"icon"}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant='h6'>{"stats"}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'inline-flex', color: "trend" === 'positive' ? 'success.main' : 'error.main' }}>
                  <IconifyIcon icon={"trend" === 'positive' ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
                </Box>
                <Typography variant='caption' sx={{ color: "trend" === 'positive' ? 'success.main' : 'error.main' }}>
                  {"trendNumber"}
                </Typography>
              </Box>
            </Box>
            <Typography variant='caption'>{"title"}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card> */}
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default Users;
