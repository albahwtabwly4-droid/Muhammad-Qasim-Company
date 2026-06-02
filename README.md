<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>محمد قاسم للتصميم</title>
    <!-- ربط ملف التنسيق -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>محمد قاسم للتصميم</h1>
        <p>حيث يلتقي خيال الأنمي بقوة الذكاء الاصطناعي</p>
    </header>

    <main class="hero">
        <h2>مرحباً بك في عالم التصميم السينمائي</h2>
        <button class="btn-ai" onclick="startAI()">تحدث مع مساعد الأنمي الذكي</button>
    </main>

    <!-- ربط ملف البرمجة -->
    <script src="script.js"></script>
</body>
</html>
/* إعدادات التصميم السينمائي */
body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; background: #0f0f1a; color: white; text-align: center; }
header { padding: 40px; background: rgba(255, 64, 129, 0.1); border-bottom: 3px solid #ff4081; }
h1 { font-size: 3.5em; color: #ff4081; text-shadow: 0 0 15px #ff4081; }
.hero { padding: 100px 20px; }
.btn-ai { background: #ff4081; padding: 15px 30px; border: none; border-radius: 50px; color: white; cursor: pointer; font-size: 1.2em; transition: 0.3s; }
.btn-ai:hover { transform: scale(1.1); box-shadow: 0 0 20px #ff4081; }
// دالة لتفعيل المساعد الذكي
function startAI() {
    alert("جارٍ تفعيل المساعد الذكي... استعد لعالم الأنمي!");
    console.log("تم استدعاء المساعد الذكي بنجاح");
}
