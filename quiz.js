



const questions = [

    {
        question: "Which of these is an HTML element?",
        options: ["div", "img", "button"],
        answer: 1
    },

    {
        question: "What attribute is used for inline CSS?",
        options: ["rel", "style", "src"],
        answer: 1
    },

    {
        question: "JavaScript handles what part of a webpage?",
        options: ["function", "html", "css"],
        answer: 0
    },

    {
        question: "HTML is what type of language?",
        options: ["server", "css", "markup"],
        answer: 2
    },

    {
        question: "Which property sets text color in CSS?",
        options: ["color", "hight", "width"],
        answer: 0
    },

    {
        question: "Tag for ordered list?",
        options: ["ul", "ol", "li"],
        answer: 1
    },

    {
        question: "Which is NOT a JavaScript type?",
        options: ["string", "number", "element"],
        answer: 2
    },

    {
        question: "Which tag is used for images?",
        options: ["img", "pic", "src"],
        answer: 0
    },

    {
        question: "Which method adds an element in JS?",
        options: ["push", "add", "new"],
        answer: 0
    },

    {
        question: "What symbol is used for IDs in CSS?",
        options: ["#", ".", "*"],
        answer: 0
    },
];







    const homeCover = document.getElementById("home-cover");

    const startbtn = document.getElementById("start");

    const card = document.getElementById("card");


    // disable next button by default
    document.getElementById("next").disabled = true;



    startbtn.addEventListener("click", function(){

        homeCover.style.display="none";

        card.style.display="block"

    });
















    let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestions(){

        const text = document.querySelector(".text")
        const optionsCover = document.querySelector(".answer-cover")

        document.querySelector("#current-question").textContent = currentQuestionIndex + 1;
        document.querySelector("#total-questions").textContent = questions.length;


        document.querySelector("#current-question").textContent = currentQuestionIndex + 1;
        document.querySelector("#total-questions").textContent = questions.length;





        text.textContent= "";
        optionsCover.innerHTML= ""


        const currentQuestion = questions[currentQuestionIndex];
        text.textContent= currentQuestion.question;


        const options = currentQuestion.options.forEach((option, index) => {

            const optionBtn = document.createElement("div");

            optionBtn.className="cover"

            const radio = document.createElement("input");

            radio.type="radio";

            radio.className="radio";

            const optiontext = document.createElement("p");

            optiontext.className="text1";

            optiontext.textContent= option;

            

            optionBtn.appendChild(radio)

            optionBtn.appendChild(optiontext)

            optionBtn.onclick = () => {

                selectAnswer(index)

                radio.checked=true;

            };

            optionsCover.appendChild(optionBtn)

            optionsCover.addEventListener("click", (event)=>{

                if (event.target !== optionBtn) {
                    
                    radio.checked=false

                }

            })


        
        });


        function selectAnswer(selectedAnswer) {
            
                let currentQuestion = questions[currentQuestionIndex];
                
                if(selectedAnswer === currentQuestion.answer){
                    score++
                    
                }

                // console.log(score);

                document.getElementById("next").disabled = false;
        }



    }







    // Display next logic
    function displayNext(){

        const nextBtn = document.querySelector(".next");
       
        nextBtn.addEventListener("click", ()=>{

            

            
            currentQuestionIndex++

            

            if(currentQuestionIndex < questions.length){

                displayQuestions()

            }else {

                displayResult();

                currentQuestionIndex = 0;

                displayQuestions()

            }

            document.getElementById("next").disabled = true;



        })


       


     }





    function displayResult(){

        const resultPage = document.querySelector(".result-cover");

        resultPage.style.display="block"

        console.log(score);



        const number = document.querySelector(".number");

        const totals = document.querySelector(".totals");

        number.textContent="0" + score;

        totals.textContent="0" +  questions.length;


    }








   
    displayNext()



    displayQuestions()



    const returnBtn = document.querySelector("#return-btn");

    const resultCover = document.querySelector("#result-cover");

    returnBtn.addEventListener("click", ()=>{


        resultCover.style.display="none"

        homeCover.style.display="flex";

        score=0;



    });


 