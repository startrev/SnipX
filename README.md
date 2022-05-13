<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Manifest][manifest-shield]][manifest-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">


  <h1 align="center">SnipX</h1>

  <p align="center">
    Injects CSS and JS snippets into your current browser tab.<br>
    <a href="https://github.com/startrev/SnipX/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/startrev/SnipX/issues/new/choose">Request Feature</a>
    ·
    <a href="https://github.com/startrev/SnipX#introducing-snipx">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introducing-snipx">Introducing SnipX</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#making-snipx">Making SnipX</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Introducing SnipX

![Product Name Screen Shot][product-screenshot]

SnipX is short for Snippet Extension. A web extension that let's you inject CSS and JavaScript into your current browser tab. It will watch over your files and the moment you save a change, it will inform your browser to reload (inject) the new CSS / JS. The best part is, once you've saved your changes, that's your newly modified webpage. Everytime you go back to that page it will load your modifications! Currently, it should work on most browsers built on [Chromium][chromium-url].

A few examples of Chromium based browsers would be:
* Google Chrome *( tested ✔️ )*
* Microsoft Edge *( tested ✔️ )*
* Brave *( not tested )*
* Opera *( not tested )*
* Vivaldi *( not tested )*

There are so many great extensions out there; however, we didn't find one that really suited our needs so we created this open source one.
We want to make it simple, easy too use, so amazing that it'll be the last one you ever need 
-- We think this is it.

Here's why:

* The ability to modify your browsing experience with code injection(css/js)
* Snippets are saved locally, right into the main repo and always active as long as your server is running
* Easily modify the user interface in `styles/theme/dark.css` and `styles/theme/light.css`
* Configure the local server port in `config.json`
* It's open source, do whatever you want with it :smile:
<!-- * See and save changes in real time -->
<!-- * A workflow enhancement -->
<!-- * Put creativity in focus -->

<!-- * Your time should be focused on creating something amazing. A project that solves a problem and helps others -->
<!-- * A good improvement to the development workflow as you won't need to refresh and wait until the page is rendered again; you can see and save the changes in real time. -->

Of course, no one tool will serve all since your needs may be different. So we'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people that have contributed to expanding this!

<p align="right">(<a href="#top">back to top</a>)</p>

### Making SnipX

Have you ever found yourself writing CSS or JavaScript code in the developer tools, then refreshing the page only to lose all of your changes? With SnipX, you can write your code in the extension, and your changes will always be rendered.

Well, that's the goal :shrug: Just make sure your server is running!

### Built With

Major frameworks/libraries used to bootstrap the project.

* [HTML5][html-url]
* [CSS3][css-url]
* [JavaScript][js-url]
* [Chrome API][chrome-api-url]
* [Node.js][node-url]
* [Express][express-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Requirements

Things you need to use the software and how to install them. You've installed the latest versions of [Node.js][node-url] and [npm][npm-url].
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Instructions on installing and setting up SnipX._

0. Clone the repo
   ```sh
   git clone https://github.com/startrev/SnipX.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
2. Start your server
   ```sh
   npm start
   ```

*Next we'll go ahead and install the SnipX Extension. Follow along the next few steps respective to your browser.*

3. Head over to either of the following links:
   * [chrome://extensions](chrome://extensions)
   * [edge://extensions](edge://extensions) 
   <!-- ![Product Name Screen Shot][product-url] -->
4. If **Developer Mode** isn't active, activate it 
    * ![Product Name Screen Shot][product-toggle]
5. Finally, load the extension you cloned in step `0.`
    * ![Product Name Screen Shot][product-load]

*Sometimes, you'll get stuck on the 'Server isn't running' page. This is because currently there is no ajax checking for server updates. To check if it is running, you can  click the Profile icon in the extension.*

![Product Name Screen Shot][product-check]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Useful examples of how SnipX can be used.
- **CSS Styling** ![Product Name Screen Shot][product-css]
- **JS DOM Manipulation** ![Product Name Screen Shot][product-js]
- **Note Taking** ![Product Name Screen Shot][product-text]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Chromium support
- [x] Dark/light mode
- [ ] Firefox support
- [ ] Event Handling System
- [ ] HTML Injection
- [ ] Global CSS Config
- [ ] Syntax Highlighting
- [ ] Editor Keybinds
- [ ] Profile Page
- [ ] GitHub OAuth & API
- [ ] Documentation


See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "feat".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/feature_name`)
3. Commit your Changes (`git commit -m 'type(scope): add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`][license-url] for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Email: contact@startrev.com

Project Link: [github.com/startrev/SnipX][project-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Reset CSS][reset-url]
* [Material Icons][material-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/startrev/SnipX.svg?style=for-the-badge&color=green
[forks-shield]: https://img.shields.io/github/forks/startrev/SnipX.svg?style=for-the-badge&color=blue
[stars-shield]: https://img.shields.io/github/stars/startrev/SnipX.svg?style=for-the-badge&color=yellow
[issues-shield]: https://img.shields.io/github/issues/startrev/SnipX.svg?style=for-the-badge&color=red
[license-shield]: https://img.shields.io/github/license/startrev/SnipX.svg?style=for-the-badge&color=yellowgreen
[manifest-shield]: https://img.shields.io/badge/Manifest-v3-black?style=for-the-badge

[contributors-url]: https://github.com/startrev/SnipX/graphs/contributors
[project-url]: https://github.com/startrev/SnipX
[forks-url]: https://github.com/startrev/SnipX/network/members
[stars-url]: https://github.com/startrev/SnipX/stargazers
[issues-url]: https://github.com/startrev/SnipX/issues
[license-url]: https://github.com/startrev/SnipX/blob/master/LICENSE
[manifest-url]: https://developer.chrome.com/docs/extensions/mv3/intro
[express-url]: https://expressjs.com
[node-url]: https://nodejs.org
[npm-url]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[html-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[material-url]: https://fonts.google.com/icons?selected=Material+Icons
[reset-url]: https://meyerweb.com/eric/tools/css/reset
[chrome-api-url]: https://developer.chrome.com/docs/extensions/reference
[chromium-url]: https://www.chromium.org

[product-screenshot]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-SnipX-v2.png
[product-toggle]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-Toggle-v3.png
[product-url]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-URL-v3.png
[product-load]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-Load-v2.png
[product-check]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-Check-v2.png
[product-css]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-CSS-v1.png
[product-js]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-JS-v1.png
[product-text]: https://raw.githubusercontent.com/startrev/images/main/SnipX/Screenshot-TXT-v1.png