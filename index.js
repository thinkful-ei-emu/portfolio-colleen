/*disable eslint*/
/*use global $*/
function main (){
  document.getElementById('quiz-app-github').onclick = function () {
    location.href = 'https://github.com/thinkful-ei-emu/ex-module2-blake-colleen';
  };

  document.getElementById('quiz-app-page').onclick = function () {
    location.href = 'https://coggins87.github.io/quizapp/';
  };

  document.getElementById('amrapp-app-client-github').onclick = function () {
    location.href = 'https://github.com/thinkful-ei-emu/colleen-capstone-client';
  };
  document.getElementById('amrapp-app-api-github').onclick = function () {
    location.href = 'https://github.com/thinkful-ei-emu/amrap-api-colleen';
  };
  document.getElementById('amrapp-app-page').onclick = function () {
    location.href = 'https://amrap-client-colleen.colleenhiggins87.now.sh/';
  };

  
}


$(main);