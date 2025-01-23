const questions = [

    {
        question: "Which of this is an html element? ",

        options: ["cookie", "basket", "button"],

        answer: 2

    },


    {
        question: "what attribute is used for internal css? ",

        options: ["rel", "style", "href"],

        answer: 1

    },



    {
        question: " javascript deals with what part? ",

        options: ["function", "structure", "styling"],

        answer: 0

    },



    {
        question: "html is a what language? ",

        options: ["server", "style-sheet", "mark-up"],

        answer: 2

    },


    {
        question: " what property does color? ",

        options: ["color", "height", "width"],

        answer: 0

    },

    {
        question: " what property does color? ",

        options: ["color", "height", "width"],

        answer: 0

    },

    {
        question: " javascript deals with what part? ",

        options: ["function", "structure", "styling"],

        answer: 0

    },


]


    const homeCover = document.getElementById("home-cover");

    const startbtn = document.getElementById("start");

    const card = document.getElementById("card");

    const answerCover = document.querySelector(".answer-cover");

    const nextBtn = document.querySelector(".next");

    homeCover.style.display="none";


    // disable next button by default
    
    startbtn.addEventListener("click", function(){

        homeCover.style.display="none";

        card.style.display="block"

    });





    const textQuestion = document.querySelector(".text");

    let currentQuestionIndex = 0;
    let score = 0;
   


    function displayQuestions(){


        textQuestion.textContent = "";
        answerCover.innerHTML = "";

        let currentQuestion = questions[currentQuestionIndex];

        textQuestion.textContent = currentQuestion.question;


        document.querySelector("#current-question").textContent = currentQuestionIndex + 1;
        document.querySelector("#total-questions").textContent = questions.length;
    

        const options = currentQuestion.options.forEach((option, index) => {

            const optionBtn = document.createElement("div");
            optionBtn.className = "cover"

            const radio = document.createElement("input");
            radio.type = "radio"
            radio.className = "radio";

            const optionText = document.createElement("p");
            optionText.className = "text1";

            optionText.textContent = option;


            optionBtn.appendChild(radio);
            optionBtn.appendChild(optionText);
            optionBtn.onclick = ()=> selectAnswer(index);

            answerCover.appendChild(optionBtn);


            document.querySelector(".next").disabled=true;
           

        })

        
    }

    function selectAnswer(selectedAnswer) {

    
        let currentQuestion = questions[currentQuestionIndex];
        if(selectedAnswer === currentQuestion.answer){
            score++
        }


        document.querySelector(".next").disabled=false;

        

    }



    function displayNext() {

        currentQuestionIndex++;


        displayQuestions();

        
    }

    const resultCover = document.querySelector(".result-cover")

    nextBtn.onclick = () => {

        // if (displayNext() > questions.length) {
            

        //     resultCover.style.display= block;

        // }



        if( currentQuestionIndex == questions.length -1 ){
            card.style.display="none";
            resultCover.style.display="block";
        }

        displayNext()

    };
  
    window.onload = () => displayQuestions();



