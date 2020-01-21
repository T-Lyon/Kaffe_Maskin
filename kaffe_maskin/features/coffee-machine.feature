Feature: Get Coffee
  As a coffee buyer
  I want a machine where
  I can select a type of coffee and
  I can put money in
  and get a cup of coffee back

  Background: 
    Given that the machine is plugged in
    And that water is available

  Scenario Outline:
    Given that the user has selected black coffee
    And that the machine has enough ground coffee
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And presses the "start" button
    Then the user receives <cup> cup of black coffee.

    Examples:
      | money1 | money2 | cup |
      | 10     | 0      | 1   |
      | 5      | 5      | 1   |
      | 10     | 10     | 1   |
      | 1      | 1      | 0   |
      | 1      | 5      | 0   |

  Scenario Outline:
    Given that the user has selected black coffee
    And that the machine has enough ground coffee
    When the user inserts <money> kr by card
    And presses the "start" button
    Then the user receives <cup> cup of black coffee.

    Examples:
      | money | cup |
      | 10    | 1   |
      | 0     | 0   |

  Scenario Outline:
    Given that the user has selected coffee with milk
    And that the machine has enough ground coffee
    And that the machine has milk
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And the user inserts a <money3> kr coin
    And presses the "start" button
    Then the user receives <cup> cup of coffee with milk.

    Examples:
      | money1 | money2 | money3 | cup |
      | 10     | 5      | 0      | 1   |
      | 5      | 5      | 5      | 1   |
      | 10     | 10     | 10     | 1   |
      | 5      | 5      | 0      | 0   |
      | 10     | 0      | 0      | 0   |
      | 5      | 0      | 1      | 0   |

  Scenario Outline:
    Given that the user has selected coffee with milk
    And that the machine has enough ground coffe
    And that the machine has milk
    When the user inserts <money> kr by card
    And presses the "start" button
    Then the user receives <cup> cup of coffee with milk

    Examples:
      | money | cup |
      | 15    | 1   |
      | 0     | 0   |

  Scenario Outline:
    Given that the user has selected espresso
    And that the machine has a espresso capsule
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And the user inserts a <money3> kr coin
    And the user inserts a <money4> kr coin
    And presses the "start" button
    Then the user receives <cup> cup of espresso

    Examples:
      | money1 | money2 | money3 | money4 | cup |
      | 10     | 10     | 0      | 0      | 1   |
      | 5      | 5      | 5      | 5      | 1   |
      | 10     | 5      | 5      | 0      | 1   |
      | 10     | 1      | 5      | 5      | 1   |
      | 10     | 0      | 0      | 5      | 0   |
      | 0      | 0      | 0      | 0      | 0   |
      | 5      | 10     | 0      | 0      | 0   |
      | 1      | 1      | 1      | 1      | 0   |

  Scenario Outline:
    Given that the user has selected espresso
    And that the machine has a espresso capsule
    When the user inserts <money> kr by card
    And presses the "start" button
    Then the user receives <cup> cup of espresso

    Examples:
      | money | cup |
      | 20    | 1   |
      | 0     | 0   |


  Scenario:
    Given that the machine is plugged in
    And that water is not available
    Then the user should receive an error message


  Scenario:
    Given that the machine is plugged in
    And that water is available
    And that the machine does not have enough ground coffee
    Then the user should receive an error message


  Scenario:
    Given that the machine is plugged in
    And that water is available
    And the user has selected coffee with milk
    And that the machine has enough ground coffee
    And that the machine does not have enough milk
    Then the user should receive an error message


  Scenario:
    Given that the machine is plugged in
    And that water is available
    And the user has selected espresso
    And that the machine does not have an espresso capsule
    Then the user should receive an error message