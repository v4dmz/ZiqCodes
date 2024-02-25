particlesJS("particles", {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: .8,
                random: !0,
                animation: {
                    enable: !0,
                    speed: 1,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: !0,
                    mode: "push"
                },
                onClick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: !0
    }),
    function () {
        window.scrollTo({
            top: 0
        })
    }, window.addEventListener("scroll", function () {
        var t = document.querySelector(".scroll-top");
        window.pageYOffset > 200 ? t.style.display = "block" : t.style.display = "none"
    });