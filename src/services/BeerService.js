import ApiService from './api.service';
import { API_ROOT_URL } from '../config';

const BeerService = {
  getBeers: async options => {
    const requestUrl = `${API_ROOT_URL}?per_page=${options.perPage}`;
    try {
     return await ApiService.get(requestUrl)
    } catch (error) {
      throw new Error(`Error in ${requestUrl}: ${error}`)
    }
  },
  getBreweryById: async id => {
    const requestUrl = `${API_ROOT_URL}/${id}`
    return ApiService.get(requestUrl).then(result => {
      return result;
    });
  }
};

export default BeerService;
