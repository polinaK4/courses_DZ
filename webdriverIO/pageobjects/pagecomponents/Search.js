const { BasePage } = require('../BasePage');

class Search extends BasePage {
    constructor() {
        super();
        this.searchbutton = '//*[@class="DocSearch DocSearch-Button"]'
        this.searchInput = '//*[@class="DocSearch-Input"]';
    } 
    
    async searchByPhrase(phrase) {
        await $(this.searchInput).waitForClickable();
        await $(this.searchInput).setValue(phrase);
        await browser.keys('Enter');
    }
}

module.exports = { Search }