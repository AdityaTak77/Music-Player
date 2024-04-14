//  functionality here
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', () => {
  // Get the values from the input fields
  const pincode = document.getElementById('pincode').value;
  const medicine = document.getElementById('medicine').value;

  // Do something with the pincode and medicine,
  console.log(`Searching for medicines in ${pincode} for ${medicine}`);
});

