let imgBox = document.querySelectorAll('.img-box');
imgBox.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}))