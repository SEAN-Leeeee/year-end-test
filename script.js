// 1. 질문 데이터 모델 (객체 배열)
const questions = [
    {
        id: 1,
        text: "연말이라고 하면 가장 떠오르는 장면은?",
        image: "img/pig2.png",              // 1번 이미지
        options: [
            { label: "조용한 방에서 혼자 영화 보기", type: "alone" },
            { label: "연인과 함께 야경 보며 산책하기", type: "couple" },
            { label: "가족들과 거실에서 다 같이 이야기 나누기", type: "family" }
        ]
    },
    {
        id: 2,
        text: "연말에 가장 중요하게 느껴지는 것은?",
        image: "img/ggulwoo.png",           // 2번 이미지
        options: [
            { label: "올해를 혼자 조용히 정리하는 시간", type: "alone" },
            { label: "사랑하는 사람과의 추억 만들기", type: "couple" },
            { label: "가족과 함께하는 따뜻한 식사", type: "family" }
        ]
    },
    {
        id: 3,
        text: "올해 마지막 날, 가장 하고 싶은 일은?",
        image: "img/simgak.png",            // 3번 이미지
        options: [
            { label: "혼자 카페에서 다이어리 쓰기", type: "alone" },
            { label: "연인과 함께 작은 파티 즐기기", type: "couple" },
            { label: "가족과 집에서 함께 TV 보며 새해 맞이", type: "family" }
        ]
    },
    {
        id: 4,
        text: "연말에 사진을 찍는다면 누구와 가장 많이 찍을 것 같나요?",
        image: "img/takeapic.png",          // 4번 이미지
        options: [
            { label: "셀카로 나만의 기록 남기기", type: "alone" },
            { label: "연인과 꽁냥꽁냥 커플샷 남기기", type: "couple" },
            { label: "가족 단체사진 꾸준히 찍기", type: "family" }
        ]
    },
    {
        id: 5,
        text: "연말 선물을 떠올리면 가장 먼저 생각나는 것은?",
        image: "img/present.png",           // 5번 이미지
        options: [
            { label: "나에게 주는 작은 선물", type: "alone" },
            { label: "연인에게 줄 깜짝 선물", type: "couple" },
            { label: "가족 모두가 함께 쓸 수 있는 선물", type: "family" }
        ]
    },
    {
        id: 6,
        text: "연말에 갑자기 하루 휴가가 생겼다면?",
        image: "img/ggulpig.png",           // 6번 이미지
        options: [
            { label: "집에서 혼자 푹 쉬고 혼밥하기", type: "alone" },
            { label: "연인과 근교로 짧은 여행 떠나기", type: "couple" },
            { label: "가족과 함께 근처 맛집 가기", type: "family" }
        ]
    }
];

// 2. 유형 점수 (상태)
const typeScores = {
    alone: 0,
    couple: 0,
    family: 0
};

// 3. 유형별 결과 + 상품 + 이미지 정보 (최대 2장)
const typeResults = {
    alone: {
        title: "혼자 있는 시간을 사랑하는 꿀단지!",
        desc: "조용히 나를 돌아보고, 생각을 정리하는 시간이 가장 소중한 타입입니다.",
        product: "📌 추천: 온전한 나만의 한 해를 돌아보고 정리할 수 있는 \"나의한해지도\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705",
        url1Text: "나의한해지도 구매하러 가기",
        url2: null,
        url2Text: null,
        image1: "img/fullYear.png",   // 1번 PNG
        image1Alt: "나의한해지도를 들고 있는 사람들",
        image2: null,
        image2Alt: null
    },
    couple: {
        title: "연인과의 순간을 중시하는 꿀단지!",
        desc: "사랑하는 사람과의 추억과 감정을 가장 중요하게 여기는 타입입니다.",
        product: "📌 추천: 연인과 함께한 한 해를 돌아볼 수 있는 \"나의한해지도\", 크리스마스를 특별하게 만들어줄 \"커플대화키트\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705", // 나의한해지도
        url1Text: "나의한해지도 구매하러 가기",
        url2: "https://m.smartstore.naver.com/ggulcha/products/11563138852", // 커플대화키트
        url2Text: "커플대화키트 구매하러 가기",
        image1: "img/fullYear.png",   // 1번 PNG
        image1Alt: "나의한해지도를 들고 있는 사람들",
        image2: "img/couple.png",     // 2번 PNG
        image2Alt: "커플대화키트 패키지"
    },
    family: {
        title: "가족과 함께하는 시간을 소중히 여기는 꿀단지!",
        desc: "따뜻한 집, 편안한 대화, 함께 웃는 시간을 무엇보다 값지게 생각하는 타입입니다.",
        product: "📌 추천: 온 가족이 함께 한 해를 돌아볼 수 있는 \"나의한해지도\", 크리스마스를 더욱 따뜻하게 만들어줄 \"가족대화키트\"",
        url1: "https://m.smartstore.naver.com/ggulcha/products/11227797705", // 나의한해지도
        url1Text: "나의한해지도 구매하러 가기",
        url2: "https://m.smartstore.naver.com/ggulcha/products/11755222317", // 가족대화키트
        url2Text: "가족대화키트 구매하러 가기",
        image1: "img/fullYear.png",   // 1번 PNG
        image1Alt: "나의한해지도를 들고 있는 사람들",
        image2: "img/family.png",     // 3번 PNG
        image2Alt: "꿀단지 가족활동지"
    }
};

