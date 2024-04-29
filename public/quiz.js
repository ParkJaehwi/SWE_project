const article = document.getElementById("article"); //본문영역
const test_area = document.getElementById("test_area"); //문제가 나오는 영역
const start_btn = document.getElementById("start_btn"); //test 시작버튼
const reset_btn = document.getElementById("reset_btn"); //처음으로 버튼
const test_status = document.getElementById("test_status"); //진행도 영역 ex) 1/10

let test_score = {
  right: 0,
  wrong: 0,
};
let test_number = 0;
const test_question = [
  {
    question: "3대 영양소는 탄수화물, 단백질, 지방이다.",
    answer: true,
  },
  {
    question: "나트륨은 좋지 않기에 아예 섭취하지 않는 것이 좋다.",
    answer: false,
  },
  {
    question: "단백질을 과도하게 섭취하면 지방으로 변환된다.",
    answer: true,
  },
  {
    question: "가슴근육은 팔의 이두 근육에 붙어있다.",
    answer: true,
  },
  {
    question: "우리 몸의 이두는 2가지로 나누어져 있고, 삼두는 3가지로 나누어져 있다.",
    answer: true,
  },
  {
    question: "우리 몸의 가장 큰 근육은 등 근육이다.",
    answer: false,
  },
  {
    question: "단백질파우더(프로틴)을 섭취하면 통풍이 온다",
    answer: false,
  },
  {
    question: "건강한 식단을 해야하는 이유는 손상된 근육의 빠른 회복을 도와 근성장이 일어나도록 하기 위함이다.",
    answer: true,
  },
  {
    question: "데드리프트는 등운동이다.",
    answer: false,
  },
  {
    question: "3대 운동은 몸의 협응근의 발달을 도와 부상 발생의 위험도를 낮춰준다.",
    answer: true,
  },
];

function showTest(test_number) {
  //문제와 OX버튼 출력 함수
  if (test_number < 10) {
    test_area.innerHTML = `
    <div id = "test_question">${test_number + 1}. ${test_question[test_number].question}</div>
    <button id = "oButton" class = "oxButton">O</button>
    <button id = "xButton" class = "oxButton">X</button>
    `;
    test_status.innerText = `${test_number + 1}/10`;
    console.log(test_number);
  }

  if (test_number > 9) {
    console.log(test_number);

    test_area.innerHTML = `
    <div id = "test_question">
      
      <p>
        맞은개수: ${test_score.right}<br>
        틀린개수: ${test_score.wrong}
      </p>
      <br>
      당신의 점수는? ${test_score.right * 10}점!
    </div>
    `; //문제나오는곳 초기화
    test_status.innerText = ``;
    reset_btn.classList.remove("hide");
  }
}

// function resetTest() {
//   article.innerHTML = `
//   <button id="start_btn">시작하기</button>
//   `;
// }

start_btn.addEventListener("click", () => {
  //시작하기 버튼 누르면 문제 보여주는 함수
  start_btn.classList.add("hide");
  showTest(test_number);
});

document.addEventListener("click", (event) => {
  //OX버튼을 누르면 다음 문제로 넘어감
  if (event.target.id === "oButton" || event.target.id === "xButton") {
    test_number++;
    showTest(test_number);
    if (event.target.id === "oButton") {
      console.log("oclick");
    } else {
      console.log("xclick");
    }
  }
});

reset_btn.addEventListener("click", () => {
  reset_btn.classList.add("hide");
  start_btn.classList.remove("hide");
  test_area.innerText = ""; //점수현황 초기화
  test_number = 0; //문제번호 초기화
});
