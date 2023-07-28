# City Explorer

**Author**: Chidi Ononye
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This is a React application that will allow users initiate requests for data from a third-part API using the Axios library.  

## Getting Started
To build a React App that will allow users initiate requests for data from a third-party API, follow these steps:

A. Set Up Your Development Environment: 

1. Install Node.js: Download and install (https://nodejs.org/). This will also include npm (Node Package Manager).

2. Install a Code Editor: A good one will be VScode (https://code.visualstudio.com/) for writing and managing your React code.

3. Create a New React App:
   Open your terminal (command prompt) and run the following command to create a new React app using the create-react-app tool: npx create-react-app my-app

4. Replace "my-app" with your desired project name. 

5. This command will create a new folder with the project files. Navigate to the Project Directory:

   Move into the project directory using the following command: bash Copy code cd my-app
   Again, replace "my-app" with your project name.

6. Install Axios:

   Axios is a popular library used for making HTTP requests. Install it using npm with the following command:
   Copy code
   npm install axios

7. Build the Components:

   Create the necessary React components for your application. These components will contain the logic and UI for handling API requests and displaying data.

8. Import Axios:

   In the component where you want to make API requests, import Axios at the top of the file:
   javascript
   Copy code
   import axios from 'axios';

9. Make API Requests:

   Inside the component, use Axios to make HTTP requests to the third-party API. For example, to make a GET request:
   javascript
   Copy code
   axios.get('https://api.example.com/data')
  .then(response => {
    // Handle the response data here
    })
    .catch(error => {
    // Handle errors
    });

10. Render Data:

Use React state to store the API response data and render it in your UI.


11. Start the Development Server:

    In the terminal, run the following command to start the development server and see your app in the browser:

    sql
    Copy code
    npm start
    Test Your App:

    Open your web browser and go to http://localhost:3000 to see your React app running.
    Now, you have a basic React application set up that allows users to initiate requests for data from a third-party API using the Axios library. 






## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
Time Estimates
