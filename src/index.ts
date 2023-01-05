import axios from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
// const axios = require('axios');

const API_KEY = 'Dp86ashSRsvJmcR26cEoysjd';
const TEST_IMG_URL = 'https://www.remove.bg/example.jpg';

const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', TEST_IMG_URL);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': API_KEY,
  }
})
.then((response: any) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("no-bg.png", response.data);
})
.catch((error: any) => {
    return console.error('Request failed:', error);
});