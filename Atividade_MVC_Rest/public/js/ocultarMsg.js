const successMessage = document.getElementById('successMessage');
successMessage.style.display = 'none';

function ocultarMsg() {
    successMessage.style.display = 'block';
    setTimeout(() => {
    successMessage.style.display = 'none';
    }, 2000);
}