/* Load the public calendar on request, retaining its source's current-data warnings. */
(() => {
  const toggle = document.getElementById('calendar-toggle');
  const container = document.getElementById('calendar-embed');
  if (!toggle || !container) return;
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close calendar' : 'Explore the calendar';
    container.hidden = !open;
    container.replaceChildren();
    if (!open) return;
    const frame = document.createElement('iframe');
    frame.title = 'WithMight public fitness event calendar';
    frame.src = 'https://withmight.com/events';
    frame.referrerPolicy = 'no-referrer';
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-forms');
    container.append(frame);
  });
})();
