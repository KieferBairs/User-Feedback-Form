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

// Tooltips
wrap.addEventListener('mouseover', (e) => {
    const f = e.target.closest('.field');
    if (!f) return;
    const msg = f.dataset.tooltip;
    if (!msg) return;
    tip.textContent = msg;
    const rect = f.getBoundingClientRect()
    tip.style.left = rect.left + 'px';
    tip.style.top = (rect.top +window.scrollY - 1) + 'px';
    tip.hidden = false;
});
wrap.addEventListener('mouseout', () => (tip.hidden = true ));