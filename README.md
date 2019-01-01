# burger
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

#### Usage

1) Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
2) Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
3) The app will store every burger in a database, whether devoured or not.

# Video Walkthrough


#### Directory structure

Files & Directories structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

