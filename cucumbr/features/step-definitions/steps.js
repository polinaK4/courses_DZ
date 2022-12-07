const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given(/^I navigate to "(.*)" page$/, async (url) => {
    await browser.url(url)
});

When('I click {locator position}{locator} button', async (locatorPosition, selector) => {
    await $(selector).click();
    await browser.pause(2000);
});

When('I fill in {locator} field {text}', async (locator, text) => {
    await $(locator).setValue(text);
    await browser.pause(5000);
});

When(/^I click "(.*)" key button$/, async (keybutton) => {
    await browser.keys(keybutton);
    await browser.pause(5000);
});

Then('I expect title should be equal {text}', async(text) => {
    expect(await browser.getTitle()).to.equal(text);
})

Then('I expect theme to be {text}', async(text) => {
    expect(await $('html').getAttribute('data-theme')).to.equal(text);
})






