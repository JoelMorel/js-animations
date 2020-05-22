"use strict";

var initPage = function initPage() {
  var timeline = gsap.timeline();
  timeline.fromTo(".info-section h1", {
    x: 0,
    y: 0,
    opacity: 0
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1
  }).fromTo(".info-section h4", {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1
  }).fromTo(".logo", {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.5
  }).fromTo(".menu", {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.5
  }, ">-1.8").fromTo(".back", {
    x: -500,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".front", {
    x: 0,
    opacity: 0
  }, {
    x: 275,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".shape1", {
    scale: 0.1,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".shape2", {
    scale: 0.1,
    opacity: 0
  }, {
    scale: 1,
    opacity: 0.4,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".shape3", {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 0.4,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".call-actions", {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    //delay: 0.5,
    duration: 1
  });
};

var delay = function delay(n) {
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    });
  });
};

var loadingLeave = function loadingLeave() {
  var timeline = gsap.timeline();
  timeline.fromTo("loading-bg", {
    y: "100%"
  }, {
    y: 0,
    duration: 2
  });
};

var loadingEnter = function loadingEnter() {
  var timeline = gsap.timeline();
  timeline.fromTo("loading-bg", {
    y: 0
  }, {
    y: "100%",
    duration: 2
  });
};

barba.init({
  sync: true,
  transitions: [{
    name: "page-wipe",
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              done = this.async();
              loadingLeave();
              _context.next = 4;
              return regeneratorRuntime.awrap(delay(1500));

            case 4:
              done();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loadingEnter(); //initPage();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    once: function once(data) {
      return regeneratorRuntime.async(function once$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              initPage();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]
});