# angularjs-template
angular.js project initial template used gulp.js. Only you need to edit is in "src" directory and bark to "gulp".

# Gulp role
- jade & stylus compile
- js & css minify
- browser hot reload used browserSync

# Requirements
- npm
- bower(npm install -g bower)
- gulp.js(npm install -g gulp)

# Usage
```
npm install
bower install
gulp 
```

# Before "GULP" (your heart warm home)
```
src
├── jade
│   ├── index.jade
│   └── views
│       ├── layout.jade
│       ├── main.jade
│       └── setting.jade
├── js
│   ├── index.js
│   ├── main.js
│   └── setting.js
└── stylus
    └── main.styl
```

# After "GULP" (split family after earthquake)
```
app
├── bower_components
│   ├── angular
│   │   └── foobarbaz
│   └── angular-ui-router
│       └── spamhameggs
├── css
│   └── main.css
├── index.html
├── scripts
│   └── application.js
└── views
    ├── layout.html
    ├── main.html
    └── setting.html
```