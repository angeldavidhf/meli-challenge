import axios from 'axios';
import { API_URL, AUTHOR_NAME, AUTHOR_LASTNAME } from '../constants';

const AUTHOR_OBJ = {
  author: {
    name: `${AUTHOR_NAME}`,
    lastname: `${AUTHOR_LASTNAME}`,
  }
};

export const searchItems = async(q: string) => {
  return await axios.get(`https://${API_URL}sites/MLA/search?q=${q}`)
  .then((res) => {
    const result = {
      ...AUTHOR_OBJ, 
      items: [
        ...res.data.results
      ]
    };
    return result;
  })
  .catch(function (error) {
    return error;
  });
}

export const getItem = async (code: string) => {

  return await axios.all([
    axios.get(`https://${API_URL}items/${code}`),
    axios.get(`https://${API_URL}items/${code}/description`)    
  ])
  .then(axios.spread((item, description) => {
    const result = {
      ...AUTHOR_OBJ, 
      item: {
        ...item.data,
        description: {
          ...description.data
        }
      }
    };

    return result;
  }))
  .catch((error) => {
    return error;
  });
}