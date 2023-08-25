import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ color = "#323232" }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,

        particles: {
          color: {
            value: color,
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
              area: 500,
            },
            value: 5,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 20, max: 30 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
