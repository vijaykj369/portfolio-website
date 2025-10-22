// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//CV download
  document.getElementById('download-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'cv.docx';  // Path to your CV file
    link.download = 'My_CV.docx'; // Filename for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

