/*disable eslint*/
/*use global $*/
function main (){
  document.getElementById('quiz-app-github').onclick = function () {
    location.href = 'https://github.com/thinkful-ei-emu/ex-module2-blake-colleen';
  };

  document.getElementById('quiz-app-page').onclick = function () {
    location.href = 'https://coggins87.github.io/quizapp/';
  };
}


$(main);