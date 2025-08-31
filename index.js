// בחירת הכפתורים והתכנים
const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // לעדכן מצב aria
    buttons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    contents.forEach(c => {
      c.classList.remove('active');
      c.hidden = true;
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(btn.dataset.tab);
    panel.classList.add('active');
    panel.hidden = false;

    // גלילה רכה לראש התוכן במובייל
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
// --- מודל תמונה ל-header ---
const headerImg = document.querySelector('.header-img');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

if (headerImg && modal && modalImg && closeBtn) {
  headerImg.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = headerImg.src;
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // סגירה בלחיצה מחוץ לתמונה
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
}
