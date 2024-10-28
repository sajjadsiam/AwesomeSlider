document.addEventListener('click', (e) => {
  const slider = document.querySelector('.slider');
  const items = slider.querySelectorAll('.item');

  if (e.target.classList.contains('next')) {
    slider.append(items[0]); // Move first item to the end
  } else if (e.target.classList.contains('prev')) {
    slider.prepend(items[items.length - 1]); // Move last item to the beginning
  }
});
