const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require('chai');

describe(`Switch between pages and check titles`, function () {

    let driver;

    before(async() => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async() => {
        await driver.close();
    });

    after(async() => {
        await driver.quit();
    });

    it(`Title should be ChromeDriver on the home page`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.manage().window().maximize();
        let title = await driver.getTitle();
        console.log(title);
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome');
    })

    it(`Click 'Chrome extensions' button and check that the title has changed`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const extensionsButton = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]//a[text()="Chrome Extensions"]'));
        await driver.wait(until.elementIsVisible(extensionsButton));
        await driver.actions().click(extensionsButton).perform();
        let title = await driver.getTitle();
        console.log(title);
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
    })

})






