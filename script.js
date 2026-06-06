window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    header.style.borderBottomColor = '#38bdf8';
  } else {
    header.style.boxShadow = 'none';
    header.style.borderBottomColor = '#1e293b';
  }
});
