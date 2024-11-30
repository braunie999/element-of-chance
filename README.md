# Element of Chance

![image of site](link to image) - use an image from AmIResponsive that shows the site on multiple devices

## Introduction

Welcome to Element of Chance, an interactive web application built with HTML, CSS and JavaScript, that explores the principles of randomness and probability through engaging simulations. This project is designed for users interested in learning about chance through hands-on experience.

## Table of Contents

- [Element of Chance](#element-of-chance)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [User Experience](#user-experience)
    - [Site goal](#site-goal)
    - [User Stories](#user-stories)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Figma/Full color mockup if produced](#figmafull-color-mockup-if-produced)
  - [Features](#features)
    - [Features Included](#features-included)
  - [Features to be Added](#features-to-be-added)
  - [Testing](#testing)
    - [Validation of Code](#validation-of-code)
    - [Wave Webaim - accessibility testing](#wave-webaim---accessibility-testing)
    - [Manual Testing](#manual-testing)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Media](#media)
    - [Reference Material](#reference-material)
  - [Acknowledgements](#acknowledgements)

## User Experience

### Site goal

- To offer users an enjoyable and easy-to-play game.
- To ensure intuitive site navigation, eliminating confusion.
- To offer multiple gameplay methods.
- To ensure full accessibility on desktop and touch devices.

### User Stories

- I want a fun and simple game to play.
- I want a more challenging version of the game.
- I want an easier and quicker version of the game.

## Design

### Colour Scheme

- The color scheme is designed to be appealing while ensuring readability and accessibility. It uses a combination of vibrant and calming colors to attract users while maintaining
focus on the content.

- The colour codes were checked using a contrast checker to ensure the required contrast ratio for different elements.
[Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23000000%2C%20Black%0D%0A%232196f3%0D%0A%231976c8%0D%0A%23120a41%0D%0A%2370480b%0D%0A%23ff9800%0D%0A%23d5e5ea%0D%0A%23869cad%0D%0A%23f44336%0D%0A%23d32f2f%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)
### Typography

- The typography focuses on clarity and legibility, utilizing web-safe fonts that are easy to read across devices.

### Imagery

- Images used within the site are sourced from free-to-use repositories, enhancing user engagement without compromising loading times.

### Wireframes

### Figma/Full color mockup if produced

## Features

- The main menu is the first page users see when they visit the site. It's designed based on various games to quickly show what the site offers without needing much text. With only three clearly labeled choices, it's easy for users to navigate. This aligns with the user story: 'As a user, I want a fun and simple game to play.' The site uses color, layout, and images to clearly convey that it is a game.
  
- The site features a central column where JavaScript inserts relevant HTML, while the title bar and background are consistent across all screens.

### Features Included

1. **Pattern Matching Functionality**: The game determines the outcome based on the player's choice and the computer's choice.
2. **A Limited Number of Tries**: Players can only play up to a maximum number of tries (`maxTries`), which is set to 5.
3. **A Score Tracking System**: Wins, losses, and ties are tracked and displayed on the screen.
4. **The Ability to Play Against the Computer**: The player plays against a randomly chosen move made by the computer.

## Features to be Added

- User Accounts: Allow users to save their progress and favorite simulations.
- Dynamic Graphs: Integrate real-time data visualization for results from simulations.
- Feedback System: Enable users to rate simulations and provide suggestions for improvements.

## Testing

### Validation of Code

- No errors were found when passing through the validator site [validator results for index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbraunie999.github.io%2Felement-of-chance%2F)

- No errors were found when passing through the W3C CSS validator [validator results for CSS]()
- JavaScript
  - No errors were returned when passing through the validator service at JSHint.com. ![View Image of Report](/assets/images/read-me/jshint-report.png)

Insert screenshots of HTML, CSS and any other code files being tested in the relevant code validator - CSS validator might not validate newer CSS syntax - be careful to read and fully understand why it is giving you an error.

### Wave Webaim - accessibility testing

You can test your site for accessibility through the wave.webaim site - it needs to be deployed in order for it to test it. Fix any errors that it gives

### Manual Testing

You need to perform, and document everything you did to manually test your site.
At a minimum - you need to check every link on every page works as intended.
So that is check every link in the nav bar (do this on every single page because its a link in a different file) and any other links that appear on your site.
Test the responsiveness of the site - you can do this in the dev tools in responsive mode.
You should also load the site once deployed on as many devices you have access to. What is different from one device to the next? why is it different?

Test the user stories that you created earlier in the readme - did you satisfy the goal, how?

To write up the tests you can use a table,

| Feature being tested | Expected Outcome   | Testing Performed  | Actual Outcome     | Result (Pass or fail) |
| -------------------- | ------------------ | ------------------ | ------------------ | --------------------- |
| enter details here   | enter details here | enter details here | enter details here | enter details here    |

You should have tests for every section of every page.. individually.

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
- StackOverflow was also used as a reference point for JavaScrpt

## Acknowledgements

I would like to graciously and humbly thank my mentor, Matt Bodden, for sharing ideas and tips on how to think like a computer and challenging me to code more logically.
