# GH-Search

This application is a code challenge from Hotel Engine. Here are the requirements: The objective is to build a repository search application using the Github repository search API (https://developer.github.com/v3/search/#search-repositories) that displays the results of a query. This app should query an API that you write in node. The node API should implement response caching to prevent more requests than necessary being made to Github.
The list should be able to sort by relevance (score) and number of stars and also should be able to filter by language.
Each result when selected should route to a detailed screen that displays information about the repository. The results should contain the repository name, description, number of stars, language, and the owners name. You can include more information as you see fit to enhance the UI.

## Tech

The tech used in this app includes:
- React
- React Router
- Redux
- SCSS

## Setup

Please first go to the back-end repo [here](https://github.com/N-Gibson/gh-search-proxy) and follow the setup instructions.

To run the application on your local machine: 

1) Run `git clone https://github.com/N-Gibson/gh-search.git` in your terminal.

2) Run `npm install` in your terminal to install dependencies.

3) Run `npm start` in your terminal to open the app in a browser.

### Screenshots

[screencapture-localhost-3000-2020-02-19-12_14_31.pdf](https://github.com/N-Gibson/gh-search-proxy/files/4226882/screencapture-localhost-3000-2020-02-19-12_14_31.pdf)
