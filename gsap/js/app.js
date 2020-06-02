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

const aboutEnter = () => {
  let timeline = gsap.timeline();

  timeline.fromTo(
    "h1",
    {
      x: -500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.4,
    }
  );
};

const contactEnter = () => {
  let timeline = gsap.timeline();

  timeline.fromTo(
    "h1",
    {
      x: -500,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.4,
    }
  );
};

const galleryEnter = () => {
  let timeline = gsap.timeline();

  timeline.fromTo(
    ".white-bg ul li",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: "power1.inOut",
    }
  );
};
galleryEnter();

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
    {
      name: "gallery-transition",
      from: {
        namespace: ["home", "about"],
      },
      to: {
        namespace: ["gallery"],
      },

      async leave(data) {
        const done = this.async();
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        galleryEnter();
      },
      async once(data) {
        initPage();
      },
    },
  ],
  views: [
    {
      namespace: "about",
      afterEnter(data) {
        //loadingEnter();
        aboutEnter();
      },
    },
    {
      namespace: "contact",
      afterEnter(data) {
        //loadingEnter();
        contactEnter();
      },
    },
    {
      namespace: "gallery",
      afterEnter(data) {
        loadingEnter();
        galleryEnter();
      },
    },
  ],
});

/* ScrollMagic Animations */

const timelineServicesScroll = new gsap.timeline({});

timelineServicesScroll.fromTo(
  "#services",
  {
    x: "100%",
  },
  {
    x: 0,
  }
);

const servicesElement = document.querySelector("#services");
let homeController = new ScrollMagic.Controller();
let servicesScene = new ScrollMagic.Scene({
  triggerElement: "#services",
  triggerHook: 1,
  offet: 500,
  reverse: false,
  duration: servicesElement.offsetHeight,
})
  .setTween(timelineServicesScroll)
  .addIndicators()
  .addTo(homeController);
