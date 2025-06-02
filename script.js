document.addEventListener("DOMContentLoaded", () => {
  // --- NGÂN HÀNG CÂU HỎI LỚN ---
  // Bạn có thể thêm bao nhiêu câu hỏi tùy thích vào mỗi cấp độ
  const questionBank = {
    easy: [
      {
        question: "Thủ đô của Việt Nam là gì?",
        answers: ["TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Hà Nội"],
        correct: 3,
      },
      {
        question: "Đâu là con sông dài nhất Việt Nam?",
        answers: ["Sông Hồng", "Sông Cửu Long", "Sông Đồng Nai", "Sông Mã"],
        correct: 2,
      },
      {
        question: "Tác giả của 'Truyện Kiều' là ai?",
        answers: [
          "Hồ Xuân Hương",
          "Nguyễn Du",
          "Nguyễn Trãi",
          "Bà Huyện Thanh Quan",
        ],
        correct: 1,
      },
      {
        question: "Màu sắc chủ đạo trên lá cờ Việt Nam là gì?",
        answers: ["Xanh và Vàng", "Đỏ và Vàng", "Đỏ và Xanh", "Trắng và Đỏ"],
        correct: 1,
      },
      {
        question: "Món ăn nào là đặc sản nổi tiếng của Hà Nội?",
        answers: ["Bún Bò Huế", "Hủ tiếu", "Phở", "Mì Quảng"],
        correct: 2,
      },
      {
        question: "Trong 12 con giáp, con gì đứng cuối cùng?",
        answers: ["Dậu (Gà)", "Tuất (Chó)", "Hợi (Lợn)", "Mùi (Dê)"],
        correct: 2,
      },
      {
        question: "Ngày Quốc Khánh của Việt Nam là ngày nào?",
        answers: ["30/4", "1/5", "2/9", "19/8"],
        correct: 2,
      },
      {
        question:
          "Tỉnh nào của Việt Nam được mệnh danh là 'Thành phố ngàn hoa'?",
        answers: ["Nha Trang", "Đà Lạt", "Sa Pa", "Hạ Long"],
        correct: 1,
      },
    ],
    medium: [
      {
        question: "Đâu là ngọn núi cao nhất Việt Nam?",
        answers: ["Pu Si Lung", "Fansipan", "Pu Ta Leng", "Bạch Mộc Lương Tử"],
        correct: 1,
      },
      {
        question: "Ai là người đầu tiên đặt chân lên mặt trăng?",
        answers: ["Yuri Gagarin", "Phạm Tuân", "Neil Armstrong", "Buzz Aldrin"],
        correct: 2,
      },
      {
        question: "Quốc gia nào có diện tích lớn nhất thế giới?",
        answers: ["Canada", "Trung Quốc", "Hoa Kỳ", "Nga"],
        correct: 3,
      },
      {
        question: "Trong hóa học, nước có công thức hóa học là gì?",
        answers: ["HO2", "H2O", "CO2", "O2"],
        correct: 1,
      },
      {
        question: "Bức họa 'Mona Lisa' là tác phẩm của họa sĩ nào?",
        answers: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correct: 1,
      },
      {
        question: "Hệ điều hành Android được phát triển bởi công ty nào?",
        answers: ["Apple", "Microsoft", "Amazon", "Google"],
        correct: 3,
      },
      {
        question:
          "Thành phố nào của Nhật Bản đã bị ném bom nguyên tử trong Thế chiến II?",
        answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        correct: 3,
      },
      {
        question:
          "Vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên Thế giới mấy lần?",
        answers: ["1 lần", "2 lần", "3 lần", "4 lần"],
        correct: 1,
      },
    ],
    hard: [
      {
        question: "Nhà vật lý nào đã phát triển Thuyết tương đối rộng?",
        answers: [
          "Isaac Newton",
          "Galileo Galilei",
          "Albert Einstein",
          "Niels Bohr",
        ],
        correct: 2,
      },
      {
        question: "Giải thưởng Fields được trao cho lĩnh vực nào?",
        answers: ["Vật lý", "Hóa học", "Y học", "Toán học"],
        correct: 3,
      },
      {
        question: "Ai là tác giả của bộ tiểu thuyết 'Chiến tranh và Hòa bình'?",
        answers: [
          "Fyodor Dostoevsky",
          "Anton Chekhov",
          "Leo Tolstoy",
          "Alexander Pushkin",
        ],
        correct: 2,
      },
      {
        question:
          "Trong vũ trụ, 'Lỗ đen' (Black Hole) được hình thành từ sự suy sụp của cái gì?",
        answers: [
          "Một hành tinh",
          "Một ngôi sao khối lượng lớn",
          "Một thiên thạch",
          "Một đám mây khí",
        ],
        correct: 1,
      },
      {
        question: "Ngôn ngữ lập trình Python được đặt tên theo cái gì?",
        answers: [
          "Một loài rắn",
          "Một chương trình TV",
          "Tên của người tạo ra nó",
          "Một ngọn núi",
        ],
        correct: 1,
      },
      {
        question:
          "Sự kiện nào được xem là đã châm ngòi cho Chiến tranh thế giới thứ nhất?",
        answers: [
          "Trận Trân Châu Cảng",
          "Vụ ám sát thái tử Áo-Hung",
          "Đức xâm lược Ba Lan",
          "Cách mạng tháng Mười Nga",
        ],
        correct: 1,
      },
      {
        question:
          "Thành Cổ Loa, kinh đô của nhà nước Âu Lạc, gắn liền với truyền thuyết về vị vua nào?",
        answers: [
          "Lạc Long Quân",
          "Vua Hùng",
          "An Dương Vương",
          "Hai Bà Trưng",
        ],
        correct: 2,
      },
      {
        question:
          "Bộ phim nào của Việt Nam lần đầu tiên được đề cử giải Oscar cho Phim quốc tế hay nhất?",
        answers: ["Hai Phượng", "Mắt Biếc", "Bố Già", "Mùi Đu Đủ Xanh"],
        correct: 3,
      },
    ],
  };

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

  const sounds = {
    letsPlay: new Audio("sounds/lets-play.mp3"),
    correct: new Audio("sounds/correct.mp3"),
    incorrect: new Audio("sounds/incorrect.mp3"),
    suspense: new Audio("sounds/suspense.mp3"),
    win: new Audio("sounds/win.mp3"),
  };
  sounds.suspense.loop = true;

  let currentGameQuestions = [];
  let currentQuestionIndex = 0;
  let gameActive = false;
  let lifelines = { fiftyFifty: false, phone: false, audience: false };

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

  function stopAllSounds() {
    for (const sound in sounds) {
      sounds[sound].pause();
      sounds[sound].currentTime = 0;
    }
  }

  // *** NEW: Hàm lấy câu hỏi ngẫu nhiên ***
  function pickRandomQuestions(sourceArray, count) {
    const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // *** NEW: Hàm tạo bộ câu hỏi cho lượt chơi mới ***
  function generateGameQuestions() {
    const easyQuestions = pickRandomQuestions(questionBank.easy, 5);
    const mediumQuestions = pickRandomQuestions(questionBank.medium, 5);
    const hardQuestions = pickRandomQuestions(questionBank.hard, 5);
    currentGameQuestions = [
      ...easyQuestions,
      ...mediumQuestions,
      ...hardQuestions,
    ];
  }

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
    stopAllSounds();
    sounds.letsPlay.play();

    generateGameQuestions(); // *** MODIFIED: Tạo câu hỏi mới khi bắt đầu

    currentQuestionIndex = 0;
    gameActive = true;
    lifelines = { fiftyFifty: false, phone: false, audience: false };
    updateLifelineButtons();
    startScreen.classList.remove("show");
    displayQuestion();
  }

  function displayQuestion() {
    if (currentQuestionIndex >= currentGameQuestions.length) {
      winGame();
      return;
    }

    resetAnswerButtons();
    const q = currentGameQuestions[currentQuestionIndex]; // *** MODIFIED: Dùng mảng câu hỏi của lượt chơi
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
    const correctIndex = currentGameQuestions[currentQuestionIndex].correct; // *** MODIFIED

    gameActive = false;
    selectedBtn.classList.add("selected");
    sounds.suspense.play();

    setTimeout(() => {
      stopAllSounds();
      if (selectedIndex === correctIndex) {
        sounds.correct.play();
        selectedBtn.classList.remove("selected");
        selectedBtn.classList.add("correct");
        setTimeout(correctAnswer, 2000);
      } else {
        sounds.incorrect.play();
        selectedBtn.classList.remove("selected");
        selectedBtn.classList.add("incorrect");
        answerButtons[correctIndex].classList.add("correct");
        setTimeout(gameOver, 2000);
      }
    }, 5000);
  }

  function correctAnswer() {
    currentQuestionIndex++;
    gameActive = true;
    displayQuestion();
  }

  function getSafePrize() {
    if (currentQuestionIndex >= 10) return prizeMoney[9];
    if (currentQuestionIndex >= 5) return prizeMoney[4];
    return "0";
  }

  function gameOver() {
    const prizeWon = getSafePrize();
    modalTitle.textContent = "Thua cuộc!";
    modalBody.innerHTML = `<p>Rất tiếc, đó không phải là câu trả lời đúng.</p><p>Bạn ra về với giải thưởng là <strong>${prizeWon} VNĐ</strong>.</p>`;
    modalActionBtn.textContent = "Chơi lại";
    modalActionBtn.onclick = () => {
      modal.classList.remove("show");
      // Không cần gọi startGame() ở đây, nó sẽ được gọi từ startScreen
      startScreen.classList.add("show");
    };
    modal.classList.add("show");
  }

  function winGame() {
    stopAllSounds();
    sounds.win.play();
    modalTitle.textContent = "XIN CHÚC MỪNG!";
    modalBody.innerHTML = `<p>Bạn đã trở thành TRIỆU PHÚ!</p><p>Bạn đã xuất sắc vượt qua 15 câu hỏi và giành được giải thưởng cao nhất:</p><h2>${prizeMoney[14]} VNĐ</h2>`;
    modalActionBtn.textContent = "Chơi lại";
    modalActionBtn.onclick = () => {
      modal.classList.remove("show");
      startScreen.classList.add("show");
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
      startScreen.classList.add("show");
    };
    modal.classList.add("show");
  }

  function updateLifelineButtons() {
    lifeline5050Btn.disabled = lifelines.fiftyFifty;
    lifelinePhoneBtn.disabled = lifelines.phone;
    lifelineAudienceBtn.disabled = lifelines.audience;
    lifeline5050Btn.classList.toggle("used", lifelines.fiftyFifty);
    lifelinePhoneBtn.classList.toggle("used", lifelines.phone);
    lifelineAudienceBtn.classList.toggle("used", lifelines.audience);
  }

  function useFiftyFifty() {
    if (lifelines.fiftyFifty || !gameActive) return;
    lifelines.fiftyFifty = true;
    updateLifelineButtons();

    const correctIndex = currentGameQuestions[currentQuestionIndex].correct; // *** MODIFIED
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
    if (lifelines.phone || !gameActive) return;
    lifelines.phone = true;
    updateLifelineButtons();

    modalTitle.textContent = "Gọi điện thoại cho người thân";
    let timeLeft = 30;
    modalBody.innerHTML = `<p>Đang kết nối với chuyên gia...</p><div id="phone-timer">${timeLeft}</div>`;
    modalActionBtn.style.display = "none";
    modal.classList.add("show");

    const timer = setInterval(() => {
      timeLeft--;
      const timerEl = document.getElementById("phone-timer");
      if (timerEl) timerEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        const correctIndex = currentGameQuestions[currentQuestionIndex].correct; // *** MODIFIED
        const choices = ["A", "B", "C", "D"];
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
    if (lifelines.audience || !gameActive) return;
    lifelines.audience = true;
    updateLifelineButtons();

    const correctIndex = currentGameQuestions[currentQuestionIndex].correct; // *** MODIFIED
    let percentages = [0, 0, 0, 0];
    let remaining = 100;

    const correctPercent = 40 + Math.floor(Math.random() * 30);
    percentages[correctIndex] = correctPercent;
    remaining -= correctPercent;

    let otherIndexes = [0, 1, 2, 3].filter((i) => i !== correctIndex);
    otherIndexes.forEach((index, i) => {
      if (i < 2) {
        const randomPercent = Math.floor(Math.random() * remaining);
        percentages[index] = randomPercent;
        remaining -= randomPercent;
      } else {
        percentages[index] = remaining;
      }
    });

    percentages.sort(() => 0.5 - Math.random());

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
