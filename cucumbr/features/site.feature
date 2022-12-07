Feature: Webdriver site tests

  Background:
    Given I navigate to "https://webdriver.io/" page

  Scenario: Navigate to Getting Started page and check its title
    When I click "Main Page > Getting Started button" button
    Then I expect title should be equal "Getting Started | WebdriverIO"

  Scenario: Navigate to Getting Started > Core Concepts > Setup Types page and check its title
    When I click "Main Page > Getting Started button" button
    And I click "Get Started Page > Core Concepts Menu" button
    And I click "Get Started Page > Setup Types Link" button
    Then I expect title should be equal "Setup Types | WebdriverIO"

  Scenario: Change default theme and check that it's changed
    When I click "Theme Button > Theme Button" button
    Then I expect theme to be "dark"

  Scenario Outline: Search by key word
    When I click "Search > Search Button" button
    And I fill in "Search > Search Input" field "<searchTest>"
    And I click "Enter" key button
    Then I expect title should be equal "<title>"

    Examples:
      | searchTest    | title                                     |
      | Configuration | Configuration File \| WebdriverIO         |
      | Guides        | Custom Commands \| WebdriverIO            |
      | Integration   | WebdriverIO for Enterprise \| WebdriverIO |
      | Selectors     | Selectors \| WebdriverIO                  |

