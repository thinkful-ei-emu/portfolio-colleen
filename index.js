/*disable eslint*/
/*use global $*/
function main() {
  handleButtonLinks();

  handleAnimations();

  handleNavBurger();

  handleToggleResume();
}

$(main);

function handleToggleResume() {
  $("#view-resume-btn").click(function() {
    $("#resume-body").toggleClass("open");
    if ($("#resume-body").hasClass("open")) {
      document.getElementById("Resume").textContent = "Click to Hide Resume";
    } else {
      document.getElementById("Resume").textContent = "Click to View Resume";
    }
  });
}
function handleAnimations() {
  $("#info").hide();
  setTimeout(function() {
    $("#info").fadeIn();
  }, 3000);

  $(window).bind("mousewheel", function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $("nav").fadeIn();
    } else {
      $("nav").fadeOut();
    }
  });
}
function handleNavBurger() {
  $("#nav-hamburger").click(function() {
    $(".nav").toggleClass("open");
  });

  $("a").click(function() {
    $(".nav").toggleClass("open");
  });
}
function handleButtonLinks() {
  document.getElementById("quiz-app-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/ex-module2-blake-colleen");
  };

  document.getElementById("quiz-app-page").onclick = function() {
    window.open("https://coggins87.github.io/quizapp/");
  };

  document.getElementById("amrapp-app-client-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/colleen-capstone-client");
  };
  document.getElementById("amrapp-app-api-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/amrap-api-colleen");
  };
  document.getElementById("amrapp-app-page").onclick = function() {
    window.open("https://amrap-client-colleen.colleenhiggins87.now.sh/");
  };

  document.getElementById("sr-app-client-github").onclick = function() {
    window.open(
      "https://github.com/thinkful-ei-emu/spaced-repetition-MAC-client"
    );
  };
  document.getElementById("sr-app-api-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/spaced-repetition-MAC-api");
  };
  document.getElementById("sr-app-page").onclick = function() {
    window.open("https://spaced-repetition.mac-thinkful.now.sh/");
  };
  document.getElementById("st-app-client-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/RAMbo-tracker-client");
  };
  document.getElementById("st-app-api-github").onclick = function() {
    window.open("https://github.com/thinkful-ei-emu/RAMbo-tracker-Server");
  };
  document.getElementById("st-app-page").onclick = function() {
    window.open("https://symptomtracker.rambo.now.sh/");
  };
}
