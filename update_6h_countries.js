const fs = require('fs');

// Read the current data
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Find São Paulo and update its availableDurations
const saoPaulo = data.countries.find((country) => country.name === 'São Paulo');
if (saoPaulo) {
  saoPaulo.availableDurations = ['6h', '12h', '24h', '48h'];
}

// Add Thailand if it doesn't exist
const thailand = {
  id: data.countries.length + 1,
  region: 'Asia Pacific',
  name: 'Thailand',
  location: 'asia-southeast1',
  code: 'TH',
  flag: '🇹🇭',
  available: true,
  latency: 'Low',
  color: 'blue',
  eco: false,
  availableDurations: ['6h', '12h', '24h', '48h']
};

// Remove any existing Thailand entry
data.countries = data.countries.filter(
  (country) => country.name !== 'Thailand'
);

// Add the new Thailand entry
data.countries.push(thailand);

// Write the updated data back to the file
fs.writeFileSync('data.json', JSON.stringify(data, null, 4));
