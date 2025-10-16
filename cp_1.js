const page = document.getElementById("page");
const wrap = document.getElementById("form-container");
const form = document.getElementById("feedback-form");
const list = document.getElementById("feedback-display");
const tip = document.getElementById("tooltip");

// Character Count
form.addEventListener('input', (e) => {
    const t =e.target;
    if (!t.matches('#name, #email, #comments')) return;
    const count =t.closest('.field').querySelector('count');
    if (t.id === 'comments') count.textContent = `${t.value.length}/${t.maxLength}`;
    else count.textContent = t.value.length;
});
