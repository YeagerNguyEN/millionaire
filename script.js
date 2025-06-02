document.addEventListener("DOMContentLoaded", () => {
  // --- KHAI BÁO BIẾN ---
  const questions = [
    {
      question: "Thủ đô của Việt Nam là gì?",
      answers: ["TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Hà Nội"],
      correct: 3,
    },
    {
      question: "Đâu là ngọn núi cao nhất Việt Nam?",
      answers: ["Pu Si Lung", "Fansipan", "Pu Ta Leng", "Bạch Mộc Lương Tử"],
      correct: 1,
    },
    {
      question: "Tác giả của 'Bình Ngô đại cáo' là ai?",
      answers: ["Nguyễn Trãi", "Nguyễn Du", "Hồ Xuân Hương", "Lê Lợi"],
      correct: 0,
    },
    {
      question: "Trong 12 con giáp, con gì đứng đầu tiên?",
      answers: ["Trâu", "Rồng", "Tý (Chuột)", "Hổ"],
      correct: 2,
    },
    {
      question: "Ai là người đầu tiên đặt chân lên mặt trăng?",
      answers: ["Yuri Gagarin", "Phạm Tuân", "Neil Armstrong", "Buzz Aldrin"],
      correct: 2,
    }, // Mốc 1
    {
      question: "Hành tinh nào gần Mặt Trời nhất?",
      answers: ["Sao Kim", "Sao Hỏa", "Sao Thủy", "Trái Đất"],
      correct: 2,
    },
    {
      question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
      answers: ["Wimbledon", "Roland Garros", "US Open", "Australian Open"],
      correct: 3,
    },
    {
      question: "Nền văn minh nào đã xây dựng nên Kim Tự Tháp Giza?",
      answers: ["La Mã", "Hy Lạp", "Lưỡng Hà", "Ai Cập cổ đại"],
      correct: 3,
    },
    {
      question: "Tác phẩm 'Mona Lisa' hiện đang được trưng bày ở bảo tàng nào?",
      answers: ["Prado", "Louvre", "British Museum", "Metropolitan"],
      correct: 1,
    },
    {
      question:
        "Vị vua nào của Việt Nam đã cho dời đô từ Hoa Lư về Thăng Long?",
      answers: [
        "Lê Đại Hành",
        "Đinh Tiên Hoàng",
        "Lý Thái Tổ",
        "Trần Thái Tông",
      ],
      correct: 2,
    }, // Mốc 2
    {
      question: "Đồng tiền chung của Liên Minh Châu Âu (EU) là gì?",
      answers: ["Pound", "Franc", "Euro", "Dollar"],
      correct: 2,
    },
    {
      question: "Ngôn ngữ lập trình nào được Brendan Eich tạo ra tại Netscape?",
      answers: ["Python", "Java", "C++", "JavaScript"],
      correct: 3,
    },
    {
      question: "Bộ phim nào đã giành giải 'Phim hay nhất' tại Oscar 2020?",
      answers: [
        "1917",
        "Joker",
        "Parasite (Ký sinh trùng)",
        "Once Upon a Time in Hollywood",
      ],
      correct: 2,
    },
    {
      question: "Nguyên tố hóa học có ký hiệu 'Au' là gì?",
      answers: ["Bạc", "Đồng", "Sắt", "Vàng"],
      correct: 3,
    },
    {
      question: "Trong thần thoại Hy Lạp, ai là vua của các vị thần?",
      answers: ["Apollo", "Poseidon", "Hades", "Zeus"],
      correct: 3,
    }, // Câu cuối
  ];

  const prizeMoney = [
    "200.000",
    "400.000",
    "600.000",
    "1.000.000",
    "2.000.000",
    "3.000.000",
    "6.000.000",
    "10.000.000",
    "14.000.000",
    "22.000.000",
    "30.000.000",
    "40.000.000",
    "60.000.000",
    "85.000.000",
    "150.000.000",
  ];

  let currentQuestionIndex = 0;
  let gameActive = false;
  let lifelines = {
    fiftyFifty: false,
    phone: false,
    audience: false,
  };

  // --- LẤY CÁC PHẦN TỬ DOM ---
  const questionTextEl = document.getElementById("question-text");
  const questionNumberEl = document.getElementById("question-number");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const prizeListEl = document.getElementById("prize-list");

  const startScreen = document.getElementById("start-screen");
  const startGameBtn = document.getElementById("start-game-btn");

  const modal = document.getElementById("game-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalActionBtn = document.getElementById("modal-action-btn");

  const lifeline5050Btn = document.getElementById("lifeline-5050");
  const lifelinePhoneBtn = document.getElementById("lifeline-phone");
  const lifelineAudienceBtn = document.getElementById("lifeline-audience");
  const walkAwayBtn = document.getElementById("walk-away-btn");

  // --- CÁC HÀM XỬ LÝ GAME ---

  function initPrizeList() {
    prizeListEl.innerHTML = "";
    prizeMoney.forEach((amount, index) => {
      const li = document.createElement("li");
      li.classList.add("prize-item");
      if ((index + 1) % 5 === 0) {
        li.classList.add("milestone");
      }
      li.dataset.level = index;
      li.innerHTML = `<span class="prize-number">${
        15 - index
      }</span> <span class="prize-amount">${amount} VNĐ</span>`;
      prizeListEl.appendChild(li);
    });
  }

  function updatePrizeHighlight() {
    document.querySelectorAll(".prize-item").forEach((item) => {
      item.classList.remove("current");
    });
    const currentPrizeItem = document.querySelector(
      `.prize-item[data-level="${14 - currentQuestionIndex}"]`
    );
    if (currentPrizeItem) {
      currentPrizeItem.classList.add("current");
    }
  }

  function startGame() {
    currentQuestionIndex = 0;
    gameActive = true;
    lifelines = { fiftyFifty: false, phone: false, audience: false };
    updateLifelineButtons();
    startScreen.classList.remove("show");
    displayQuestion();
  }

  function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
      winGame();
      return;
    }

    resetAnswerButtons();
    const q = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Câu ${currentQuestionIndex + 1}:`;
    questionTextEl.textContent = q.question;

    answerButtons.forEach((btn, index) => {
      btn.querySelector(".answer-text").textContent = q.answers[index];
      btn.disabled = false;
      btn.style.display = "block";
    });

    updatePrizeHighlight();
  }

  function resetAnswerButtons() {
    answerButtons.forEach((btn) => {
      btn.className = "answer-btn";
    });
  }

  function selectAnswer(e) {
    if (!gameActive) return;

    const selectedBtn = e.currentTarget;
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const correctIndex = questions[currentQuestionIndex].correct;

    gameActive = false; // Ngăn chặn các click khác
    selectedBtn.classList.add("selected");

    setTimeout(() => {
      if (selectedIndex === correctIndex) {
        selectedBtn.classList.remove("selected");
        selectedBtn.classList.add("correct");
        setTimeout(correctAnswer, 2000);
      } else {
        selectedBtn.classList.remove("selected");
        selectedBtn.classList.add("incorrect");
        answerButtons[correctIndex].classList.add("correct");
        setTimeout(gameOver, 2000);
      }
    }, 3000);
  }

  function correctAnswer() {
    currentQuestionIndex++;
    gameActive = true;
    displayQuestion();
  }

  function getSafePrize() {
    if (currentQuestionIndex >= 10) return prizeMoney[9]; // Mốc 22.000.000
    if (currentQuestionIndex >= 5) return prizeMoney[4]; // Mốc 2.000.000
    return "0";
  }

  function gameOver() {
    const prizeWon = getSafePrize();
    modalTitle.textContent = "Thua cuộc!";
    modalBody.innerHTML = `<p>Rất tiếc, đó không phải là câu trả lời đúng.</p><p>Bạn ra về với giải thưởng là <strong>${prizeWon} VNĐ</strong>.</p>`;
    modalActionBtn.textContent = "Chơi lại";
    modalActionBtn.onclick = () => {
      modal.classList.remove("show");
      startGame();
    };
    modal.classList.add("show");
  }

  function winGame() {
    modalTitle.textContent = "XIN CHÚC MỪNG!";
    modalBody.innerHTML = `<p>Bạn đã trở thành TRIỆU PHÚ!</p><p>Bạn đã xuất sắc vượt qua 15 câu hỏi và giành được giải thưởng cao nhất:</p><h2>${prizeMoney[14]} VNĐ</h2>`;
    modalActionBtn.textContent = "Chơi lại";
    modalActionBtn.onclick = () => {
      modal.classList.remove("show");
      startGame();
    };
    modal.classList.add("show");
  }

  function walkAway() {
    const prizeWon =
      currentQuestionIndex > 0 ? prizeMoney[currentQuestionIndex - 1] : "0";
    modalTitle.textContent = "Dừng cuộc chơi";
    modalBody.innerHTML = `<p>Bạn đã chọn dừng cuộc chơi.</p><p>Bạn ra về với giải thưởng là <strong>${prizeWon} VNĐ</strong>.</p>`;
    modalActionBtn.textContent = "Chơi lại từ đầu";
    modalActionBtn.onclick = () => {
      modal.classList.remove("show");
      startGame();
    };
    modal.classList.add("show");
  }

  // --- HÀM XỬ LÝ TRỢ GIÚP ---

  function updateLifelineButtons() {
    lifeline5050Btn.disabled = lifelines.fiftyFifty;
    lifelinePhoneBtn.disabled = lifelines.phone;
    lifelineAudienceBtn.disabled = lifelines.audience;
    lifeline5050Btn.classList.toggle("used", lifelines.fiftyFifty);
    lifelinePhoneBtn.classList.toggle("used", lifelines.phone);
    lifelineAudienceBtn.classList.toggle("used", lifelines.audience);
  }

  function useFiftyFifty() {
    if (lifelines.fiftyFifty) return;
    lifelines.fiftyFifty = true;
    updateLifelineButtons();

    const correctIndex = questions[currentQuestionIndex].correct;
    let removedCount = 0;
    const indexesToRemove = [];
    while (removedCount < 2) {
      const randomIndex = Math.floor(Math.random() * 4);
      if (
        randomIndex !== correctIndex &&
        !indexesToRemove.includes(randomIndex)
      ) {
        indexesToRemove.push(randomIndex);
        removedCount++;
      }
    }

    indexesToRemove.forEach((index) => {
      answerButtons[index].style.display = "none";
    });
  }

  function usePhoneAFriend() {
    if (lifelines.phone) return;
    lifelines.phone = true;
    updateLifelineButtons();

    modalTitle.textContent = "Gọi điện thoại cho người thân";
    let timeLeft = 30;
    modalBody.innerHTML = `<p>Đang kết nối với chuyên gia...</p><div id="phone-timer">${timeLeft}</div>`;
    modalActionBtn.style.display = "none"; // Hide button during countdown
    modal.classList.add("show");

    const timer = setInterval(() => {
      timeLeft--;
      document.getElementById("phone-timer").textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        const correctIndex = questions[currentQuestionIndex].correct;
        const choices = ["A", "B", "C", "D"];
        // 80% chance of being correct
        const friendsAnswer =
          Math.random() < 0.8
            ? choices[correctIndex]
            : choices[Math.floor(Math.random() * 4)];
        modalBody.innerHTML += `<p>Chuyên gia nghĩ câu trả lời là <strong>${friendsAnswer}</strong>.</p>`;
        modalActionBtn.textContent = "Quay lại trò chơi";
        modalActionBtn.style.display = "block";
        modalActionBtn.onclick = () => modal.classList.remove("show");
      }
    }, 1000);
  }

  function useAskTheAudience() {
    if (lifelines.audience) return;
    lifelines.audience = true;
    updateLifelineButtons();

    const correctIndex = questions[currentQuestionIndex].correct;
    let percentages = [0, 0, 0, 0];
    let remaining = 100;

    // Give the correct answer a large chunk
    const correctPercent = 40 + Math.floor(Math.random() * 30); // 40-70%
    percentages[correctIndex] = correctPercent;
    remaining -= correctPercent;

    // Distribute the rest among others
    for (let i = 0; i < 3; i++) {
      const randomPercent = Math.floor(Math.random() * remaining);
      let index = (correctIndex + 1 + i) % 4;
      percentages[index] = randomPercent;
      remaining -= randomPercent;
    }
    percentages[percentages.indexOf(0)] += remaining; // Give remainder to one of the others

    modalTitle.textContent = "Hỏi ý kiến khán giả";
    modalBody.innerHTML = `
            <div class="audience-chart">
                ${percentages
                  .map(
                    (p, i) => `
                    <div class="audience-bar" style="height: ${p}%">
                        <span class="bar-percentage">${p}%</span>
                        <span class="bar-label">${
                          ["A", "B", "C", "D"][i]
                        }</span>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
    modalActionBtn.textContent = "Quay lại trò chơi";
    modalActionBtn.onclick = () => modal.classList.remove("show");
    modal.classList.add("show");
  }

  // --- GẮN SỰ KIỆN ---
  startGameBtn.addEventListener("click", startGame);
  answerButtons.forEach((btn) => btn.addEventListener("click", selectAnswer));

  lifeline5050Btn.addEventListener("click", useFiftyFifty);
  lifelinePhoneBtn.addEventListener("click", usePhoneAFriend);
  lifelineAudienceBtn.addEventListener("click", useAskTheAudience);
  walkAwayBtn.addEventListener("click", () => {
    if (gameActive) {
      walkAway();
    }
  });

  // --- KHỞI TẠO GAME ---
  initPrizeList();
});
