async function editRecord(recordData) {
  const URL = `https://quintadb.com/apps/${process.env.REACT_APP_ID}/dtypes/${recordData.id}.json`;
  const requestBody = {
    rest_api_key: process.env.REACT_APP_API,
    values: {
    entity_id : process.env.REACT_APP_ENTITY_ID, 
    'cnW7DvWRDdMykpbSkxWQuB': recordData.date, 
    'dcPSoimCjkmi7cPuOTW495': recordData.markdown } 
  }
  try {
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody)
    });
    const result = response.json();
    return result;
} catch (error) {
    console.error(error.message);
}
}

export default editRecord;