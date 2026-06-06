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

const openModalBtn = document.getElementById('open-cv-btn');
const modal = document.getElementById('cv-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');

openModalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

downloadPdfBtn.addEventListener('click', function() {
  window.print();
});
