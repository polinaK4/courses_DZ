const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require('chai');

describe(`Check search`, function () {

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

    it(`First link of search results should contain a word 'driver'`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const searchIcon = await driver.findElement(By.css('.U8eYrb .RBEWZc path:nth-child(1)'))
        await driver.wait(until.elementIsVisible(searchIcon));
        await driver.actions().click(searchIcon).perform();
        const searchField = await driver.findElement(By.css('.Xb9hP>input'))
        await driver.wait(until.elementIsVisible(searchField));
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(2000); 
        const searchResultTitles = await driver.findElements(By.css('#yDmH0d div.lZsZxe div.yDWqEe'))
        expect(await searchResultTitles[0].getText()).to.contain('driver');
    })
})