// 4. DOM 요소 참조
const questionTitleEl = document.getElementById("question-title");
const questionImageEl = document.getElementById("question-image");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const subtitle = document.getElementById("subtitle");

const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultProduct = document.getElementById("result-product");
const resultImage1 = document.getElementById("result-image-1");
const resultImage2 = document.getElementById("result-image-2");

const buyBtn1 = document.getElementById("buy-btn-1");
const buyBtn2 = document.getElementById("buy-btn-2");

const questionBox = document.getElementById("question-box");
const mainTitle = document.getElementById("main-title");

const introBox = document.getElementById("intro-box");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let currentIndex = 0; // 현재 몇 번째 질문인지

// ===== 공통: 점수/상태 초기화 =====
function resetState() {
    typeScores.alone = 0;
    typeScores.couple = 0;
    typeScores.family = 0;
    currentIndex = 0;
}

// ===== 시작 화면 보여주기 =====
function showIntro() {
    resetState();

    mainTitle.textContent = "연말 성향 테스트";

    introBox.classList.remove("hidden");

    subtitle.classList.add("hidden");
    progressEl.classList.add("hidden");
    questionBox.classList.add("hidden");
    resultBox.classList.add("hidden");
}

// ===== 질문 화면으로 진입 =====
function startTest() {
    introBox.classList.add("hidden");

    subtitle.classList.remove("hidden");
    progressEl.classList.remove("hidden");
    questionBox.classList.remove("hidden");
    resultBox.classList.add("hidden");

    renderQuestion();
}

// 초기 진입 시: 시작 화면
showIntro();

// 시작하기 버튼 클릭
startBtn.addEventListener("click", startTest);

// 다시하기 버튼 클릭 → 시작 화면으로
restartBtn.addEventListener("click", showIntro);

// ===== 현재 질문 렌더링 함수 =====
function renderQuestion() {
    // 모든 질문을 다 답했으면 결과 화면으로
    if (currentIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentIndex];

    // 진행도 표시 (예: 2 / 6)
    progressEl.textContent = (currentIndex + 1) + " / " + questions.length;

    // 질문 텍스트
    questionTitleEl.textContent = "Q" + (currentIndex + 1) + ". " + currentQuestion.text;

    // 질문 이미지 세팅
    if (currentQuestion.image) {
        questionImageEl.src = currentQuestion.image;
        questionImageEl.classList.remove("hidden");
    } else {
        questionImageEl.classList.add("hidden");
    }

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

    // 질문 진행 중 상태 세팅
    resultBox.classList.add("hidden");
    subtitle.classList.remove("hidden");
    progressEl.classList.remove("hidden");
    questionBox.classList.remove("hidden");
    mainTitle.textContent = "연말 성향 테스트";
}

// ===== 선택지를 클릭했을 때 로직 =====
function handleOptionClick(selectedType) {
    // 선택된 유형 점수 +1
    typeScores[selectedType] += 1;

    // 다음 질문으로 이동
    currentIndex += 1;
    renderQuestion();
}

// ===== 최종 결과 계산 + 출력 =====
function showResult() {
    const finalType = getFinalType(typeScores);
    const finalResult = typeResults[finalType];

    console.log("최종 타입:", finalType, finalResult);

    resultTitle.textContent = finalResult.title;
    resultDesc.textContent = finalResult.desc;
    resultProduct.textContent = finalResult.product;

    // 1번 버튼 세팅
    if (finalResult.url1) {
        buyBtn1.href = finalResult.url1;
        buyBtn1.textContent = finalResult.url1Text || "지금 구매하러 가기!";
        buyBtn1.classList.remove("hidden");
    } else {
        buyBtn1.classList.add("hidden");
    }

    // 2번 버튼 세팅
    if (finalResult.url2) {
        buyBtn2.href = finalResult.url2;
        buyBtn2.textContent = finalResult.url2Text || "다른 상품 보러 가기";
        buyBtn2.classList.remove("hidden");
    } else {
        buyBtn2.classList.add("hidden");
    }

    // 타입별 이미지 1 세팅
    if (finalResult.image1) {
        resultImage1.src = finalResult.image1;
        resultImage1.alt = finalResult.image1Alt || finalResult.title;
        resultImage1.classList.remove("hidden");
    } else {
        resultImage1.classList.add("hidden");
    }

    // 타입별 이미지 2 세팅 (있을 때만)
    if (finalResult.image2) {
        resultImage2.src = finalResult.image2;
        resultImage2.alt = finalResult.image2Alt || finalResult.title;
        resultImage2.classList.remove("hidden");
    } else {
        resultImage2.classList.add("hidden");
    }

    // 결과 화면 상태 세팅
    resultBox.classList.remove("hidden");
    subtitle.classList.add("hidden");
    progressEl.classList.add("hidden");
    questionBox.classList.add("hidden");
    mainTitle.textContent = "꿀차맘대로 테스트 결과!";
}

// ===== 점수가 가장 높은 유형 찾기 (순수 로직) =====
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
