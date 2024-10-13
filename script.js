const quotes = [
    {
        text: "장미 꽃을 사랑하는 사람은 그 가시도 감내한다.",
        author: "튀르키예 속담"
    },
    {
        text: "미래를 신뢰하지 마라. 죽은 과거를 묻어 버려라. 그리고 살아 있는 현재에 행동해라.",
        author: "Henry W. Longfellow"
    },
    {
        text: "겁쟁이는 죽음에 앞서 여러 번 죽지만, 용기 있는 자는 한 번밖에 죽지 않는다.",
        author: "William Shakespeare"
    },
    {
        text: "지킬 수 없는 약속보다는 당장의 거절이 낫다.",
        author: "덴마크 속담"
    },
    {
        text: "최악이라고 말할 수 있는 동안은 아직 진짜 최악은 아니다.",
        author: "William Shakespeare"
    },
    {
        text: "간단함이 훌륭함의 열쇠다.",
        author: "이소룡"
    },
    {
        text: "가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
        author: "자크베니뉴 보쉬에"
    },
    {
        text: "군자의 복수는 10년이 걸려도 늦지 않다.",
        author: "중국 격언"
    }
];

let currentIndex = 0;

function nextQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    quoteElement.style.opacity = 0; // 명언 사라짐
    authorElement.style.opacity = 0; // 저자 사라짐

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % quotes.length; // 인덱스 증가
        quoteElement.innerText = quotes[currentIndex].text; // 새로운 명언 설정
        authorElement.innerText = quotes[currentIndex].author; // 새로운 저자 설정
        quoteElement.style.opacity = 1; // 명언 나타남
        authorElement.style.opacity = 1; // 저자 나타남
    }, 500); // 사라진 후 0.5초 대기
}
