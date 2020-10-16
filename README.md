# WD-ReactLegacy-TS-GroceryInventoryClient

## What are the requirements for the application to be considered Minimum Viable Product(MVP)?

### Prerequisites
Students must have an understanding of:

- PostgreSql
- Express
- Node
- REST API’s
- Creating API endpoints
- React Basics
- Connecting server and client

### Project Challenges:

- React - Legacy (Class Components, Lifecycle methods, State Management, etc),
- At least one React Styling Library (Radium, Material UI, Styled Components, Ant Design),
- Data persistence utilizing PostgreSQL and a NodeJS ORM library (Sequelize),
- Use DB Associations,
- Create full CRUD (Create, Read, Update, Delete) for at least two items in an original application, separate from auth (users),
- Deployment through Heroku,
- Other MVP components exclusive to your project,
- User registration and authentication (REST-ful API)
- Ordering of items by priority (if it fits the theme),
- Admin Portal,
- Use React Class Components, Routing, Guards,
- Strong Typing with TypeScript(TypeScript must be used in every client side file),
- Create and style a README markdown file (README.md),

### Running the Program
Requirements:
- Visual Studio Code or other code editor
- A web browser
- Postman or another API testing program

Instructions:
- Clone to your local repository and open in code editor.
- run npm install to update the app dependencies.
- You will need to create the initial Admin account via Postman (or other API tester), or if testing on deployed version [deployed version](whats-for-dinner-client.herokuapp.com) userId: user120, password: pass120
- Open Postman to run tests. [Postman Endpoint Tests](https://documenter.getpostman.com/view/11529668/TVRq1RDU) You'll need to Register and get a token to run certain tests.

## What's for dinner??

This is a JavaScript React app written in Typescript using the Model View Controller pattern. The premise is...
You have limited mobility and you primarily cook all your food. You buy groceries and store them in your home, but due to your limited mobility you aren't able to zip up and down the stairs to see what's available in the freezer in the basement. This is an app that will allow you to track the groceries you have, where you store them, and where you purchased them so you can keep track without having actually go see what is where.<hr/>

The app is divided into an admin and a user side. The user can edit their own account, look at vendors and locations, and they can add, get, and edit groceries. Only admins can add, edit, and delete, vendors and locations. To use the app go to [whats-for-dinner-client.herokuapp.com](whats-for-dinner-client.herokuapp.com). 
 Register a user. Once you've entered a few of your regular stores, you should move on to entering the locations in which you store your groceries. Following location, you can begin entering the actual groceries.
    
**Planning Documents**

[Main Planning Document](https://docs.google.com/document/d/1paDFmk3kX-o9Q45evAMfVd8tZjEirqsEAmZTe9RDcCs/edit?usp=sharing)

[Server Repo:](https://github.com/Phebesue/WD-ReactLegacy-TS-GroceryInventoryServer)

[Client Repo:](https://github.com/Phebesue/WD-ReactLegacy-TS-GroceryInventoryClient)

[Trello:](https://trello.com/b/wbgjLbaB/grocery-inventory)

[XD-WireFrame:](https://xd.adobe.com/view/9c09e1c2-6b9a-4674-b20a-725f04318b7d-c95a/)

[DB Schema:](https://dbdiagram.io/d/5f72335b3a78976d7b7592d0)

[Deployed Client:](https://whats-for-dinner-client.herokuapp.com/)

[Deployed Server:](https://whats-for-dinner-server2.herokuapp.com/)

[Postman Endpoint Tests](https://documenter.getpostman.com/view/11529668/TVRq1RDU)



<hr />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
"# WD-ReactLegacy-TS-GroceryInventoryClient" 
