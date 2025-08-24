const fs = require('fs');

// Function to set up 6h duration for Thailand and Brazil only
function add6hToCountries(countryNames) {
  try {
    // Read the current data.json file
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

    // First, remove 6h from all countries
    data.countries.forEach((country) => {
      country.availableDurations = country.availableDurations.filter(
        (duration) => duration !== '6h'
      );
    });

    let updatedCount = 0;

    // Add 6h to specified countries
    data.countries.forEach((country) => {
      if (countryNames.includes(country.name)) {
        if (!country.availableDurations.includes('6h')) {
          country.availableDurations.unshift('6h'); // Add 6h at the beginning
          country.availableDurations.sort((a, b) => {
            const order = ['6h', '12h', '24h', '48h'];
            return order.indexOf(a) - order.indexOf(b);
          });
          updatedCount++;
          console.log(`✅ Added 6h to ${country.name} (${country.flag})`);
        }
      }
    });

    // Write the updated data back to the file
    fs.writeFileSync('data.json', JSON.stringify(data, null, 4));

    console.log(
      `\n🎉 Successfully added 6h duration to ${updatedCount} countries!`
    );
    console.log(
      `📊 Total countries with 6h: ${
        data.countries.filter((c) => c.availableDurations.includes('6h')).length
      }`
    );
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Example usage - you can modify this array when you get the 6h list
const countriesWith6h = [
  // Updated list of countries with 6h availability
  'Singapore',
  'São Paulo', // Brazil
  'Seoul',
  'Thailand',
  'Berlin', // Frankfurt/Germany
  'Hong Kong'
];
if (countriesWith6h.length > 0) {
  add6hToCountries(countriesWith6h);
} else {
  console.log('ℹ️  No countries specified for 6h duration update.');
  console.log(
    "📝 To use this script, edit the 'countriesWith6h' array with the country names that support 6h duration."
  );
  console.log('\n📋 Available countries in data.json:');

  try {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    data.countries.forEach((country, index) => {
      console.log(
        `${index + 1}. ${country.name} ${country.flag} (${country.region})`
      );
    });
  } catch (error) {
    console.error('❌ Error reading data.json:', error.message);
  }
}
