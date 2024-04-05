## Music-Albums-Client

This application is the front-end of a music albums library app, including some information about the album itself, like the artist, name of the album, cover image and the release date of the album.

It also allows anonymus users to create a new album, including information about the album, plus allowing to edit album information, as well as allowing rating the albums from 1 to 5, and allowing them to delete an album, only if the album has a rating score less than 4, and if the rating is above 4, only if there's less than 10 ratings for that album.

## Prerequisites

- Install Node.js

## Installation

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.

## Technologies Used

- React
- Vite
- CSS

## Development server

Run `npm run dev` for a dev server. Navigate to the local URL given by Vite in Terminal. The application will automatically reload if you change any of the source files.

To call the API, make sure that the server is running locally.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

Not setup yet.

## Improvements

- Use ENV variable for API URL.
- Unit testing with jest, react testing library. For example test rendering album-view with moch data, and check that clicking on the rating sends an API request.
- Update styling and UI.
- Add rating score in album-view.
- error messaging
