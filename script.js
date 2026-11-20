// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

document.getElementById('year').textContent = new Date().getFullYear();

// Dashboard tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectTab(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    selectTab(next); next.focus();
  });
});

// Early-access form.
// For now this opens the visitor's email app with the details filled in.
// Later, replace CONTACT_EMAIL / switch to a form service (e.g. Formspree) to collect sign-ups directly.
const CONTACT_EMAIL = 'jmredu.ai@gmail.com';

const form = document.getElementById('signup-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get('name') || '').trim();
  const email = (data.get('email') || '').trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    note.textContent = 'Please enter your name and a valid email.';
    note.className = 'form-note error';
    return;
  }

  const subject = `Early access request – ${data.get('role')}`;
  const body =
    `Name: ${name}\nEmail: ${email}\nI am a: ${data.get('role')}\n\n${data.get('message') || ''}`;
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  note.textContent = 'Thank you! Your email app should open — just press Send.';
  note.className = 'form-note';
});
