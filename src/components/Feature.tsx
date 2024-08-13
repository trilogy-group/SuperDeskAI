import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Theme } from "@mui/material/styles";

const FeatureRow = styled(motion.div)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  background: `${theme.palette.secondary.main}1A`,
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ImageContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "10px",
  "& .swiper": {
    width: "100%",
    height: "100%",
  },
  "& .swiper-slide img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
});

const TextContainer = styled("div")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0, 4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0, 0),
  },
}));

const FeatureContent = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  padding: theme.spacing(4),
  flex: 1,
}));

const FeatureTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.custom.glowingText,
  fontSize: theme.typography.h2.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  marginBottom: theme.spacing(4),
  textShadow: `0 0 10px ${theme.palette.custom.glowingShadow}`,
}));

const FeatureDescription = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: 1.6,
  opacity: 1,
  textShadow: `0 1px 2px ${theme.palette.common.black}`,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

type FeatureProps = {
  index: number;
  title: string;
  description: string;
  images: string[];
};

const Feature = ({ index, title, description, images }: FeatureProps) => {
  const theme = useTheme();

  const hoverAnimation = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -10,
    },
  };

  return (
    <FeatureRow
      key={index}
      initial="rest"
      whileHover="hover"
      variants={hoverAnimation}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      theme={theme}
    >
      {index % 2 === 0 ? (
        <>
          <ImageContainer>
            <SwiperComponent
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} alt={`${title} - image ${i + 1}`} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </ImageContainer>
          <TextContainer>
            <FeatureContent theme={theme}>
              <FeatureTitle variant="h2" theme={theme}>{title}</FeatureTitle>
              <FeatureDescription theme={theme}>{description}</FeatureDescription>
            </FeatureContent>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <FeatureContent theme={theme}>
              <FeatureTitle variant="h2" theme={theme}>{title}</FeatureTitle>
              <FeatureDescription theme={theme}>{description}</FeatureDescription>
            </FeatureContent>
          </TextContainer>
          <ImageContainer>
            <SwiperComponent
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} alt={`${title} - image ${i + 1}`} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </ImageContainer>
        </>
      )}
    </FeatureRow>
  );
};

export default Feature;