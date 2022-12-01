const { BasePage } = require('./BasePage');

class GetStartedPage extends BasePage {
    constructor() {
        super();
        this.coreconceptsMenu = '//*[@class="theme-doc-sidebar-menu menu__list"]/li[2]/div';
        this.setuptypeslink = '//*[@class="menu__link" and text()="Setup Types"]';                
    }
}

module.exports = { GetStartedPage }