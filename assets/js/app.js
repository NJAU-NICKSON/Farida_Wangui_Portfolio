document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website is loaded!');

    const downloadCvBtn = document.querySelector('.download-cv-btn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // You can implement the CV download logic here.
            // For now, it just shows an alert.
            alert('Download CV button clicked! Implement your download logic here.');
        });
    }
});