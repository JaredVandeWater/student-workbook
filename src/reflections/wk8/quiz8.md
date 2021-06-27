# Deploying Applications

**1.** What is the package.json file used for?
<!-- enter you answer in the space below -->
```
That holds all the dependencies your project is using, it ensures that when you npm i, you get everything you need to make the project work.
``` 
**2.** At what level of your project do you need package.json when deploying your application? Why?
<!-- enter you answer in the space below -->
```
Top level, I think its because the deployment site will check for it so that it can install dependencies before anything else.
```
**3.** What command will ensure that your Vue code is compiled properly for deployment?
<!-- enter you answer in the space below -->
```
npm run build
```
**4.** _______ are used to provide your application with specific data based on it's environment. For example: connections strings, private keys or port. Fill in the blank.
<!-- enter you answer in the space below -->
```
env files
```
**5.** What are the two ways to view the logs from your Heroku app.
<!-- enter you answer in the space below -->
```
either inspect, or from the heroku log page.
```
**6.** How do you update an app already deployed on Heroku?
<!-- enter you answer in the space below -->
```
push a new build of it into your repository.
```
**7.** Why is branching important to version control?
<!-- enter you answer in the space below -->
```
keeps people from stepping on eachothers code, makes it easier to go back and undo things.
```
**8.** When should code review happen?
<!-- enter you answer in the space below -->
```
before merging any code.
```
**9.** What is the term used to define combining two branches?
<!-- enter you answer in the space below -->
```
merging I think.
```
