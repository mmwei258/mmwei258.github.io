// Mobile nav toggle
document.addEventListener('click', function(e) {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;
  // Close when clicking outside
  if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle-label') && toggle.checked) {
    toggle.checked = false;
  }
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    var toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});

// Tab switcher
function switchTab(group, tabId) {
  var container = document.getElementById(group);
  if (!container) return;
  container.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  container.querySelectorAll('.tab-panel').forEach(function(panel) {
    panel.classList.toggle('active', panel.dataset.tab === tabId);
  });
}

document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var group = this.closest('[id]').id;
    switchTab(group, this.dataset.tab);
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(q) {
  q.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
  });
});
