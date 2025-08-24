import json

try:
    # Read the current data.json file
    with open('data.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    # Count countries updated
    updated_count = 0
    
    # Add availableDurations to each country (currently all support 12h, 24h, 48h)
    for country in data['countries']:
        if 'availableDurations' not in country:
            country['availableDurations'] = ["12h", "24h", "48h"]
            updated_count += 1

    # Write the updated data back to the file
    with open('data.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

    print(f"Successfully added availableDurations to {updated_count} countries!")
    print(f"Total countries: {len(data['countries'])}")
    print("Current status: All countries support 12h, 24h, and 48h durations")
    print("Ready for 6h list to be added later")
    
except Exception as e:
    print(f"Error: {e}")
