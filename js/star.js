const ratings = document.querySelectorAll('.rating input');

ratings.forEach((star) => {
  star.addEventListener('click', function() {
    resetStars();
    this.parentNode.setAttribute('data-rating', this.value);
  });
});

function resetStars() {
  ratings.forEach((star) => {
    star.parentNode.removeAttribute('data-rating');
  });
}