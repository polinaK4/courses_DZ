const { MainPage } = require('./mainPage');
const { GetStartedPage } = require('./GetStartedPage');
const { Theme } = require('./pagecomponents/ThemeButton');
const { Search } = require('./pagecomponents/Search');
class PageFactory {
    static 'Main Page' = new MainPage();
    static 'Get Started Page' = new GetStartedPage();
    static 'Theme Button' = new Theme();
    static 'Search' = new Search();
}

module.exports = { PageFactory };