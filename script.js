// فەنکشنی نیشاندانی بەشی کڕین
function showPaymentInfo() {
    const paymentBox = document.getElementById('paymentDetails');
    const mainBtn = document.getElementById('mainBuyBtn');
    if (paymentBox) {
        mainBtn.style.display = 'none';
        paymentBox.style.display = 'block';
        setTimeout(() => { paymentBox.style.opacity = '1'; }, 10);
    }
}

// کۆپیکردنی ناونیشان
function copyWallet() {
    const walletText = document.getElementById('walletAddr').innerText;
    navigator.clipboard.writeText(walletText).then(() => {
        alert("Address Copied!");
    });
}

// ئاگادارکردنەوەی کڕینی ساختە (Live Sales Notification)
const names = ["Thomas from Berlin", "Sophie from Paris", "Lukas from Vienna", "Emma from Madrid", "Oliver from Oslo"];
function showNotification() {
    const notify = document.getElementById('live-notify');
    const nameElem = document.getElementById('buyer-name');
    nameElem.innerText = names[Math.floor(Math.random() * names.length)];
    
    notify.style.left = "20px"; // دێتە ناو شاشە
    setTimeout(() => {
        notify.style.left = "-400px"; // دەچێتە دەرەوە
    }, 4000);
}

// هەموو 20 چرکە جارێک نامەکە دەردەکەوێت
setInterval(showNotification, 20000);
setTimeout(showNotification, 5000); // یەکەم دانە دوای 5 چرکە

// کاتی داشکاندن
let time = 900;
setInterval(() => {
    const timer = document.getElementById('timer');
    if(timer) {
        let min = Math.floor(time/60);
        let sec = time%60;
        timer.innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
        if(time > 0) time--;
    }
}, 1000);
