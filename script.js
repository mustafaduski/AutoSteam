function payWithCrypto() {
    const walletAddress = "ناونیشانی_وۆڵێتەکەت_لێرە_دابنێ";
    const amount = "79.99 USDT (TRC20)";
    
    const message = `To complete your order, please send ${amount} to the following address:\n\n${walletAddress}\n\nAfter payment, send a screenshot to our support.`;
    
    alert(message);
    // دەتوانیت لێرەدا کۆدێک دابنێیت کە ناونیشانەکە ئۆتۆماتیکی کۆپی بکات
    navigator.clipboard.writeText(walletAddress);
}
