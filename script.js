function openPayment() {
    document.getElementById('paymentOverlay').style.display = 'flex';
}

function closePayment() {
    document.getElementById('paymentOverlay').style.display = 'none';
}

function copyWallet() {
    const walletText = document.getElementById('walletAddr').innerText;
    navigator.clipboard.writeText(walletText).then(() => {
        alert("Wallet Address Copied!");
    });
}
