// script.js

// الحصول على جميع الأزرار "أضف إلى السلة"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// إضافة حدث النقر إلى كل زر "أضف إلى السلة"
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartHandler);
});

// دالة تعامل مع إضافة المنتج إلى السلة
function addToCartHandler(event) {
    // قم بمنع السلوك الافتراضي للزر (مثل إرسال النموذج)
    event.preventDefault();

    // الحصول على رقم الهاتف من خلال البيانات المخصصة (data-phone)
    const phoneNumber = event.currentTarget.getAttribute('data-phone');

    // تخزين رقم الهاتف في localStorage ليتم استخدامه في صفحة السلة
    localStorage.setItem('phoneNumber', phoneNumber);

    // تحويل المستخدم إلى صفحة السلة
    window.location.href = 'cart.html';
}
