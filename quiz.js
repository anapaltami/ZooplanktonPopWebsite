// * code for quiz page
const quizForm = document.getElementById('quiz-form');
const quizResultModal = document.getElementById('quiz-result-modal');
const quizResultMessage = document.getElementById('quiz-result-message');

const answers = ['c', 'a', 'a', 'b', 'b', 'a', 'c', 'c', 'c', 'a', 'c', 'b']; // replace with your correct answers

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;

  for (let [index, answer] of formData.entries()) {
    if (answer === answers[index]) {
      score += 1;
    }
  }

  const resultMessage = `You got ${score} out of ${formData.keys().length} questions correct!`;
  quizResultMessage.textContent = resultMessage;
  $('#quiz-result-modal').modal('show');
});