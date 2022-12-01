const { BasePage } = require('../BasePage');
const I = require('../../helpers/BaseElements');
const { MainStyle } = require('../../pageobjects/pagecomponents/MainStyle');

const mainStyle = new MainStyle;

class Theme extends BasePage {
    constructor() {
        super();
        this.themeButton = '//*[@class="clean-btn toggleButton_gllP"]';
    }

    async changeTheme(){
        await $(this.themeButton).waitForClickable();
        await I.click(this.themeButton);
    }

    async getTheme() {
        const datatheme = await $(mainStyle.mainStyleSelector).getAttribute('data-theme');
        return(datatheme);
    }
}

module.exports = { Theme };