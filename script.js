 const counters = document.querySelectorAll('.stat-number');
let hasCounted = false;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / 50);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
      }
    };

    updateCount();
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !hasCounted) {
    animateCounters();
    hasCounted = true;
  }
}, { threshold: 0.5 });

observer.observe(document.querySelector('#about'));
if (aboutSection) {
    observer.observe(aboutSection);
  }

