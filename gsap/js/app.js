const initPage = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".info-section h1",
      {
        x: 0,
        y: 0,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
      }
    )
    .fromTo(
      ".info-section h4",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
      }
    )

    .fromTo(
      ".logo",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
      }
    )
    .fromTo(
      ".menu",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
      },
      ">-1.8"
    )
    .fromTo(
      ".back",
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      },
      ">-1.8"
    )
    .fromTo(
      ".front",
      {
        x: 0,
        opacity: 0,
      },
      {
        x: 275,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      },
      ">-1.8"
    )
    .fromTo(
      ".shape1",
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: 0.5,
        duration: 1.3,
      },
      ">-1.8"
    )
    .fromTo(
      ".shape2",
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 0.4,
        delay: 0.5,
        duration: 1.3,
      },
      ">-1.8"
    )
    .fromTo(
      ".shape3",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 0.4,
        delay: 0.5,
        duration: 1.3,
      },
      ">-1.8"
    )
    .fromTo(
      ".call-actions",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        //delay: 0.5,
        duration: 1,
      }
    );
};

const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    });
  });
};

const loadingLeave = () => {
  let timeline = gsap.timeline();

  timeline.fromTo(
    "loading-bg",
    {
      y: "100%",
    },
    {
      y: 0,
      duration: 2,
    }
  );
};
const loadingEnter = () => {
  let timeline = gsap.timeline();

  timeline.fromTo(
    "loading-bg",
    {
      y: 0,
    },
    {
      y: "100%",
      duration: 2,
    }
  );
};

barba.init({
  sync: true,
  transitions: [
    {
      name: "page-wipe",
      async leave(data) {
        const done = this.async();
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        //initPage();
      },
      async once(data) {
        initPage();
      },
    },
  ],
});
