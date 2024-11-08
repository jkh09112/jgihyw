function checkAnswer(roomNumber) {
  const answerInput = document.getElementById(`answer${roomNumber}`);
  const hint = document.getElementById(`hint${roomNumber}`);
  const answer = answerInput.value.trim();

  // 방 1의 정답 예시 (정답을 "4"로 설정)
  if (roomNumber === 1 && answer === "2월6일") {
    // 정답이 맞을 경우: 힌트 없이 다음 방으로 이동
    hint.style.display = "none"; // 힌트를 숨깁니다.
    setTimeout(() => {
      document.getElementById(`room${roomNumber}`).classList.remove("active");
      document.getElementById(`room${roomNumber + 1}`).classList.add("active");
    }, 500);
  } else {
    // 오답일 경우: 힌트를 표시하고 재시도 메시지 출력
    hint.style.display = "block"; // 힌트를 표시
    alert("틀렸습니다! 힌트를 확인해보세요.");
  }
}
