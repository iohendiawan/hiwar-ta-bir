const questions = [
    {
        question: "السلام عليكم ورحمة الله و...",
        options: {
            "a": "وبركاته",
            "b": "صباح الخير",
            "c": "مساء النور",
            "d": "مع السلامة"
        },
        answer: "a"
    },
    {
        question: "متى تستيقظ من النوم؟ أستيقظ...",
        options: {
            "a": "في الصباح المبكر",
            "b": "في المدرسة",
            "c": "بالسيارة",
            "d": "في المكتبة"
        },
        answer: "a"
    },
    {
        question: "ماذا تشرب في الصباح؟ أشرب...",
        options: {
            "a": "الخبز",
            "b": "الحليب",
            "c": "التفاح",
            "d": "اللحم"
        },
        answer: "b"
    },
    {
        question: "كيف تذهب إلى الجامعة؟ أذهب...",
        options: {
            "a": "بالحافلة",
            "b": "في الحقيبة",
            "c": "بالقلم",
            "d": "في الكتاب"
        },
        answer: "a"
    },
    {
        question: "... تسكن؟ أسكن في الرياض.",
        options: {
            "a": "متى",
            "b": "كيف",
            "c": "أين",
            "d": "هل"
        },
        answer: "c"
    },
    {
        question: "ماذا يعمل أبوك؟ أبي...",
        options: {
            "a": "طبيب",
            "b": "مدرسة",
            "c": "طالبة",
            "d": "مستشفى"
        },
        answer: "a"
    },
    {
        question: "أين يصلي المسلمون؟ يصلون في...",
        options: {
            "a": "السوق",
            "b": "المسجد",
            "c": "الملعب",
            "d": "الحمام"
        },
        answer: "b"
    },
    {
        question: "ماذا تفعل في المكتبة؟ ... الكتب.",
        options: {
            "a": "آكل",
            "b": "ألعب",
            "c": "أقرأ",
            "d": "أنام"
        },
        answer: "c"
    },
    {
        question: "كيف الجو اليوم؟ الجو...",
        options: {
            "a": "حار جدا",
            "b": "لذيذ",
            "c": "مريض",
            "d": "سريع"
        },
        answer: "a"
    },
    {
        question: "هذا أخي، هو... في الجامعة.",
        options: {
            "a": "طالب",
            "b": "طالبة",
            "c": "طلاب",
            "d": "طالبات"
        },
        answer: "a"
    },
    {
        question: "من أين أنت؟ أنا من...",
        options: {
            "a": "مصر",
            "b": "مهندس",
            "c": "الجامعة",
            "d": "مريض"
        },
        answer: "a"
    },
    {
        question: "ما جنسيتك؟ أنا...",
        options: {
            "a": "باكستان",
            "b": "باكستاني",
            "c": "مدرسة",
            "d": "في باكستان"
        },
        answer: "b"
    },
    {
        question: "أين تدرس؟ أدرس في...",
        options: {
            "a": "السوق",
            "b": "المطعم",
            "c": "الجامعة",
            "d": "البيت"
        },
        answer: "c"
    },
    {
        question: "ماذا تأكل في الغداء؟ آكل...",
        options: {
            "a": "الماء",
            "b": "العصير",
            "c": "الدجاج",
            "d": "الشاي"
        },
        answer: "c"
    },
    {
        question: "كم أخاً لك؟ لي...",
        options: {
            "a": "ثلاثة إخوة",
            "b": "ثلاثة أخ",
            "c": "ثلاث إخوة",
            "d": "ثلاثة أخوات"
        },
        answer: "a"
    },
    {
        question: "بماذا تكتب؟ أكتب...",
        options: {
            "a": "بالقلم",
            "b": "في الدفتر",
            "c": "بالكتاب",
            "d": "على السبورة"
        },
        answer: "a"
    },
    {
        question: "أين تذهب في العطلة؟ أذهب إلى...",
        options: {
            "a": "القرية",
            "b": "المدرسة",
            "c": "الفصل",
            "d": "المكتب"
        },
        answer: "a"
    },
    {
        question: "متى تنام؟ أنام في...",
        options: {
            "a": "الليل",
            "b": "الصباح",
            "c": "النهار",
            "d": "الظهر"
        },
        answer: "a"
    },
    {
        question: "ماذا تقرأ؟ أقرأ...",
        options: {
            "a": "القرآن",
            "b": "الماء",
            "c": "التفاح",
            "d": "القميص"
        },
        answer: "a"
    },
    {
        question: "كيف حالك؟...",
        options: {
            "a": "بخير والحمد لله",
            "b": "أنا طالب",
            "c": "اسمي أحمد",
            "d": "عمري عشرون"
        },
        answer: "a"
    }
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionsNum = document.getElementById('total-questions-num');

const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const scoreCircle = document.querySelector('.score-circle');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsNum.innerText = questions.length;
    quizArea.classList.add('active');
    resultArea.classList.remove('active');
    loadQuestion();
}

function loadQuestion() {
    selectedOption = null;
    nextBtn.disabled = true;
    
    const currentQ = questions[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    currentQuestionNum.innerText = currentQuestionIndex + 1;
    
    // Update Progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    
    const letters = ['a', 'b', 'c', 'd'];
    const arabicLetters = ['أ', 'ب', 'ج', 'د'];
    
    letters.forEach((key, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.dataset.key = key;
        optionDiv.innerHTML = `<strong>${arabicLetters[index]} - </strong> &nbsp; ${currentQ.options[key]}`;
        
        optionDiv.addEventListener('click', () => selectOption(optionDiv, key));
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(optionElement, key) {
    if (selectedOption) return; // Prevent multiple selections
    
    selectedOption = key;
    nextBtn.disabled = false;
    
    const currentQ = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.style.pointerEvents = 'none'; // Disable further clicks
        if (opt.dataset.key === currentQ.answer) {
            opt.classList.add('correct');
        } else if (opt === optionElement) {
            opt.classList.add('wrong');
        }
    });

    if (key === currentQ.answer) {
        score++;
    }
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerText = 'إظهار النتيجة';
    } else {
        nextBtn.innerText = 'التالي';
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizArea.classList.remove('active');
    resultArea.classList.add('active');
    
    // Update Progress to 100%
    progressBar.style.width = '100%';
    
    scoreText.innerText = `${score}/${questions.length}`;
    
    const percentage = (score / questions.length) * 100;
    scoreCircle.style.background = `conic-gradient(var(--primary-color) ${percentage}%, #e5e7eb 0%)`;
    
    if (percentage === 100) {
        feedbackText.innerText = "ممتاز! إجابات مثالية.";
        feedbackText.style.color = "var(--success-color)";
    } else if (percentage >= 70) {
        feedbackText.innerText = "جيد جداً! استمر في التعلم.";
        feedbackText.style.color = "var(--primary-color)";
    } else if (percentage >= 50) {
        feedbackText.innerText = "مقبول، لكن يمكنك أداء أفضل.";
        feedbackText.style.color = "var(--secondary-color)";
    } else {
        feedbackText.innerText = "تحتاج إلى مزيد من المراجعة.";
        feedbackText.style.color = "var(--error-color)";
    }
}

restartBtn.addEventListener('click', initQuiz);

// Start Quiz
initQuiz();
