// Black November countdown: counts down to the deadline on #countdown[data-deadline];
// once it passes, the countdown hides and the offer section's own closing line takes its place.
const el = document.getElementById('countdown');
if (el) {
  const deadline = new Date(el.dataset.deadline).getTime();
  const closedMsg = document.getElementById('offer-closed');
  const units = { d: el.querySelector('[data-u="d"]'), h: el.querySelector('[data-u="h"]'), m: el.querySelector('[data-u="m"]'), s: el.querySelector('[data-u="s"]') };
  const pad = (n) => String(n).padStart(2, '0');

  function tick() {
    const diff = deadline - Date.now();
    if (diff <= 0) {
      el.hidden = true;
      if (closedMsg) closedMsg.hidden = false;
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff / 1000);
    units.d.textContent = pad(Math.floor(s / 86400));
    units.h.textContent = pad(Math.floor((s % 86400) / 3600));
    units.m.textContent = pad(Math.floor((s % 3600) / 60));
    units.s.textContent = pad(s % 60);
  }

  tick();
  const timer = setInterval(tick, 1000);
}
