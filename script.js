function showPaymentInfo() {
    document.getElementById('paymentDetails').style.display = 'block';
    document.getElementById('mainBuyBtn').style.display = 'none';
}

function copyWallet() {
    const walletText = document.getElementById('walletAddr').innerText;
    navigator.clipboard.writeText(walletText).then(() => {
        alert("Address copied to clipboard!");
    });
}
