// swapi.dev/api will only give 10 results per API call
// combineData returns all data from API

// thoughts of reindexing since vehicles are fully filled out in API
const combineData = async (url) => {
  const combinedData = {};
  while (url !== null) {
    const response = await fetch(url);
    const data = await response.json();
    combinedData.push(...data.results);
    url = data.next;
  }
  return combinedData;
};

module.exports = combineData;
