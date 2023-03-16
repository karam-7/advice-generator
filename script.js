// Define a function to fetch a new piece of advice from the API and update the page
async function updateAdvice() {
    // Make a GET request to the API
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
  
    // Update the advice number and text on the page
    const adviceNumEl = document.querySelector('#num');
    const adviceTextEl = document.querySelector('.advice-h1');
    adviceNumEl.textContent = `#${data.slip.id}`;
    adviceTextEl.textContent = `"${data.slip.advice}"`;
  }
  
  // Add a click event listener to the "Get New Advice" button
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', updateAdvice);
  
  // Initialize the page with a random piece of advice
  updateAdvice();
  