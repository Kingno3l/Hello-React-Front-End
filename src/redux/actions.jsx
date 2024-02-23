export const setRandomMessage = (message) => ({
  type: 'SET_RANDOM_MESSAGE',
  payload: message,
});

export const fetchRandomMessage = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/random/greeting'); 

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    dispatch(setRandomMessage(data.message));
  } catch (error) {
    console.error('Error fetching data:', error); // Log the error object
  }
};