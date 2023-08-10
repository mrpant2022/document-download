const axios = require("axios");

class DownloadDocumentClient {
  constructor(uri) {
    this.baseURL = uri;
  }
  async fetch() {
    try {
      const response = await axios.get(`${this.baseURL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DownloadDocumentClient;