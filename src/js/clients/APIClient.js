//
const rp = require('request-promise');

class APIClient {
  static request(method, url, { params, body }) {
    const options = {
      uri: 'http://localhost:8800' + url,
      method,
      json: true
    };

    if (params) {
      options.qs = params;
    }

    if (body) {
      options.body = body;
    }

    return rp(options);
  }

  static get(url, params) {
    return APIClient.request('GET', url, { params });
  }

  static delete(url, params) {
    return APIClient.request('DELETE', url, { params });
  }

  static post(url, body) {
    return APIClient.request('POST', url, { body });
  }

  static put(url, body) {
    return APIClient.request('PUT', url, { body });
  }

  static errorDescription(error) {
    if (error.response) {
      if (error.response.body) {
        return error.response.body;
      }
      return error.response.body;
    }
    return error;
  }
}

module.exports = APIClient;
