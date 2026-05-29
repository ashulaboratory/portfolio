// ============================================================
// Ash mascot animation + Modal helpers
// ============================================================

(function() {
  const ashWrap = document.getElementById('ash-wrapper');
  if (!ashWrap) return;

  let mode = 'follow';
  let ashX = window.innerWidth - 100;
  let ashY = window.innerHeight / 2;
  let targetX = ashX, targetY = ashY;
  const keys = {};

  document.addEventListener('mousemove', (e) => {
    if (mode === 'follow') {
      targetX = e.clientX + 24;
      targetY = e.clientY + 24;
    }
  });

  document.addEventListener('keydown', (e) => {
    const backdrop = document.getElementById('modal-backdrop');
    const modalOpen = backdrop && backdrop.classList.contains('open');

    if (e.key === 'Escape') {
      if (modalOpen) {
        backdrop.classList.remove('open');
        document.body.classList.remove('modal-open');
        return;
      }
      if (mode === 'controlled') {
        mode = 'follow';
        ashWrap.classList.remove('controlled');
      }
    }
    if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
      if (modalOpen) return;
      e.preventDefault();
      keys[e.key] = true;
      if (mode === 'follow') {
        mode = 'controlled';
        ashWrap.classList.add('controlled');
        targetX = ashX;
        targetY = ashY;
      }
    }
  });
  document.addEventListener('keyup', (e) => { keys[e.key] = false; });

  function tick() {
    if (mode === 'controlled') {
      const speed = 6;
      if (keys['ArrowLeft']) ashX -= speed;
      if (keys['ArrowRight']) ashX += speed;
      if (keys['ArrowUp']) ashY -= speed;
      if (keys['ArrowDown']) ashY += speed;
      ashX = Math.max(0, Math.min(window.innerWidth - 56, ashX));
      ashY = Math.max(0, Math.min(window.innerHeight - 64, ashY));
    } else {
      ashX += (targetX - ashX) * 0.08;
      ashY += (targetY - ashY) * 0.08;
    }
    const wobble = Math.sin(Date.now() / 350) * 4;
    ashWrap.style.transform = `translate(${ashX}px, ${ashY + wobble}px)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ============================================================
// Modal open/close (used by works.html)
// ============================================================
function openWorkModal(item) {
  const backdrop = document.getElementById('modal-backdrop');
  const modalContent = document.getElementById('modal-content');
  if (!backdrop || !modalContent) return;

  let html = `
    <span class="modal-tag">${item.tag}</span>
    <h2 class="modal-title">${item.title}</h2>
  `;
  if (item.subtitle) html += `<p class="modal-subtitle">${item.subtitle}</p>`;
  if (item.award) html += `<div class="modal-award">🏆 ${item.award}</div>`;
  const d = item.detail || {};
  if (d.background) html += `<div class="modal-section"><h4>Background</h4><p>${d.background}</p></div>`;
  if (d.design && d.design.length) html += `<div class="modal-section"><h4>Design / 工夫</h4><ul>${d.design.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
  if (d.method) html += `<div class="modal-section"><h4>Method</h4><p>${d.method}</p></div>`;
  if (d.result) html += `<div class="modal-section"><h4>Result / Learning</h4><p>${d.result}</p></div>`;
  if (item.tech) {
    html += `<div class="modal-section"><h4>Tech Stack</h4><div class="modal-tech">${item.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div></div>`;
  }
  modalContent.innerHTML = html;
  backdrop.classList.add('open');
  document.body.classList.add('modal-open');
  modalContent.scrollTop = 0;
}

function closeWorkModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.classList.remove('modal-open');
}

// Bind close button & backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('modal-close');
  const backdrop = document.getElementById('modal-backdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeWorkModal);
  if (backdrop) backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeWorkModal();
  });
});
