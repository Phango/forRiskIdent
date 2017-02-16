Build instructions

Set up MongoDB
1. Open a Terminal
2. Run `mongod` to start MongoDB

Set up backend
3. Unzip the archive
4. In a Terminal, cd to `path/to/challenge/backend`
5. Run `npm install`
6. Run `npm start`
7. Open a web browser and go to `localhost:8001` (or the mentioned terminal port)
From here you can start creating notifications. (Please note that this will overwrite mongo database named: 'riskIdentNotifications > notifications')

Set up frontend
8. Open a new terminal window
9. cd to `path/to/challenge/frontend`
10. Run `npm install` (will automatically run `bower install`)
11. Run `npm start`
12. Open another web browser tab or another web browser and go to `localhost:3000`
From here you can see the notifications being created from the backend. Since sockets.io is used,
the new notifications should show up in the frontend immeadiately after a database write.

Helper commands:
1. In either frontend or backend use command `gulp clean` to clean up `node_modules` and `bower_components`
2. Run `gulp` in frontend, to watch for changes in `components/` scss files and compiles to css

Frontend testing
1. For unit testing, Run `npm test`
2. For e2e testing, Run `npm run protractor`
