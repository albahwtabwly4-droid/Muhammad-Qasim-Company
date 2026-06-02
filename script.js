// دالة لتفعيل المساعد الذكي
function startAI() {
    alert("جارٍ تفعيل المساعد الذكي... استعد لعالم الأنمي!");
    console.log("تم استدعاء المساعد الذكي بنجاح");
    console.log("🎨 مرحباً بك في شركة محمد قاسم لتصميم الأنمي");
    console.log("⭐ تصاميم احترافية وخلفيات عالية الجودة");
}

// تأثيرات إضافية
document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ موقع شركة محمد قاسم لتصميم الأنمي جاهز!');
    
    // إضافة تأثير التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});