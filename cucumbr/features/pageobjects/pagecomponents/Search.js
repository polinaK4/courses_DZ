class Search {

    get 'Search Button'() {
        return '//*[@class="DocSearch DocSearch-Button"]'
    }
    get 'Search Input'() {
        return '//*[@class="DocSearch-Input"]'
    }

}
module.exports = { Search }