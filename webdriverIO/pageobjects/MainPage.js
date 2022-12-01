const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
    constructor() {
        super();
        this.getstartedbutton = '.button--lg[href="/docs/gettingstarted"]'
    }
}

module.exports = { MainPage }