# README

Steps:
- set root route in config/routes.rb
- yarn add vue, yarn install
- bundle exec rails server
- in app/javascript/packs add app.js
- add to app/views/layouts/application.html.erb:
  - for js world/ webpacker: <%= javascript_pack_tag 'application' %>
  - for our specificapp: <%= javascript_pack_tag 'app' %>
- in config/webpack: add custom.js file to install min version of vue  & merge to environment.js
- add app.js file to app.js
- add documente event listener --> load AFTER the other stuff loaded
- add semantic ui to Gemfile & run bundle install
- add semantic ui to app/assets/stylesheets/application.css and rename to .scss for sass
- add css stylesheet content to welcome.scss

Create Database
- rails g scaffold Ad text background clicks:integer
- add to application.rb: config.api_only = true
--> scaffold only gives what we need for api
- now in db/migrate, add default: 0 to clicks
- run rails db:migrate
- see json data: http://localhost:3000/ads.json

Build API
- add features to app.js application
- remove config.api_only = true from config/applicaiton.rb
- vue.js site: we need sth that can talk to api
- crate app/javascript/packs/api.js file & reference it in application.html.erb
--> javascript api client in api.js file
- add RESt library: Axios (=requests in python?)
- yarn add axios
- in api create function that you can export (export function)
  - asynchronous: get request to ads.json, THEN to .then
  - javascript: promises, callback
  = 'then' takes output of outside function
- add API to app.js file: const Api = require('./api');
  --> provides all exported functions
- add the beforeMount() and listAds() functions to app.js --> populate the ads/ texts in the data

- add createText/ createAd function to api.js and app.js
- this.task becomes app.task because 'this' reference gets lost in .then()
- call list ads instead of pushing element
- add to app/controllers/ads_controller: skip_before_action :verify_authenticity_token (to loose requests restrictions)

- and more fun stuff.

AUTHENTICATION
https://gist.github.com/thebucknerlife/10090014

Click logs
rails g scaffold ClickLog user_id ad_id click:integer



This README would normally document whatever steps are necessary to get the
application up and running.





Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
