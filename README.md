ResollectProject
This is a react based project and web app that is both:
(i)Interactive
(ii)Mobile responsive
In Frontend part is a Portfolio Loan management UI that can be used by anyone for managing the loan data stored in table format along with basic CRUD features enabled by cross origin express middleware connecting our frontend to cloud MongoDB Atlas Database storing the data.
Tech Stack :
(A) Frontend: React components + Vite build for Fast updates and project management
(B) Backend: Express.js with Node.js and MongoDB (no SQL) CLoud database

Project Structure(Monorepo):
/project-root
│── /src
│ ├── /components(Header,Navbar,Sidebar,Table,Uploaddoc,AddData)
│ ├── /pages
│ ├── /styles
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│── package.json
│── vite.config.js
│── /backend 
|   |-- /models
│   ├── /Routes
|   |-- /Tests
│   ├── server.js
│   ├── package.json
│── .gitignore
│── README.md
This is how u can Run/Test Locally:
1) Clone the repository
2) Install dependencies [npm install (npm will install listed dependencies in the package.json)]
3) npm install to be done in backend directory seperately other than the root directory which has frontend
4) Running frontend with "npm run dev" in root directory
5) and Running backend with "npm start" in backend directory
Dont Forget to add the scripts in package.json to specify what command to run(frontend and backend can be run with same command this way for ur ease)
These are the scripts:
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "set NODE_ENV=test&& jest --forceExit --detectOpenHandles"
     }
These are the dependencies:
      "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "mongoose": "^8.13.0"
      },
      "devDependencies": {
        "jest": "^29.7.0",
        "supertest": "^7.1.0",
        "nodemon": "^3.1.0"
      }
Run tests with "npm test"
For Deployment, I have used
(i)Netlify for frontend (Live Link: https://resollectproject.netlify.app)
(ii) Render for Backend API endpoint which is then used in the frontend.
