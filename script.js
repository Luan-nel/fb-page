document.getElementById('nextButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    if (code.length === 7) {
        window.location.href = '/404.html'; // Replace with your actual 404 page path
    } else {
        alert('Please enter a valid 7-digit code.');
    }
});
