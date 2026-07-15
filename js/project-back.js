document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-back]');
  if (!trigger) return;

  event.preventDefault();
  const referrer = document.referrer ? new URL(document.referrer) : null;
  if (referrer?.origin === window.location.origin) {
    window.history.back();
    return;
  }

  window.location.assign('./#projects');
});
