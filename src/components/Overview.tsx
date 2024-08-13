import { Container, Typography, Box, Divider, useTheme } from "@mui/material";

const Overview = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: theme.typography.h2.fontWeight,
            textShadow: `2px 2px 4px ${theme.palette.custom.glowingShadow}`,
          }}
        >
          What is SuperDeskAI?
        </Typography>
        <Divider sx={{ borderColor: theme.palette.secondary.main, width: '60%', mx: 'auto', my: 3 }} />
      </Box>
      <Typography variant="body1" paragraph sx={{ color: theme.palette.text.primary, fontSize: theme.typography.body1.fontSize, lineHeight: theme.typography.body1.lineHeight }}>
        Every business/team has its unique set of problems that it solves,
        leading to a variety of different target customers or employees and
        different services needed for them. Why settle for a generic solution?
      </Typography>
      <Box sx={{ my: 4, p: 3, bgcolor: `${theme.palette.secondary.main}1A`, borderRadius: 2 }}>
        <Typography variant="body1" paragraph sx={{ color: theme.palette.text.primary, fontSize: theme.typography.body1.fontSize, lineHeight: theme.typography.body1.lineHeight }}>
          Our AI-first backend and (Ai)PI enable you to craft a customer service
          platform as distinctive as your brand. You can have an exact UI that you
          need, crafted for your specific usecase, for your specific
          customers/employees using an LLM of your choice and backed with our
          cloud-native backend.
        </Typography>
      </Box>
    </Container>
  );
};

export default Overview;