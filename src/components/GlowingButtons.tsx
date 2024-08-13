import { styled, keyframes } from "@mui/system";
import { Button } from "@mui/material";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #64ffda;
  }
  50% {
    box-shadow: 0 0 20px #64ffda, 0 0 30px #64ffda;
  }
  100% {
    box-shadow: 0 0 5px #64ffda;
  }
`;

export const PrimaryGlowingButton = styled(Button)(({ theme }) => ({
    animation: `${glow} 2s ease-in-out infinite`,
    backgroundColor: "#64ffda",
    color: "#0a192f",
    "&:hover": {
      backgroundColor: "#4cffb5",
    },
  }));

export const SecondaryGlowingButton = styled(Button)(({ theme }) => ({
    animation: `${glow} 2s ease-in-out infinite`,
    backgroundColor: "transparent",
    color: "#64ffda",
    border: "2px solid #64ffda",
    "&:hover": {
      backgroundColor: "rgba(100, 255, 218, 0.1)",
    },
  }));
  
