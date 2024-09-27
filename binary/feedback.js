// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
const missedQuestions = urlParams.get('missedQuestions');

// Display feedback message based on the score and missed questions
const feedbackMessage = document.getElementById("feedback-message");

if (score !== null) {
let message = `You scored: ${score}/7. `;

if (!missedQuestions || missedQuestions.length === 0) {
message += "Great job! You answered all questions correctly.";
} else {
const missedArray = missedQuestions.split(',').map(q => parseInt(q) + 1);
message += `You missed questions: ${missedArray.join(", ")}. Please review those topics.`;
}

feedbackMessage.textContent = message;
} else {
feedbackMessage.textContent = "No quiz results available.";
}
