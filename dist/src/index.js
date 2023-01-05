"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs = __importStar(require("fs"));
// const axios = require('axios');
const API_KEY = 'Dp86ashSRsvJmcR26cEoysjd';
const TEST_IMG_URL = 'https://cbu01.alicdn.com/img/ibank/O1CN01dxxGmA1J5Vks5SZzj_!!2212468290977-0-cib.jpg';
const formData = new form_data_1.default();
formData.append('size', 'auto');
formData.append('image_url', TEST_IMG_URL);
(0, axios_1.default)({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: Object.assign(Object.assign({}, formData.getHeaders()), { 'X-Api-Key': API_KEY })
})
    .then((response) => {
    if (response.status != 200)
        return console.error('Error:', response.status, response.statusText);
    fs.writeFileSync("no-bg.png", response.data);
})
    .catch((error) => {
    return console.error('Request failed:', error);
});
