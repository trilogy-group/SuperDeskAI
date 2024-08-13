import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme, Theme } from "@mui/material/styles";
import "swiper/css";
import "swiper/css/pagination";

import BackgroundParticles from "../components/BackgroundParticles";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Feature from "../components/Feature";
import Demo from "../components/Demo";
import { Footer } from "../components/Footer";
import { PrimaryGlowingButton } from "../components/GlowingButtons";
import Logo from "../components/Logo";

const HeroSection = styled("section")(({ theme }) => ({
  background: "transparent",
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 0, 4),
  position: "relative",
  overflow: "hidden",
}));

const FeatureSection = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(8),
}));

const DemoSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const LandingPage = () => {
  const theme = useTheme<Theme>();

  const features = [
    {
      title: "AI-First Infrastructure",
      description:
        "Backend that features most efficient ways of getting stuff done with AI at the core. Build custom interfaces and workflows with any LLM or AI of your choice.",
      icon: "🧠",
      images: ["brain-connected-to-tools.png", "flowchart-ai-apps.png"],
    },
    {
      title: "Cloud-Native Architecture",
      description:
        "Experience unmatched scalability, 99.99% uptime, and seamless updates. Deploy in seconds, not days & pay for what you use.",
      icon: "☁️",
      images: ["cloud-infra.png"],
    },
    {
      title: "Supercharged (Ai)PI",
      description:
        "(Ai)PI that deliver lightning-fast responses and seamless connectivity. Build your platform and watch your user satisfaction skyrocket.",
      icon: "⚡",
      images: ["fast-api.png"],
    },
  ];

  return (
    <Box
      sx={{ background: theme.palette.background.default, minHeight: "100vh" }}
    >
      <BackgroundParticles />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Logo src="TI_logo_white.svg" alt="SuperDeskAI Logo" />
        </Toolbar>
      </AppBar>

      <main>
        <HeroSection>
          <Hero />
        </HeroSection>

        <FeatureSection>
          <Container>
            {features.map((feature, index) => (
              <Feature
                index={index}
                title={feature.title}
                description={feature.description}
                images={feature.images}
              />
            ))}
          </Container>
        </FeatureSection>

        <Overview />

        <DemoSection>
          <Demo />
        </DemoSection>

        <Container sx={{ mt: 8, mb: 4, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ color: theme.palette.custom.glowingText }}
          >
            Ready to craft your own solution?
          </Typography>
          <PrimaryGlowingButton variant="contained" size="large">
            GET STARTED
          </PrimaryGlowingButton>
        </Container>

        {/* API Schema Download Section */}
        <Container maxWidth="lg" sx={{ mb: 4, py: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              Download our (Ai)PI schemas: 
              <Link href="https://zendesk.openapi-builder.ti.trilogy.com/download/openapi-spec" sx={{ color: theme.palette.custom.glowingText, ml: 1 }}>OpenAPI</Link> |
              <Link href="https://zendesk.openapi-builder.ti.trilogy.com/download/graphql-schema" sx={{ color: theme.palette.custom.glowingText, ml: 1 }}>GraphQL</Link>
            </Typography>
          </Box>
        </Container>
      </main>

      <Footer />
    </Box>
  );
};

export default LandingPage;