
  const menuIcon = document.getElementById('menu-icon');
  const mobileNav = document.getElementById('mobile-nav');

  menuIcon.addEventListener('click', () => {
    if (mobileNav.classList.contains('hidden')) {
      mobileNav.classList.remove('hidden');
      mobileNav.classList.add('flex', 'flex-col');
    } else {
      mobileNav.classList.remove('flex');
      mobileNav.classList.add('hidden', 'flex-col');
    }
  });





  const form = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you');

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop default form submission

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // Clear the form
        thankYou.classList.remove('hidden'); // Show thank you message
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (error) {
      alert('Failed to send the message. Please try again later.');
    }
  });