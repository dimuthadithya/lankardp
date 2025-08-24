const fs = require('fs');

// Read the current data
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Find and fix the flags for the specified cities
data.countries.forEach((country) => {
  if (country.name === 'Tel Aviv') {
    country.flag = '🇮🇱'; // Israel flag
  }
  if (country.name === 'Doha') {
    country.flag = '🇶🇦'; // Qatar flag
  }
  if (country.name === 'Seoul') {
    country.flag = '🇰🇷'; // South Korea flag
  }
  if (country.name === 'Hong Kong') {
    country.flag = '🇭🇰'; // Hong Kong flag
  }
  if (country.name === 'Dallas') {
    country.flag = '🇺🇸'; // USA flag
  }
});

// Write the updated data back to the file
fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
