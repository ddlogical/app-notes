async function getAllRecords() {
  const URL = `https://quintadb.com/apps/${process.env.REACT_APP_ID}/dtypes/entity/${process.env.REACT_APP_ENTITY_ID}.json?rest_api_key=${process.env.REACT_APP_API}&fetch_all=true&hide_empty=true`;
  try {
    const response = await fetch(URL);
    const result = response.json();
    return result;
} catch (error) {
    console.error(error.message);
}
}

export default getAllRecords;