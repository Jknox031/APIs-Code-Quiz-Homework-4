(function(){
    // Functions
    function buildQuiz(){
     
      const output = [];
  
      
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // store choices
          const choices = [];
  
          
          for(letter in currentQuestion.choices){
  
            
            choices.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.choices[letter]}
              </label>`
            );
          }
  
          // add this question and its choices to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="choices"> ${choices.join("")} </div>
            </div>`
          );
        }
      );
  
     
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.choices');
  
      
      let numCorrect = 0;
  
     
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
          // color the choices green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // wrong or blanik
        else{
          // color red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct / total questions
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: {
        a:  "numbers and strings",
        b:  "other arrays",
        c:  "booleans",
        d:  "all of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "Who invented JavaScript?",
        choices: {
          a: "Brendan Eich",
          b: "Sheryl Sandberg",
          c: "Douglas Crockford"
        },
        correctAnswer: "a"
      },
      {
        question:
          "String values must be enclosed within ____ when being assigned to variables.",
        choices: {
          a: "commas",
          b: "curly brackets",
          c: "quotes",
          d: "parentheses"},
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        choices: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
      },
      
      {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: {
          a: "JavaScript",
          b: "console.log",
          c: "for loops",
          d: "terminal / bash"
        },
        correctAnswer: "b"
      }
      
    ];
  
    
    buildQuiz();
  
    
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show 
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  var count = 30;
  var interval = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
      clearInterval(interval);
      document.getElementById('count').innerHTML='Done';
      
      alert("You're out of time!");
    }
  }, 1000);

  
    