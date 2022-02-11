# Portfolio
A portfolio of my work as a software engineer.

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description

I am building a portfolio website to showcase my work as a front-end developer. The site will be built with a minimal,mobile-first design to allow for clarity and easy navigation.

## Google Sheet

[SEI Portfolio Projects](https://docs.google.com/spreadsheets/d/1LcmxPONZ1wRXnLFK3XLBtLMO6NpoHmLm9k_sE8OE_X4/edit?usp=sharing)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile/Desktop Home Page](https://imgur.com/UafBFRD)
- [Mobile/Desktop About Page](https://imgur.com/a/53unzIc)
- [Mobile/Desktop Contact Page](https://imgur.com/a/UNVwHGI)
- [Mobile Projects Page](https://imgur.com/a/4LY2p7I)
- [Desktop Projects Page](https://imgur.com/a/SobzyHg)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Damon's Priority Matrix](https://imgur.com/a/7k4lXx2)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Core Application Structure - HTML | H | 2hr | 45min |
| Add filler content to HTML | H | 1hr | 45min |
| Resize profile pic and hamburger image | H | 1hr | 1hr |
| Core Application Structure - CSS | H | 2hr | 20min |
| Apply CSS grid | H | 1.5hr | 2hr |
| Nav Bar ul | H | 1.5hr | 1hr |
| Nav Bar Hamburger | H | 1.5hr | 3hr |
| Apply Flex to Nav Bar | H | 1.5hr | 1.5hr |
| Header Img/Title - Flex | H | 1.5hr|  1.5hr |
| Format/position all elements for all pages mobile-first | H | 1.5hr|  45min |
| CSS Grid for Project Page | H | 2.5hr | 2hr |
| Make grid responsive | H | 2.5hr | 2.5hr |
| JS Carousel - Research | H | 2hrs|  1.5hr | 
| JS Carousel - Implementation | H | 2hr | 1hr |
| Total | H | 23hrs| 19.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Make own logo research | L | 2hr | hr |
| Make own logo implementation | L | 2hr | hr |
| Weather API research | L | 2hr | -hr | hr |
| Weather API impementation | L | 2hr | hr |
| Total | H | 8hrs| hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```js
// PROJECTS PAGE IMG SLIDER
$('.next').on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if (nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    })

$('.prev').on('click', function(){
    let currentImg = $('.active');
    let prevImg = currentImg.prev();

    if (prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
    }
})
```

## Issues and Resolutions
 When creating my projects page, once I'd created a div class for every individual project, the pace which my header occupied seemed to double.

 The issue was that I had defined 6 grid rows as being 1fr. What I didn't understand was that that meant every row would expand to match whichever row contained the most content.

 The solution was to simply remove my grid-template-row property and rely on grid to intelligently assign all of my wrapper's child elements to their own row. This worked because my html was structured with grid rows in mind.

