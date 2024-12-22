import { Element } from "react-scroll";
import classes from "./App.module.css";
import Multimedia from "./components/Multimedia/multimedia";
import Navbar from "./components/Nav/nav";
import Timeline from "./components/Projects/timeline";
import ScrollToTopButton from "./components/Home/scrollBtn";
import Type from "./components/Home/type";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/Experience";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect } from "react";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <main>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "transparent",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 0.5,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          clear: true,
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "trail",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: {
                delay: 0.8,
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 1,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 3000,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: false,
                  },
                  links: {
                    enable: false,
                  },
                  move: {
                    outModes: {
                      default: "destroy",
                    },
                    speed: 2,
                  },
                  size: {
                    value: {
                      min: 1,
                      max: 2,
                    },
                    animation: {
                      enable: true,
                      speed: 5,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                  },
                },
              },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                value: 1,
              },
              vertical: {
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#eee1ee",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  speed: 50,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
              },
            },
            effect: {
              close: true,
              fill: true,
              options: {},
              type: [],
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              limit: {
                mode: "delete",
                value: 0,
              },
              value: 100,
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.8,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {},
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 3,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  value: 3,
                },
                rate: {
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 13,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            life: {
              count: 0,
              delay: {
                value: 10,
                sync: false,
              },
              duration: {
                value: 0,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              animation: {
                enable: false,
                speed: 15,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "random",
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 13,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: true,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      />
      <ScrollToTopButton />
      <div className={classes.intro}>
        <Element name="intro">
          <div className={classes.theTitle}>
            <h1 className={classes.title}> eunsong koh</h1>
            <br />
            <Type />
            <Navbar />
          </div>
        </Element>
      </div>
      <Element name="about">
        <div className={classes.about}>
          <h2 className="font-black">a b o u t</h2>
          <About />
        </div>
      </Element>
      <Element name="experience">
        <div className={classes.experience}>
          <h2 className="font-black">e x p e r i e n c e</h2>
          <Experience />
        </div>
      </Element>
      <Element name="projects">
        <div className={classes.projects}>
          <h2 className="font-black">p r o j e c t s</h2>
          <Timeline />
        </div>
      </Element>
      <Element name="multimedia">
        <div className={classes.multimedia}>
          <h2 className="font-black">m u l t i m e d i a</h2>
          <Multimedia />
        </div>
      </Element>
      <Element name="contact">
        <div className={classes.contact}>
          <h2 className="font-black">c o n t a c t </h2>
          <Contact />
        </div>
      </Element>
    </main>
  );
}

export default App;
