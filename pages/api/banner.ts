import axios from 'axios';



export async function banner() {
  try {
    const response = await axios.get(`http://147.182.243.95:1337/api/banners?populate=*`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export async function Productos() {
  try {
    const response = await axios.get(`http://147.182.243.95:1337/api/productos?populate=*`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}




