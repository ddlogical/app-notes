async function deleteRecord(recordData) {
  const URL = `https://quintadb.com/apps/${process.env.REACT_APP_ID}/dtypes/${recordData.id}.json`;
  const requestBody = {
    rest_api_key: process.env.REACT_APP_API
  }
  try {
    const response = await fetch(URL, {
      method: 'DELETE',
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

export default deleteRecord;