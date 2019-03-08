const md5 = require('md5');
const ts = Date.now();
const publicKey = '1cd44a31f2897587cf16c699f738587d';
const privateKey = '97ae26edfe22c11af5b51cd79bd0be628504ff37';
const message = ts + privateKey + publicKey;
const hash = md5(message);

export const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
