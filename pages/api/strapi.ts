import axios from 'axios';

export async function getPersonas() {
  try {
    const response = await axios.get('http://localhost:1337/api/personas');
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
