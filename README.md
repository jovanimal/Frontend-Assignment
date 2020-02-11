This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [View the demo](https://reverent-bhabha-1b284d.netlify.com/)

### Installation 

```
//Clone this git repo:

git clone https://github.com/jovanimal/Frontend-Assignment.git

cd Frontend-Assignment/

npm start
```



Alternatively, you can install create-react-app by typing `npx create-react-app new-react-app` in command line and replace the src folder and run it.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### React Boilerplate

The reason for choosing create-react-app (CRA) over other React boilerplates is because it allows me to create a optimised production build setup with little to no configuration on my part. Undeniably there are advatanges in using other boilerplates (e.g. Next.js) when setting up certain parts of project configuration. 

However, CRA comes with linting and testing tools already configured, and it's fairly easy to add parts that I need only, for example, adding Redux to a CRA project, unlike most other boilerplates which often are over-engineered. Also, CRA is maintained by the creators of React and up to date.

### How I would improve my React app if I had more time

I would implement the app using MobX/Redux state management. As I am less familiar with MobX/Redux, I had built the app with Hooks which I'm more experienced in. The other thing that I would like to improve is the overall styling of the app. For example, I would have put in icons for the "Edit" and "Delete" buttons, adding prettier styling for "Add Character" row.

I would also implement some basic validation to the "Add Character" row that would prevent us from clicking the button until all the fields were filled out, or certain criteria such that only numbers can be added to the "Height" and "Mass" column. Lastly, to return an empty string for all 4 inputs after we click the "Add Character" button. 





