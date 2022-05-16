# Saplink
Saplink is an app for plant lovers to trade cuttings, seeds, and other garden materials. 

## Demo link:
In-progress. Check back May 17th, 2022.

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [Reflection](#reflection)
- [Credits](#credits)
- [License](#license)

## About The App
Saplink is a user-friendly React app designed to connect plant lovers with the common goal of growing one's plant collection through the trading of seeds, cuttings, and other gardening material. Saplink reminds users of the abundance of nature. There is enough to go around, and through community, we can grow together. Users can register, create ads, chat in real-time with other users, and make offers on ads. 

## Screenshots

Form Validation with Authentication and Conditional Routing <br>
![Kapture 2022-05-16 at 13 52 45](https://user-images.githubusercontent.com/55802241/168655626-7456235e-b77b-4da0-a644-a8497c36cfff.gif)

Ad and live-chat feature -- data persistence is facilitated by Google Firestore <br>
![Kapture 2022-05-16 at 14 43 33](https://user-images.githubusercontent.com/55802241/168661340-4b767e33-9954-4526-8ce2-fc3e8a33ac1e.gif)

## Technologies
I used `ReactJS`, `sass`, `React-Redux`, `React-Router`, `JQuery`, `Google Firestore`

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Status
Saplink is still in progress. `Version 2` will integrate an updated chat UI and the trade feature will be completed. I will also add the ability to delete ads once items are no longer available. Additionally, I will add an API that will allow users to search for different plants and it will display care instructions. 

## Reflection

This was my capstone project for Ada Developers Academy. I set out to build a simple, intuitive SPA for plant lovers to trade and grow their plant collection. Users can make offers and chat in real-time with others. I spent several weeks formulating the project by creating wireframes, researching, making and updating a [kanban board](https://trello.com/invite/b/ibURAyzE/2f336e1bd5b25af818839b55ee93f197/saplink), deciding MVPs, attending daily standups with folks using a similar tech stack, coding, and refining my the scope of the project. 

Many MVPs took longer than anticipated, whle others were surprisingly easy to implement. I think the hardest part was paring down the project due since I had so many features I wanted to add. The chat funcionality was surprisingly difficult to implement. I ended up collaborating with a friend to get it working properly. 

Throughout this project I learned that organization is key. I found that organzing all of the subtasks using a [kanban board](https://trello.com/invite/b/ibURAyzE/2f336e1bd5b25af818839b55ee93f197/saplink) was extremely helpful. Although I did set timelines for various MVPs, it was important to be flexible and adapt when more research was needed. I wanted to use React because my understanding of using hooks and props was not solid before this project and this allowed me to spend extra time on these topics and gain a deeper understanding. While using Classes in React is considered somewhat outdated by some folks, I chose to use them in a few instances because my current position at Salesforce uses this syntax. 

## Credits
List of contributors:
- Mustafa Shaikh helped with the real-time chat module. Github: @TheMustafaShaikh

## License

MIT license 


