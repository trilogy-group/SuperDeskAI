import { styled, alpha } from "@mui/system";
import { Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { Container, Grid } from "@mui/material";

const FooterContainer = styled("footer")(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.1),
  backdropFilter: "blur(10px)",
  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, #64ffda, #0a192f, #64ffda)",
  },
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#64ffda",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    color: "#64ffda",
    transform: "translateY(-3px)",
  },
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#64ffda", fontWeight: "bold" }}
            >
              SuperDeskAI
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Revolutionizing customer experience with AI-powered solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#64ffda" }}>
              Quick Links
            </Typography>
            <FooterLink variant="body2">Contact</FooterLink>
            <FooterLink variant="body2">About us</FooterLink>
            <FooterLink variant="body2">FAQ's</FooterLink>
            <FooterLink variant="body2">Support</FooterLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: "#64ffda" }}>
              Follow Us
            </Typography>
            <SocialIcon aria-label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon aria-label="Twitter">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon aria-label="Google">
              <GoogleIcon />
            </SocialIcon>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4, opacity: 0.7 }}>
          © 2024 Trilogy Innovations, all rights reserved
        </Typography>
      </Container>
    </FooterContainer>
  );
};
