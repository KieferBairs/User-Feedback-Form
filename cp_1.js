const page = document.getElementById("page");
const wrap = document.getElementById("form-container");
const form = document.getElementById("feedback-form");
const list = document.getElementById("feedback-display");
const tip = document.getElementById("tooltip");

// Character Count
form.addEventListener('input', (e) => {
    const t =e.target;
    if (!t.matches('#name, #email, #comments')) return;
    const count =t.closest('.field').querySelector('.count');
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
    const rect = f.getBoundingClientRect();
    tip.style.left = rect.left + 'px';
    tip.style.top = (rect.top +window.scrollY - 38) + 'px';
    tip.hidden = false;
});
wrap.addEventListener('mouseout', () => (tip.hidden = true ));

// validation and display
form.addEventListener('submit' , (e) => {
    e.preventDefault();
    clearErrors();
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const comments = form.querySelector('#comments').value.trim();


    let valid = true;
    if (!name) showErr('name');
    if (!email) showErr('email');
    if (!comments) showErr('comments');
    if (!name || !email || !comments) valid = false;
    if (!valid) return;
    
    const item = document.createElement('div');
    item.className = 'item';
    item.textContent = `${name} (${email}): ${comments}`;
    list.prepend(item);
    form.reset();
    resetCounts();
});

// Stop background clicks
page.addEventListener('click' , () => {});
wrap.addEventListener('click', (e) => e.stopPropagation());

// helpers
function showErr(id) {
    form.querySelector (`#${id}`).closest('.field')
    .querySelector('.error').textContent = 'Required';
}
function clearErrors() {
  form.querySelectorAll('.error').forEach((el) => el.textContent = '')
    };
