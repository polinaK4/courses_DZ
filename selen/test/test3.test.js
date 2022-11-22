const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require('chai');

describe(`Check 'More' menu > Mobile Emulation`, function () {

    let driver;

    beforeEach(async() => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async() => {
        await driver.close();
    });

    after(async() => {
        await driver.quit();
    });

    it(`Go to 'More' menu > 'Mobile emulation' and check that url contains 'mobile-emulation'`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const moreElement = await driver.findElement(By.xpath("//*[text()='More']"));
        await driver.actions().move({origin: moreElement}).perform();
        const dropdownElements = await driver.findElement(By.css('div.oGuwee li:nth-child(10) a'))
        await driver.wait(until.elementIsVisible(dropdownElements));
        await dropdownElements.click();
        const currentUrl = await driver.getCurrentUrl();
        console.log(currentUrl);
        expect(currentUrl).to.contain('/mobile-emulation')

    })

})