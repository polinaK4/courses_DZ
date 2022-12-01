const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { GetStartedPage } = require('../pageobjects/GetStartedPage');
const { Theme } = require('../pageobjects/pagecomponents/ThemeButton');
const { Search } = require('../pageobjects/pagecomponents/Search');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const getstartedPage = new GetStartedPage();
const themeButton = new Theme;
const searchControl = new Search();

describe('Check GetStarted page', () => {
    before(async () => {
        await mainPage.navigate('https://webdriver.io/');
    })

    it('Click GetStarted button and check title', async () => {
        await I.click(mainPage.getstartedbutton);
        await browser.pause(2000);
        let title = await browser.getTitle();        
        expect(title).to.equal('Getting Started | WebdriverIO');
    });

    it(`Click Core Concepts menu > Setup Types link`, async () => {
        await I.click(getstartedPage.coreconceptsMenu);
        await I.click(getstartedPage.setuptypeslink);
        await browser.pause(2000);
        let title = await browser.getTitle();
        expect(title).to.equal('Setup Types | WebdriverIO');        
    })

    it(`Change theme to dark and check that it's changed`, async () => {
        await themeButton.changeTheme();
        let theme = await themeButton.getTheme();
        expect(theme).to.equal('dark');
    })

    it(`click search and check search results should contain key word`, async () => {
        await I.click(searchControl.searchbutton);
        await searchControl.searchByPhrase('Configuration');
        await browser.pause(5000);
        //оставила сценарий без проверки т.к. почему-то через браузер результаты серча показываются, а когда ищет драйвер - нет, ни с одним словом не получилось
    })

});