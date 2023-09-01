TO Run Application,

1. Using Docker:

Make sure Docker Desktop is installed in your machine.
In Root of project, open terminal and run following command-
docker-compose up -d

Images will be pulled and containers will be up and running
You will see application on http://localhost:3000 in browser


To stop containers,
docker-compose down

2. Local setup :
Open terminal in root of project and write following commands-
cd backend
npm i
node app.js
cd ../
cd client
npm i
npm run start

You will see application on http://localhost:3000 in browser
