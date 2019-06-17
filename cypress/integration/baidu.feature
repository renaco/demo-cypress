Feature: Background Section
    Background:
        Given Visit baidu

    Scenario: Basic example #1
        When Search cypress-text via baidu
        Then The title should contain cypress-test