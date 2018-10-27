# Startpage

Custom startpage for displaying links.

![screenshot](screenshot.jpg)

### Building

Get the NPM packages and build the site.

`$ yarn install`

`$ yarn build`

`$ ls build/`

### Developing & Testing

Build site and run server with live reload.

`$ yarn start`

### Config
Copy the sample config file and edit as needed.

`$ cp config.json.sample build/config.json`

Key | Description
--- | ---
background | URL to the image to display in the background.
cards | An array of the cards.
card-name | Name to display in the card header.
links | An array of the links in the card
link-href | URL to set href to.
link-display | The text to show for the link.
