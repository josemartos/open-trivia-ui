# Open Trivia UI

> React, Next.js, ESlint, Sass, PostCSS

## Description

It consumes an [open trivia database](https://opentdb.com/api_config.php) to show questions filtered by category.

Although it is not necessary, I have included [redux](https://github.com/reduxjs/react-redux) (in the simplest possible way) for the sake of comparison with the new (and recently used) context API.
I have also included [redux-persist](https://github.com/rt2zz/redux-persist) to preserve information after page reload.
Note: For little examples like this, context is cleaner and more than enough. Redux is more verbose.

## Setup

install modules

```sh
npm install
```

development server

```sh
npm run dev
```

production / server

```sh
npm start
```

### Requirements

Node.js 10+

## To improve

- Loader
- Error handling
- Pagination
- Tests
- Mobile debug
