const questions = [
    {
        question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        answer: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Silver", "Iron"],
        answer: 1
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        answer: 2
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "What language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: 1
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Brain", "Lungs", "Heart", "Kidneys"],
        answer: 2
    }
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';

    q.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="radio" name="option" value="${index}">
                ${option}
            </label>
        `;
        optionsEl.appendChild(li);
    });

    nextBtn.disabled = true;

    // Enable next button when an option is selected
    const radios = optionsEl.querySelectorAll('input[name="option"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            nextBtn.disabled = false;
        });
    });
}

nextBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    const answer = parseInt(selected.value);
    if (answer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = '';
        nextBtn.style.display = 'none';
        scoreEl.textContent = `Your Final Score: ${score} / ${questions.length}`;
    }
});

// Initial load
loadQuestion();
