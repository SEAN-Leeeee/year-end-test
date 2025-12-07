// 유형 점수 객체 (간단한 데이터 모델)
const typeScores = {
    alone: 0,
    couple: 0,
    family: 0
};

// 유형별 결과 메시지 (객체로 관리 → 나중에 확장 쉬움)
const typeResults = {
    alone: {
        title: "혼자 있는 시간을 사랑하는 타입",
        desc: "조용히 나를 돌아보고, 생각을 정리하는 시간이 가장 소중한 타입입니다.",
        product: "📌 추천: 혼자 집중할 수 있는 노트, 다이어리, 노이즈 캔슬링 헤드폰 같은 제품이 잘 맞을 것 같습니다."
    },
    couple: {
        title: "연인과의 순간을 중시하는 타입",
        desc: "사랑하는 사람과의 추억과 감정을 가장 중요하게 여기는 타입입니다.",
        product: "📌 추천: 커플 여행 패키지, 둘이 함께 할 수 있는 보드게임, 무드 좋은 캔들 같은 제품을 사용해 보시는 걸 추천드립니다."
    },
    family: {
        title: "가족과 함께하는 시간을 소중히 여기는 타입",
        desc: "따뜻한 집, 편안한 대화, 함께 웃는 시간을 무엇보다 값지게 생각하는 타입입니다.",
        product: "📌 추천: 가족이 함께 즐길 수 있는 보드게임, 홈파티 세트, 따뜻한 담요나 쿠션 같은 제품이 잘 어울립니다."
    }
};

const form = document.getElementById("quiz-form");
const resultBox = document.getElementById("result");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultProduct = document.getElementById("result-product");
const retryBtn = document.getElementById("retry-btn");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 실제 제출 막기

    // 점수 초기화
    typeScores.alone = 0;
    typeScores.couple = 0;
    typeScores.family = 0;

    // 각 질문의 선택 값 읽기
    const q1 = form.elements["q1"].value;
    const q2 = form.elements["q2"].value;
    const q3 = form.elements["q3"].value;

    // 필수 체크
    if (!q1 || !q2 || !q3) {
        alert("모든 문항에 답변해 주세요.");
        return;
    }

    // 선택된 유형에 점수 +1
    [q1, q2, q3].forEach(type => {
        typeScores[type] += 1;
    });

    // 최종 유형 계산
    const finalType = getFinalType(typeScores);
    const finalResult = typeResults[finalType];

    // 결과 출력
    resultTitle.textContent = finalResult.title;
    resultDesc.textContent = finalResult.desc;
    resultProduct.textContent = finalResult.product;

    resultBox.classList.remove("hidden");
});

// 점수가 가장 높은 유형 찾기 (객체지향적인 '책임' 관점의 함수)
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

// 다시하기
retryBtn.addEventListener("click", function () {
    form.reset();
    resultBox.classList.add("hidden");
});
