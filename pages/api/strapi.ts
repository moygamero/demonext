import axios from 'axios';

export async function getPersonas() {
  try {
    const response = await axios.get('http://147.182.243.95:1337/api/personas?populate=*');
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
