let generatedCaptcha = '';

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        captcha += chars[randomIndex];
    }
    generatedCaptcha = captcha;
    document.getElementById('captcha').textContent = captcha;
}

function refreshCaptcha() {
    generateCaptcha();
    document.getElementById('feedback').textContent = '';
}

function validateCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const feedback = document.getElementById('feedback');

    if (userInput === generatedCaptcha) {
        feedback.textContent = 'Captcha matched!';
        feedback.classList.remove('error');
        feedback.classList.add('feedback');
    } else {
        feedback.textContent = 'Captcha does not match. Try again.';
        feedback.classList.remove('feedback');
        feedback.classList.add('error');
    }
}

// Generate initial CAPTCHA on page load
window.onload = generateCaptcha;