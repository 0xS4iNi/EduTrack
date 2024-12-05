function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const captchaText = `${num1} + ${num2} = ?`;
    document.getElementById('captcha-display').innerText = captchaText;
    document.getElementById('captcha-result').value = num1 + num2; // Hidden correct answer
}

function validateCaptcha() {
    const userAnswer = document.getElementById('captcha-input').value;
    const correctAnswer = document.getElementById('captcha-result').value;

    if (userAnswer != correctAnswer) {
        alert('Incorrect CAPTCHA! Please try again.');
        generateCaptcha();
        return false; 
    }
    return true; 
}

window.onload = generateCaptcha; 