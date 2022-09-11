<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Anthony-Cortese/IMDb-Clone">
    <img src="./images/logo.png" alt="Logo" width="120" height="80">
  </a>

<h1 align="center" size="44px">IMDb-Clone</h1>

  <p align="center">
    <br />
    <a href="https://akc-imdb.netlify.app/"><strong>View Website</strong></a>
    <br />
    <br />
</div>

## Description

After watching and coding along with several tutorials online I wanted to test my overall knowledge and implementation of React and CSS so I decided I would build my favorite website from scratch. This felt like such an undertaking to begin-- but once I began I found so much joy in building out the skeleton, adding my own features, and completely making the info on the website MINE. This project was a giant learning experience for me

1. Think mobile first-- The entire website was built before I began to make the site responsive with media queries. NEVER AGAIN. There are so many different sections on the homepage alone, that you fix one area, while breaking another one.

2. DRY code-- There were so many instances where I could have cleaned up different components by using the .map() method with an array of data, rather than coding each bit by bit out. There is so much code to look at it can be over whelming.

3. Notation-- Once my code is cleaner, it will be far easier to read but using notations to organize your thoughts if you are returning to the project after time away. ESPECIALLY THE CSS. Make tons of notes on your CSS files so you are able to locate problems much easier.

4. Organization-- Under the SRC folder all the Components and pages are just listed out and not in their seperate folders. Each .CSS page has the same name as the .JS page. THIS IS JUST SLOPPY. Clean up and stay organized.

![badge](https://img.shields.io/badge/license-MITLicense-brightorange)
![https://reactjs.org](https://img.shields.io/badge/react-v16.13.1-blue)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Getting Started

### Installation

Install NPM packages

- npm

```sh
npm install
```

```sh
npm start
```

- yarn

```sh
yarn install
```

```sh
yarn start
```

## Features/Usage

![Homepage](/images/2.png)

![IMDbTV](/images/1.png)

- [ ] On the IMDbTV page I used the TMDB API to retrieve movie poster data based on different genres.
  - [ ] Each movie poster is made clickable to open a movie trailer from YouTube.

![Navigation](/images/3.png)

- [ ] Fully functional navigation bar.
  - [ ] Each button takes you to a new page, some buttons even have hover capabilities.

![Trailers](/images/4.png)

- [ ] The play buttons on the home screen next to movie posters will open up a trailer which is unique to the button pressed.

![Coming](/images/5.png)

- [ ] The "Coming Soon to Theatres" section are all short films that I have directed/edited for my amatuer Production Company

![Responsive](/images/6.png)

- [ ] Responsive website allows information to be hidden and revealed with a horizontal scroll.
  - [ ] Featured Today, Fan Favorites, Exclusive Videos, Explore, On TV, Trending Celebrities, and Top News all have the horizontal scroll functionality!

## Credits

I credit IMDb for making such a great website, and giving me my inspiration.

<!-- Deployed site: https://akc-imdb.netlify.app/ -->
