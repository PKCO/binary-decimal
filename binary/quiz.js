const questions = [
    {
    question: "What is the binary equivalent of the decimal number 5?",
    options: ["101", "110", "111"],
    answer: "101"
    },
    {
    question: "What is the decimal equivalent of the binary number 1010?",
    options: ["9", "10", "11"],
    answer: "10"
    },
    {
    question: "Convert binary 1111 to decimal.",
    options: ["15", "14", "16"],
    answer: "15"
    },
    {
    question: "Convert decimal 8 to binary.",
    options: ["1000", "1100", "1010"],
    answer: "1000"
    },
    {
    question: "What is the binary equivalent of the decimal number 12?",
    options: ["1100", "1110", "1001"],
    answer: "1100"
    },
    {
    question: "Convert binary 1011 to decimal.",
    options: ["11", "12", "13"],
    answer: "11"
    },
    {
    question: "What is the decimal equivalent of binary 1101?",
    options: ["12", "13", "14"],
    answer: "13"
    }
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;
    let missedQuestions = [];
    
    // Shuffle questions to randomize
    const shuffleQuestions = () => questions.sort(() => 0.5 - Math.random());
    
    const loadQuestions = () => {
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    
    // Load 3 questions per page
    for (let i = currentQuestionIndex; i < currentQuestionIndex + 3 && i < questions.length; i++) {
    const currentQuestion = questions[i];
    const questionElem = document.createElement("p");
    questionElem.textContent = `${i + 1}. ${currentQuestion.question}`;
    
    const optionsElem = document.createElement("div");
    currentQuestion.options.forEach(option => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${i}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    optionsElem.appendChild(label);
    optionsElem.appendChild(document.createElement("br"));
    });
    
    container.appendChild(questionElem);
    container.appendChild(optionsElem);
    }
    };
    
    // Calculate score and track missed questions
    const calculateScore = () => {
    for (let i = currentQuestionIndex; i < currentQuestionIndex + 3 && i < questions.length; i++) {
    const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
    if (selectedOption && selectedOption.value === questions[i].answer) {
    score++;
    } else {
    missedQuestions.push(i); // Add index of missed question
    }
    }
    };
    
    // On form submit
    document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    calculateScore();
    
    if (currentQuestionIndex + 3 < questions.length) {
    currentQuestionIndex += 3;
    loadQuestions();
    } else {
    // Redirect to feedback.html with query parameters
    const feedbackUrl = `feedback.html?score=${score}&missedQuestions=${missedQuestions.join(",")}`;
    window.location.href = feedbackUrl;
    }
    });
    
    // Initialize the quiz
    shuffleQuestions();
    loadQuestions();
    