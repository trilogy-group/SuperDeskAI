import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const BackgroundParticles = () => {
    const particlesInit = React.useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
      }, []);
    
    return <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#64ffda",
        },
        links: {
          color: "#64ffda",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 0.8, // Thinner lines
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 40,
        },
        opacity: {
          value: 0.3, // More transparent particles
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 }, // Smaller particles
        },
      },
      detectRetina: true,
    }}
  />
};

export default BackgroundParticles;