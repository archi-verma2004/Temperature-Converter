function convert(source) {
    if (source === 'celsius') {
      const celsiusValue = parseFloat(document.getElementById('celsius').value);
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    } else if (source === 'fahrenheit') {
      const fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
  }
  