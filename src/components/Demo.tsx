import { Container, Typography, Grid, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SecondaryGlowingButton } from "./GlowingButtons";

const Demo = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: "#64ffda" }}
      >
        Browse through tons of use cases
      </Typography>
      <Typography
        variant="h5"
        align="center"
        paragraph
        sx={{ color: "#ffffff" }}
      >
        See what other users have built with our APIs.
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <IconButton aria-label="Previous demo">
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="video"
              height="400"
              src="dist/videos/demo1.mp4"
              controls
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#64ffda" }}
              >
                Amazing Feature One
              </Typography>
              <Typography variant="body2" sx={{ color: "#ffffff" }}>
                Description for Demo Video 1. Showcase the power of our API.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <IconButton aria-label="Next demo">
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <SecondaryGlowingButton variant="outlined" href="all-demos.html">
          VIEW ALL
        </SecondaryGlowingButton>
      </Grid>
    </Container>
  );
};

export default Demo;
