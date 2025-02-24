document.getElementById('convert-btn').addEventListener('click', function () {
    const number = document.getElementById('number').value;
    const fromBase = parseInt(document.getElementById('from-base').value, 10);
    const toBase = parseInt(document.getElementById('to-base').value, 10);
  
    if (!number || isNaN(fromBase) || isNaN(toBase)) {
      alert('Please fill in all fields with valid inputs.');
      return;
    }
  
    try {
      // Convert the number from the original base to decimal first
      const decimal = parseInt(number, fromBase);
  
      // Convert the decimal number to the target base
      const result = decimal.toString(toBase);
  
      // Display the result
      document.getElementById('result-text').textContent = result;
    } catch (error) {
      alert('Invalid input. Please check the number and bases.');
    }
  });
  
  document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('number').value = '';
    document.getElementById('from-base').value = '';
    document.getElementById('to-base').value = '';
    document.getElementById('result-text').textContent = '';
  });