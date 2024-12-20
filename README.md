# Element of Chance

![Responsive Screenshot Mockup](/assets/images/readme.images/iam-responsive.png)

## Introduction

Welcome to Element of Chance, an interactive web application built with HTML, CSS and JavaScript, that explores the principles of randomness and probability through engaging simulations. This project is designed for users interested in learning about chance through hands-on experience.

## Table of Contents

- [Element of Chance](#element-of-chance)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Experience](#user-experience)
    - [The Strategy plan](#the-strategy-plan)
      - [Site goal](#site-goal)
      - [User Stories](#user-stories)
    - [The scope plane](#the-scope-plane)
    - [The structure Plane](#the-structure-plane)
    - [The Surface Plane](#the-surface-plane)
      - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Imagery](#imagery)
  - [Features](#features)
    - [Features Included](#features-included)
    - [Features to be Added](#features-to-be-added)
  - [Testing](#testing)
    - [Validation of Code](#validation-of-code)
    - [Wave Webaim - accessibility testing](#wave-webaim---accessibility-testing)
    - [Lighthouse](#lighthouse)
    - [Bugs](#bugs)
    - [Manual Testing](#manual-testing)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Media](#media)
    - [Reference Material](#reference-material)
  - [Acknowledgements](#acknowledgements)

## User Experience

### The Strategy plan

- Element of chance aims to provide a fun, engaging experience for individual users during short gameplay sessions,

#### Site goal

- To offer users an enjoyable and easy-to-play game.
- To ensure intuitive site navigation, eliminating confusion.
- To offer multiple gameplay methods.
- To ensure full accessibility on desktop and touch devices.

#### User Stories

- I want a fun and simple game to play.
- I want an easier and quicker version of the game.

### The scope plane

- The site must be responsive across all devices—Desktop, Laptop, Tablet, and Mobile.
- All navigation elements should be easily accessible within the game screen.
- The design should be visually engaging and clearly convey that it is a game.
- Two Game modes should be provided.

### The structure Plane

User stories:

> I want a fun and simple game to play.

Acceptance Criteria:

- It should be clear that it is a game, what it is about and how to play.

Implementation:

- The layout, colour scheme font choice and graphic choices will all convey a sense of fun and make it clear to the user that this is a game site. There will be a direct link to the rules of the game on the homepage so the user can easily learn how to play and access information about the game.

> I want an easier and quicker version of the game.

Acceptance Criteria:

- Users should have the option to play a simpler version of the game.

Implementation:

- Users can choose between the classic game version and a more challenging version that includes lizard and spock options.

### The Surface Plane

#### Design

- I went with a very minimilistic color and design that it was easy on users to follow and stay engaged.

##### Colour Scheme

- The color scheme is designed to be appealing while ensuring readability and accessibility. It uses a combination of vibrant and calming colors to attract users while maintaining
  focus on the content.

- The colour codes were checked using a contrast checker to ensure the required contrast ratio for different elements.
  [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23000000%2C%20Black%0D%0A%232196f3%0D%0A%231976c8%0D%0A%23120a41%0D%0A%2370480b%0D%0A%23ff9800%0D%0A%23d5e5ea%0D%0A%23869cad%0D%0A%23f44336%0D%0A%23d32f2f%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)

##### Typography

- The typography focuses on clarity and legibility, utilizing web-safe fonts that are easy to read across devices.

##### Imagery

- Images used within the site are sourced from free-to-download wesite, enhancing user engagement without compromising loading times.

## Features

- The site features a central column where JavaScript inserts relevant HTML, while the title bar and background are consistent across all screens.

- The main menu is the first page users see when they visit the site. It's designed based on various games to quickly show what the site offers without needing much text. With only three clearly labeled choices, it's easy for users to navigate. This aligns with the user story: 'As a user, I want a fun and simple game to play.' The site uses color, layout, and images to clearly convey that it is a game.

![Main menu](/assets/images/readme.images/main-menu.png)

- The main menu has an instrctions button that informs the user of the rules of both game versions.
  ![Game Instructions](/assets/images/readme.images/how-to-play.png)

- Game screens
  There are two versions of the game, each with its own screen, but they share the same layout and format.

  Classic Game Mode
  ![Play classic screen](/assets/images/readme.images/play-classic.png)

  This screen appears once the max ries of 5 have been reached simultaneously disabling option buttons. Buttons are once again enabled when reset button is clicked.
  ![Classic game mode after max tries](/assets/images/readme.images/play-classic-reset.png)

  Modern Game Mode  
  ![Play modern screen](/assets/images/readme.images/play-modern.png)![Modern game mode after max tries](/assets/images/readme.images/play-modern-reset.png)

### Features Included

1. **Pattern Matching Functionality**: The game determines the outcome based on the player's choice and the computer's choice.
2. **A Limited Number of Tries**: Players can only play up to a maximum number of tries (`maxTries`), which is set to 5.
3. **A Score Tracking System**: Wins, losses, and ties are tracked and displayed on the screen.
4. **The Ability to Play Against the Computer**: The player plays against a randomly chosen move made by the computer.

### Features to be Added

- User Accounts: Allow users to save their progress and favorite simulations.
- Dynamic Graphs: Integrate real-time data visualization for results from simulations.
- Feedback System: Enable users to rate simulations and provide suggestions for improvements.
- Adding a funtionality button that allows users to choose between light and dark view.

## Testing

- I tested the game in various browsers such as Chrome, Safari and Firefox on both mobile and laptop devices.
- i can also concur that the results of the game is correct.

### Validation of Code

- No errors were found when passing through the validator site [validator results for index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbraunie999.github.io%2Felement-of-chance%2F)

- No errors were found when passing through the W3C CSS validator [validator results for CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbraunie999.github.io%2Felement-of-chance%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No errors were returned when passing through the validator service at JSHint.com. ![View Image of Report](/assets/images/readme.images/jshint-report.png)

### Wave Webaim - accessibility testing

- WAVE Web Accessibility
  - No errors were returned in the WAVE web accessibility, other than contrast conflict which can be seen in the report. [View Report](https://wave.webaim.org/report#/https://braunie999.github.io/element-of-chance/)

### Lighthouse

- There were no major errors found in the lighthouse report.
  ![Lighthouse report](/assets/images/readme.images/lighthouse-report.png)

### Bugs

- There were no notables bugs found other than some contrast issues in the firefox browser when playing the game. Firefox inverted the color scheme of the game making it seem like a dark mode has been made available

### Manual Testing

| Feature being tested | Expected Outcome                          | Testing Performed | Actual Outcome                                     | Result (Pass or fail) |
| -------------------- | ----------------------------------------- | ----------------- | -------------------------------------------------- | --------------------- |
| Click Play Classic   | Launch classic game screen                | ✅                | Classic mode opened                                | Pass                  |
| Click Play Modern    | Launch Modern game screen                 | ✅                | Modern mode opened                                 | Pass                  |
| Click How to Play    | Open how to play menu                     | ✅                | Opens how to play button                           | Pass                  |
| Click Back button    | Return to main menu                       | ✅                | Returns to main menu                               | Pass                  |
| Click Rock           | User chooses Rock on screen               | ✅                | The word Rock is displayed                         | Pass                  |
| Click Paper          | User chooses Paper on screen              | ✅                | The word Paper is displayed                        | Pass                  |
| Click Scissors       | User chooses Scissors on screen           | ✅                | The word Scissors is displayed                     | Pass                  |
| Click Lizard         | User chooses Lizard on screen             | ✅                | The word Lizard is displayed                       | Pass                  |
| Click Spock          | User chooses Spock on screen              | ✅                | The word Spock is displayed                        | Pass                  |
| Max tries reached    | User can no longer click on moves         | ✅                | Option buttons disabled until reset is clicked     | Pass                  |
| Click Reset button   | Resets game mode in which user is playing | ✅                | clears scoreboard and enables option buttons again | Pass                  |

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:

  - In the GitHub repository, navigate to the settings tab
  - Select the pages link from the setting menu on the left hand side
  - Under the GitHub Pages from the source section drop-down menu, select the master branch
  - One the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

  - The live link can be found here - [Element Of Chance Live Site](https://braunie999.github.io/element-of-chance/)

## Credits

### Media

- The favicon was created by using [favicon-generator.org](https://www.favicon-generator.org/).
- The emoji images was downloaded from the website[https://emoji.aranja.com/]

### Reference Material

- W3 Schools was used as a reference point for HTML, CSS and JavaScript
- MDN Web Docs was also used as a reference point for HTML, CSS and JavaScript
- Stack overflow was also used as a reference point for JavaScrpt
- freeCodeCamp.org YouTube channel was also used to understand how Javascript works in a developing enviroment with specific focus on a Rock Paper Scissors game.[Web Development Tutorial](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=3205s)

## Acknowledgements

I would like to graciously and humbly thank my mentor, Matt Bodden, for sharing ideas and tips on how to think like a computer and challenging me to code more logically.
