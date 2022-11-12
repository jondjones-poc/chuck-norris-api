import fetch from "node-fetch"
require('encoding')

const API_ENDPOINT = "https://api.chucknorris.io/jokes/random";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => ({
        statusCode: 200,
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify(data)
    }))
    .catch(() => ({
        statusCode: response.status,
        body: response.statusText
    }));
};