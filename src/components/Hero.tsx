import { Container, Typography, Box, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PrimaryGlowingButton } from "./GlowingButtons";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.1,
          background: 'url("/ai-background.svg")',
          animation: 'float 20s infinite linear',
          '@keyframes float': {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0)' },
          },
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
        <Box
          component="img"
          src="/superdesk-logo.png"
          alt="SuperDeskAI Logo"
          sx={{
            height: '80px',
            width: '80px',
            marginRight: '20px',
            borderRadius: '50%',
            boxShadow: `0 0 15px ${theme.palette.custom.glowingShadow}`,
          }}
        />
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' }, 
            fontWeight: theme.typography.h1.fontWeight,
            textShadow: `0 0 10px ${theme.palette.custom.glowingShadow}, 0 0 20px ${theme.palette.custom.glowingShadow}`,
            mb: 3,
            color: theme.palette.text.primary,
            textAlign: 'center',
            animation: 'glow 3s ease-in-out infinite alternate',
            '@keyframes glow': {
              from: {
                textShadow: `0 0 10px ${theme.palette.custom.glowingShadow}, 0 0 20px ${theme.palette.custom.glowingShadow}`,
              },
              to: {
                textShadow: `0 0 15px ${theme.palette.custom.glowingShadow}, 0 0 30px ${theme.palette.custom.glowingShadow}`,
              },
            },
          }}
        >
          SuperDeskAI
        </Typography>
      </Box>
      <Typography
        variant="h5"
        paragraph
        sx={{
          fontWeight: 300,
          fontSize: { xs: '1.2rem', md: '1.5rem' },
          maxWidth: "800px",
          margin: "0 auto 3rem",
          textAlign: "center",
          color: theme.palette.text.primary,
          lineHeight: 1.6,
        }}
      >
        Elevate your customer interactions with <span style={{color: theme.palette.custom.glowingText}}>cutting-edge AI technology</span>.
        Seamlessly integrate <span style={{color: theme.palette.custom.glowingText}}>personalized, intelligent solutions</span> that adapt to
        your business's unique challenges and opportunities.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          mb: 3,
          fontWeight: theme.typography.h6.fontWeight,
          color: theme.palette.text.secondary,
        }}
      >
        Ready to transform your business? Start exploring now!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://superdesk-ai.readme.io/reference"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <PrimaryGlowingButton
            variant="contained"
            color="secondary"
            endIcon={<OpenInNewIcon />}
            sx={{ minWidth: '180px' }}
          >
            Explore API
          </PrimaryGlowingButton>
        </a>
        <Button
          variant="outlined"
          color="primary"
          href="graphql.html"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon />}
          sx={{ 
            minWidth: '180px',
            borderColor: theme.palette.custom.glowingShadow,
            color: theme.palette.custom.glowingText,
            '&:hover': {
              backgroundColor: `${theme.palette.custom.glowingText}1A`,
              borderColor: theme.palette.custom.glowingText,
            },
          }}
        >
        GraphQL
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;