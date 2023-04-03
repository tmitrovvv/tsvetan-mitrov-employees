### Start development mode
The App is created with create-react-app
This project use latest recommended Node version - 18.15.0

### Step 1: Install and switch to Node version 18.15.0
### Step 2: Run command - `npm install`
### Step 3: Run command - `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build app for production - `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### The purpose of this application
This application will show pair of employees who have worked together on common projects for the longest time
CSV file should be in format `EmpID, ProjectID, DateFrom, DateTo`
Example 1: 
143, 12, 2013-11-01, 2014-01-05
218, 10, 2012-05-16, NULL
143, 10, 2009-01-01, 2011-04-27
300, 10, 2011-02-07, 2013-04-15
400, 77, 2010-05-01, 2011-05-01
500, 77, 2010-05-01, 2010-05-31
400, 21, 2012-01-01, 2014-01-01
500, 21, 2012-06-01, 2014-01-01
400, 9, 2015-03-01, 2016-02-15
500, 9, 2016-05-01, 2018-01-01

Expected Output: 
Employee ID #1	Employee ID #2	Project ID	Days Worked
400	            500	            77          30
400	            500	            21          580

Example 2: 
143, 12, 2013/11/01 , NULL
218, 10, 2012/05/16, NULL
143, 10, 2009/01/01, 2011/04/27
300, 10, 2011/02/07, 2013/04/15
218, 12, 2011/11/1, NULL
400, 77, 2010/05/01, 2011/05/01
500, 77, 2010/05/01, 2010/06/01
400, 21, 2012/01/01, 2014/01/01
500, 21, 2012/06/01, 2014/01/01
400, 9, 2015/03/01, 2016/02/15
500, 9, 2016/05/01, 2018/01/01

Expected Output: 
Employee ID #1	Employee ID #2	Project ID	Days Worked
143	            218	            12	        3440
