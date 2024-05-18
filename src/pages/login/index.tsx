import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSettings } from "../../@core/hooks/useSettings";
import themeConfig from "../../configs/themeConfig";
import Main from "../../components/templates/login/Main";

const LoginIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: "0 !important",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(10),
  },
}));

const LoginIllustration = styled("img")(({ theme }) => ({
  maxWidth: "48rem",
  [theme.breakpoints.down("xl")]: {
    maxWidth: "38rem",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: "30rem",
  },
}));

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 400,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 450,
  },
}));

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: "0.18px",
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down("md")]: { marginTop: theme.spacing(8) },
}));

const LoginPage = () => {
  const theme = useTheme();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));

  const { skin } = settings;

  const imageSource = "auth-v2-login-illustration-light";

  return (
    <Box className="content-right flex">
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoginIllustrationWrapper>
            <LoginIllustration
              alt="login-illustration"
              src={`/image/${imageSource}.png`}
            />
          </LoginIllustrationWrapper>
          {/* <FooterIllustrationsV2 /> */}
        </Box>
      ) : null}
      <RightWrapper
        sx={
          skin === "bordered" && !hidden
            ? { borderLeft: `1px solid ${theme.palette.divider}` }
            : {}
        }
      >
        <Box
          sx={{
            p: 7,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.paper",
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: "flex",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "1.5rem !important",
                }}
              >
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant="h5">{`Welcome to ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant="body2">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Main />
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  );
};

export default LoginPage;
