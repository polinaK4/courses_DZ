const axios = require('axios');
const googleDetectApi = require('../testData/googleDetectApi.v1.json');
const googleLanguagesList = require('../testData/googleLanguagesList.v1.json');
const googleTranslate = require('../testData/googleTranslate.v1.json');
const Validator = require('jsonschema').Validator;
const validator = new Validator();


describe('api testing of Google Translate api', function () {

    test('check status code for POST Detect language', async () => {
        const response = await axios({
            url:'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
            data: {
                "q": "English is hard, but detectably so"
            }  
        })
        expect(response.status).toEqual(200);
    });

    test('check response body of POST Detect language', async () => {
        const response = await axios({
            url:'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
            data: {
                "q": "English is hard, but detectably so"
            } 
        })
        console.log(response);
        const result = await validator.validate(response.data, googleDetectApi);
        expect(result.valid).toEqual(true);
    });

    test('check status code for GET Languages', async () => {
        const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              }
        })
        expect(response.status).toEqual(200);
    });

    test('check response body of GET Languages', async () => {
        const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              }
        })
        console.log(response);
        const result = await validator.validate(response.data, googleLanguagesList);
        expect(result.valid).toEqual(true);
    });

    test('check status code for POST Translate', async () => {
        const response = await axios({
            url:'https://google-translate1.p.rapidapi.com/language/translate/v2',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
            data: {
                "q": "Hello, world!",
                "target": "es"
            }  
        })
        expect(response.status).toEqual(200);
    });

    test('check response body of POST Translate', async () => {
        const response = await axios({
            url:'https://google-translate1.p.rapidapi.com/language/translate/v2',
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b2401b2b18mshf07297cf304db3bp1c7b4bjsncd11eff6f6f0',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
              },
            data: {
                "q": "Hello, world!",
                "target": "es"
            } 
        })
        console.log(response);
        const result = await validator.validate(response.data, googleTranslate);
        expect(result.valid).toEqual(true);
    });

})