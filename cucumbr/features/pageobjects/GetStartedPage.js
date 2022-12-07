class GetStartedPage {
    get 'Core Concepts Menu'() {
        return '//*[@id="docusaurus_skipToContent_fallback"]/div/aside/div/nav/ul/li[2]/div'
    }
    get 'Setup Types Link'() {
        return '//*[@class="menu__link" and text()="Setup Types"]'
    }
}

module.exports = { GetStartedPage };