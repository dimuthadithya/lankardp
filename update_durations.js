const fs = require('fs');

try {
  // Read the current data.json file
  const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  let updatedCount = 0;

  // Add availableDurations to each country (currently all support 12h, 24h, 48h)
  data.countries.forEach((country) => {
    if (!country.availableDurations) {
      country.availableDurations = ['12h', '24h', '48h'];
      updatedCount++;
    }
  });

  // Write the updated data back to the file
  fs.writeFileSync('data.json', JSON.stringify(data, null, 4));

  console.log(
    `Successfully added availableDurations to ${updatedCount} countries!`
  );
  console.log(`Total countries: ${data.countries.length}`);
  console.log(
    'Current status: All countries support 12h, 24h, and 48h durations'
  );
  console.log('Ready for 6h list to be added later');
} catch (error) {
  console.error('Error:', error.message);
}
