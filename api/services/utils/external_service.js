"use strict";
const axios = require("axios").default;
/**
 * @param {Object} data The Data
 */
function userRequest(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const config = {
        method: data.method, //STRING
        url: process.env.URL_USERS_SERVICE + data.url, //String url endpoint,
        headers: data.headers, //{'X-Custom-Header': 'foobar'},
        data: data.data, //JSON
      };
      let res = await axios(config);
      return resolve(res);
    } catch (error) {
      return reject(error);
    }
  });
}

/**
 * @param {Object} data The Data
 */
function rolesRequest(data) {
  return new Promise(async (resolve, reject) => {
    try {
      const config = {
        method: data.method, //STRING
        url: process.env.URL_ROLES_SERVICE + data.url, //String url endpoint,
        headers: data.headers, //{'X-Custom-Header': 'foobar'},
        data: data.data, //JSON
      };
      let res = await axios(config);
      return resolve(res);
    } catch (error) {
      return reject(error);
    }
  });
}
module.exports = {
  userRequest: userRequest,
  rolesRequest: rolesRequest,
};
