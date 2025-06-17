function runTest(questions, resultImages) {
  const testScreen = document.getElementById("test-screen");
  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = questions[index];
    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${q.image}" alt="질문 이미지" class="question-image" style="max-width: 600px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p class="question-text" style="font-size: 25px; font-weight: bold;">${q.text}</p>
        <button onclick="next(true)" class="mobile-button" style="margin: 10px; padding: 20px 40px; background-color: #100639; color: white; border: none; border-radius: 8px; font-size: 28px; cursor: pointer;">예</button>
        <button onclick="next(false)" class="mobile-button" style="margin: 10px; padding: 20px 40px; background-color: #100639; color: white; border: none; border-radius: 8px; font-size: 28px; cursor: pointer;">아니오</button>
      </div>
    `;
  }

  window.next = function(answer) {
    if (answer) score++;
    current++;
    if (current < questions.length) {
      showQuestion(current);
    } else {
      showResult();
    }
  }

  function showResult() {
    let resultIndex = 0;
    if (score >= 4) resultIndex = 2;
    else if (score >= 2) resultIndex = 1;

    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${resultImages[resultIndex]}" alt="결과 이미지" style="max-width: 600px; border-radius: 8px; margin-bottom: 20px;"><br>
        <a href="https://m.booking.naver.com/booking/13/bizes/400700?theme=place&lang=ko" target="_blank">
          <button style="margin: 10px; padding: 12px 28px; background-color: #100639; color: white; border: none; border-radius: 8px; font-size: 18px; cursor: pointer;">속안심내과 예약하기</button>
        </a><br><br>
        <p style="font-size: 25px; font-weight: bold;">다른 건강 자가진단 테스트도 해보세요</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 10px;">
  <a href="colon.html"><button style="background-color:#D99F70; color:#000; padding:14px 26px; border:none; border-radius:10px; font-size:20px; font-weight:bold; cursor:pointer;">대장암</button></a>
  <a href="digest.html"><button style="background-color:#D99F70; color:#000; padding:14px 26px; border:none; border-radius:10px; font-size:20px; font-weight:bold; cursor:pointer;">소화기</button></a>
  <a href="vessel.html"><button style="background-color:#D99F70; color:#000; padding:14px 26px; border:none; border-radius:10px; font-size:20px; font-weight:bold; cursor:pointer;">혈관점수</button></a>
  <a href="brain.html"><button style="background-color:#D99F70; color:#000; padding:14px 26px; border:none; border-radius:10px; font-size:20px; font-weight:bold; cursor:pointer;">뇌 MRI</button></a>
  <a href="heart.html"><button style="background-color:#D99F70; color:#000; padding:14px 26px; border:none; border-radius:10px; font-size:20px; font-weight:bold; cursor:pointer;">심장</button></a>
</div>
      </div>
    `;
  }

  showQuestion(current);
}