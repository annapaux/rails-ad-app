# Welcome!

Want to know how well your ads are working? Testing features individually is the way to go. This app aims to be a tiny version of a minimum viable product of a product that does exactly that - Marpipe (https://www.marpipe.com/).

This is a web app with basic CRUD operations using REST API. It uses Ruby on Rails in the backend and VueJs on the front end.

You can check out the deployed app here: https://adrater.herokuapp.com

![alt text](https://github.com/annapaux/rails-ad-app/blob/master/readme_picture.png)


# Run the app locally
Here are some pointers to help you set it up. (MacOS 10.14.3.)

### activate the environment and install ruby, rails, bundler
Note: You should install Ruby before
```
rbenv install 2.5.3
gem install rails -v 5.2.3
gem install bundler -v 1.17.1
```
### Create the app
```
yarn add vue
yarn add axios
yarn install
bundle install
rake db:migrate
bundle exec rails server
```
### View the app
Go to:
http://localhost:3000/


# App Components & Comments

### Features
As a user, you can create 'ads' by choosing a text, a background color and an icon. With the arrows you can up-vote and down-vote ads. With the trashcan you can delete ads.

On the right hand side you can choose to see the analytics, which at this point simply shows the features of the best-voted ad. This could inform you on what ad works best.

You can also view the logs, which show what ads have been created, up/down voted and deleted in the past. Anonymized by showing only the user id and not the name.


### Project Requirements
REST API: following POST/PUT/DELETE requests are done using the restful js HTTP client axios

CRUD operations:
- create ads (text, background color, icon)
- read ads and logs
- update status with votes
- delete ads

Resources:
- User (name, email, password)
- Ad (id, text, background color, icon, clicks)
- Activity Logs (ad id, user id, action, click)

A Many-to-Many relationship manifests itself between logs and ads, and is recorded in the activity logs. Each ad may be voted on by many users, and each user may vote on many ads.

User authentication:
Users are authenticated using the bcrypt Gem. Users need to provide a name, email address and password. To keep it as simple as possible, none of these are verified.

Front end UI:
Semantic UI is used to enhance the VueJS frontend, particularly for the icons.

Deployment:
The app is deployed using Heroku (the free version though, so it will break easily).


### Other
If you inspect the website, you can see extensive logs in the console. This should provide some visibility to what is happening on the backend. Probably should be changed for a production version.

The user authentication is also incredibly simple right now, with no verification for email address for example. Also space for improvement here.

Currently everyone who creates an account has equal rights to edit all ads. This requires trust among the users since one could delete all ads of all others. E.g. delete rights could be restricted to authors in a future version.


### Key Files 
- `app/views/welcome/home.html.erb` --> main page HTML code (shows ads etc.)
- `app/javascript/packs/app.js` --> main VueJS file that contains the app variable referenced in the `home.html.erb` file
- `app/javascript/packs/api.js` --> functions for API calls referenced in `app.js` file
-  `db/schema.rb` --> contains schema for database


### Resources
Resources I found helpful along the way:

- Rails & VueJS intro: https://www.udemy.com/course/ruby-on-rails-react-angular/
- class bindings: https://reactgo.com/vuejs-class-style-bindings-tutorial/
- vue js form input bindings: https://vuejs.org/v2/guide/forms.html
- semantic ui icons: https://semantic-ui.com/elements/icon.html#users--people
- authorization: https://gist.github.com/thebucknerlife/10090014
- cookies/ session in javascript: https://stackoverflow.com/questions/29737384/accessing-current-user-variable-from-application-js-in-rails-3
