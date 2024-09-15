import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Stars = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Engine carregada:", engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Contêiner carregado:", container);
  }, []);

  const ParticlesConfig = {
    background: {
      color: "#000000",
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit} // Inicia o carregamento do `tsparticles`
      loaded={particlesLoaded} // Callback quando as partículas forem carregadas
      options={ParticlesConfig} // Configurações definidas para as partículas
      height="100vh" // Altura para cobrir toda a tela
      width="100vw" // Largura para cobrir toda a tela
      style={{ position: "absolute", top: 0, left: 0 }} // Garante que as partículas ocupem toda a tela
    />
  );
};

export default Stars;
