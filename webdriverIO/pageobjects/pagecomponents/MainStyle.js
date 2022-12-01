const { BasePage } = require('../BasePage');

class MainStyle extends BasePage {
    constructor() {
        super();
        this.mainStyleSelector = '/html';
    }    
}

module.exports = { MainStyle }