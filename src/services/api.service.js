import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_ROOT_URL } from '../config'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseUrl = "";
    this.setHeader();
    console.log('API-Service initiated...');
  },
  setHeader() {
    Vue.axios.defaults.headers.common[
      'Content-Type'
    ] = 'application/json';
  },

  async post(resource, params, opts) {
    try {
      return await Vue.axios.post(`${API_ROOT_URL}${resource}`, params, opts);
    } catch (error) {
      throw new Error(`ApiService POST method ${error}`);
    }
  },

  async get(url) {
    try {
      const response = await Vue.axios.get(`${url}`);
      return response.data
    } catch (error) {
      throw new Error(`ApiService GET method ${error}`);
    }
  },

  async put(resource, params) {
    try {
      return await Vue.axios.put(`${API_ROOT_URL}${resource}`, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      throw new Error(`ApiService PUT method ${error}`);
    }
  },

  async patch(resource, params) {
    try {
      return await Vue.axios.patch(`${API_ROOT_URL}${resource}`, params, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      throw new Error(`ApiService PATCH method ${error}`);
    }
  },

  async delete(resource) {
    try {
      return await Vue.axios.delete(`${API_ROOT_URL}${resource}`);
    } catch (error) {
      throw new Error(`ApiService DELETE method ${error}`);
    }
  }
};
ApiService.init();
export default ApiService;