function goToStep(stepNumber) {
    // شاردنەوەی هەموو هەنگاوەکان
    document.querySelectorAll('.flow-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // نیشاندانی هەنگاوی مەبەست
    const nextStep = document.getElementById('step' + stepNumber);
    if (nextStep) {
        nextStep.classList.add('active');
    }
}

function copyWallet() {
    const walletText = document.getElementById('walletAddr').innerText;
    navigator.clipboard.writeText(walletText).then(() => {
        alert("Wallet Address Copied to Clipboard!");
    });
}
