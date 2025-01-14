const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const startButton = document.getElementById('startButton');
const generateButton = document.getElementById('generateBulbs');
const backButton = document.getElementById('backButton');
const bulbContainer = document.getElementById('bulbContainer');
const numBulbsInput = document.getElementById('numBulbs');

page1.style.display = 'flex';

startButton.addEventListener('click', () => {
  page1.style.display = 'none';
  page2.style.display = 'block';
});

generateButton.addEventListener('click', () => {
  const numBulbs = parseInt(numBulbsInput.value) || 0;
  if (numBulbs <= 0) return alert('Please enter a valid number of bulbs.');

  bulbContainer.innerHTML = ''; 

  for (let i = 0; i < numBulbs; i++) {
    const bulbItem = document.createElement('div');
    bulbItem.classList.add('bulb-item');

    const bulbImage = document.createElement('img');
    bulbImage.src = 'off-bulb.png'; 
    bulbImage.alt = 'Bulb Off';

    const switchLabel = document.createElement('label');
    switchLabel.classList.add('switch');
    const toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    const slider = document.createElement('span');
    slider.classList.add('slider');

    toggleInput.addEventListener('change', () => {
      bulbImage.src = toggleInput.checked ? 'on-bulb.png' : 'off-bulb.png'; 
    });

    switchLabel.appendChild(toggleInput);
    switchLabel.appendChild(slider);

    bulbItem.appendChild(bulbImage);
    bulbItem.appendChild(switchLabel);

    bulbContainer.appendChild(bulbItem);
  }

  page2.style.display = 'none';
  page3.style.display = 'block';
});

backButton.addEventListener('click', () => {
  page3.style.display = 'none';
  page2.style.display = 'block';
});
