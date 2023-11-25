const quizData = [
    {
        question: "What does the acronym C stand for in C programming?",
        options: ["Computer",
            "Compiled",
            "Central",
            "None of the above",],
        correct: 3
    },
    {
        question: "Which header file is used for variable list argument (...) in C?",
        options: ["<stdio.h>",
            "<stdlib.h>",
            "<stdarg.h>",
            "<string.h>",],
        correct: 2
    },
    {
        question: "How do you declare a constant in C?",
        options: ["const",
            "constant",
            "fixed",
            "var",],
        correct: 0
    },
    {
        question: "What is the purpose of the sizeof operator in C?",
        options: ["Calculate size of a file",
            "Calculate size of a variable",
            "Calculate size of a function",
            "Calculate size of an array",],
        correct: 1
    },
    {
        question: "What does the given declaration indicate in C? int x:8;",
        options: ["x store a value of 8",
            "x is an 8-bit integer",
            "x assigned with value 8",
            "Both A and C",],
        correct: 1
    },
    {
        question: "Which of the following is not a type of controlling expression of a switch statement in C?",
        options: ["char",
            "int",
            "float",
            "short",],
        correct: 2
    },
    {
        question: "What is the purpose of the strcpy function in C?",
        options: ["Compare two strings",
            "Concatenate two strings",
            "Copy one string to another",
            "Find the length of a string",],
        correct: 2
    },
    {
        question: "How do you open a file in C for writing?",
        options: ["fopen(file.txt, r)",
            "fopen(file.txt, w)",
            "open(file.txt, write)",
            "open(file.txt, read)",],
        correct: 1
    },
    {
        question: "What is the purpose of the scanf function in C?",
        options: ["Print formatted output",
            "Read formatted input",
            "Scan for errors",
            "Scan for memory leaks",],
        correct: 1
    },
    {
        question: "What is the range of the value that can be stored by int datatype in C?",
        options: ["-(2^31) to (2^31)-1",
            "-256 to 255",
            "-(2^63) to (2^63)-1",
            "0 to (2^31)-1",],
        correct: 0
    },
    {
        question: "What is the purpose of the break statement in C?",
        options: ["Exit the loop",
            "Skip the current iteration",
            "Continue to the next iteration",
            "Terminate the program",],
        correct: 0
    },
    {
        question: "Which data structure is used to handle recursion in C?",
        options: ["Queue",
            "Stack",
            "Deque",
            "Trees",],
        correct: 1
    },
    {
        question: "Why does the index of an array start with 0 in C?",
        options: ["array is releted to pointer",
            "name of array store the base address",
            "both B and C",
            "None of the above",],
        correct: 2
    },
    {
        question: "Which of the following is the proper syntex for declaring macros in C?",
        options: ["#define || long long",
            "#define long long ||",
            "#define ||",
            "#define long long",],
        correct: 0
    },
    {
        question: "What is the purpose of the #include directive in C?",
        options: ["Define a macro",
            "Include a file",
            "Import a library",
            "Declare a variable",],
        correct: 1
    },
    {
        question: "Which function is used to compare two strings in C?",
        options: ["strcmp",
            "strcompare",
            "compare",
            "stringcmp",],
        correct: 0
    },
    {
        question: "How do you pass an array to a function in C?",
        options: ["As a pointer",
            "As a value",
            "As a reference",
            "As a string",],
        correct: 0
    },
    {
        question: "What is the purpose of the typedef keyword in C?",
        options: ["Define a alternative name for primitive data type",
            "Declare a variable",
            "Typecast a variable",
            "Include a library",],
        correct: 0
    },
    {
        question: "Which loop is used for traversal of circular linked list in C?",
        options: ["for loop",
            "while loop",
            "do-while loop",
            "infinite loop",],
        correct: 2
    },
    {
        question: "What is the purpose of the union keyword in C?",
        options: ["Combine multiple variables",
            "Define a structure",
            "Declare a constant",
            "Allocate memory",],
        correct: 0
    }
];

// javascript
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .optiion_2, .option_3, .option_4"
);
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// load quiz
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `score: ${score}/${quizData.length * 5} __________________________ question: ${(currentQuiz + 1)}/20`;
    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};
loadQuiz();
// get selected answer function on button click
let curElem;
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};
const deselectdAnswer = () => {
    return answerElm.forEach((curElem) => (curElem.checked = false));
};
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 5;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectdAnswer();
        loadQuiz();
    } else {
        localStorage.setItem('score', score);
        quiz.innerHTML = `
        <div class="result">
            <h2> Your Score: ${score}/${quizData.length * 5}</h2>
            <p>Congratulations on completing the quiz! </p>
            <p>Your recent scored is Saved!</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
            <button type="button" class="button" ><a href="index.html">Login again</a></button>
        </div>
        `;
        // alert('Your scored is Saved!');
    }
});
