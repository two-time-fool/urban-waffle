const md5 = require('md5');
const ts = Date.now();
console.log(ts);
const publicKey = '1cd44a31f2897587cf16c699f738587d';
const privateKey = '97ae26edfe22c11af5b51cd79bd0be628504ff37';
const yolo = ts + privateKey + publicKey;
const hash = md5(yolo);
console.log(hash);

export const URL = 'https://gateway.marvel.com/v1/public/characters?ts=1552075798783&apikey=1cd44a31f2897587cf16c699f738587d&hash=eed575ed304de91c945888b89309a612';