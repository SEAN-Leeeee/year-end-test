const questions = [
    {
        id: 1,
        text: "연말에 가장 떠오르는 장면은?",
        options: [
            { label: "조용한 방에서 혼자 영화 보기", type: "alone" },
            { label: "연인과 함께 야경 보며 산책하기", type: "couple" },
            { label: "가족들과 거실에서 다 같이 이야기 나누기", type: "family" }
        ]
    },
    {
        id: 2,
        text: "연말에 가장 중요하게 느껴지는 것은?",
        options: [
            { label: "올해를 혼자 조용히 정리하는 시간", type: "alone" },
            { label: "사랑하는 사람과의 추억 만들기", type: "couple" },
            { label: "가족과 함께하는 따뜻한 식사", type: "family" }
        ]
    },
    {
        id: 3,
        text: "올해 마지막 날, 가장 하고 싶은 일은?",
        options: [
            { label: "혼자 카페에서 다이어리 쓰기", type: "alone" },
            { label: "연인과 함께 작은 파티 즐기기", type: "couple" },
            { label: "가족과 집에서 함께 TV 보며 새해 맞이", type: "family" }
        ]
    }
];

const typeScores = {
    alone: 0,
    couple: 0,
    family: 0
};

const typeResults = {
    alone: {
        title: "혼자 있는 시간을 사랑하는 꿀단지!",
        desc: "조용히 나를 돌아보고, 생각을 정리하는 시간이 가장 소중한 타입입니다.",
        product: "📌 추천: 온전한 나만의 한 해를 돌아보고 정리할 수 있는 \"나의한해지도\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705",
        url1Text: "나의한해지도 구매하러 가기",
        url2: null,
        url2Text: null
    },
    couple: {
        title: "연인과의 순간을 중시하는 꿀단지!",
        desc: "사랑하는 사람과의 추억과 감정을 가장 중요하게 여기는 타입입니다.",
        product: "📌 추천: 연인과 함께한 한 해를 돌아볼 수 있는 \"나의한해지도\", 크리스마스를 특별하게 만들어줄 \"커플대화키트\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705", // 나의한해지도
        url1Text: "나의한해지도 구매하러 가기",
        url2: "https://m.smartstore.naver.com/ggulcha/products/11563138852", // 커플대화키트
        url2Text: "커플대화키트 구매하러 가기"
    },
    family: {
        title: "가족과 함께하는 시간을 소중히 여기는 꿀단지!",
        desc: "따뜻한 집, 편안한 대화, 함께 웃는 시간을 무엇보다 값지게 생각하는 타입입니다.",
        product: "📌 추천: 온 가족이 함께 한 해를 돌아볼 수 있는 \"나의한해지도\", 크리스마스를 더욱 따뜻하게 만들어줄 \"가족대화키트\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705", // 나의한해지도
        url1Text: "나의한해지도 구매하러 가기",
        url2: "https://m.smartstore.naver.com/ggulcha/products/11755222317", // 가족대화키트
        url2Text: "가족대화키트 구매하러 가기"
    }
};

const questionTitleEl = document.getElementById("question-title");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const subtitle = document.getElementById("subtitle");

const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultProduct = document.getElementById("result-product");

const buyBtn1 = document.getElementById("buy-btn-1");
const buyBtn2 = document.getElementById("buy-btn-2");

const questionBox = document.getElementById("question-box");
const mainTitle = document.getElementById("main-title");
let currentIndex = 0; // 현재 몇 번째 질문인지

renderQuestion();

function renderQuestion() {
    if (currentIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentIndex];

    // 진행도 표시 (예: 2 / 3)
    progressEl.textContent = (currentIndex + 1) + " / " + questions.length;

    // 질문 텍스트
    questionTitleEl.textContent = "Q" + (currentIndex + 1) + ". " + currentQuestion.text;

    // 이전 옵션들 비우기
    optionsEl.innerHTML = "";

    // 선택지 버튼 생성
    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option.label;

        btn.addEventListener("click", () => {
            handleOptionClick(option.type);
        });

        optionsEl.appendChild(btn);
    });

    resultBox.classList.add("hidden");
}

function handleOptionClick(selectedType) {
    typeScores[selectedType] += 1;

    currentIndex += 1;
    renderQuestion();
}

function showResult() {
    const finalType = getFinalType(typeScores);
    const finalResult = typeResults[finalType];

    console.log("최종 타입:", finalType, finalResult);

    resultTitle.textContent = finalResult.title;
    resultDesc.textContent = finalResult.desc;
    resultProduct.textContent = finalResult.product;

    if (finalResult.url1) {
        buyBtn1.href = finalResult.url1;
        buyBtn1.textContent = finalResult.url1Text || "지금 구매하러 가기!";
        buyBtn1.classList.remove("hidden");
    } else {
        buyBtn1.classList.add("hidden");
    }

    if (finalResult.url2) {
        buyBtn2.href = finalResult.url2;
        buyBtn2.textContent = finalResult.url2Text || "다른 상품 보러 가기";
        buyBtn2.classList.remove("hidden");
    } else {
        buyBtn2.classList.add("hidden");
    }

    resultBox.classList.remove("hidden");
    subtitle.classList.add("hidden");
    progressEl.classList.add("hidden");

    questionBox.classList.add("hidden");

    mainTitle.textContent = "꿀차맘대로 테스트 결과!";
}

function getFinalType(scores) {
    let maxType = "alone";
    let maxScore = scores.alone;

    Object.keys(scores).forEach(type => {
        if (scores[type] > maxScore) {
            maxType = type;
            maxScore = scores[type];
        }
    });

    return maxType;
}
