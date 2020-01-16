# @fcannizzaro/react-use-cookie-watcher

> react hook to watch browser cookies

[![NPM](https://img.shields.io/npm/v/@fcannizzaro/react-use-cookie-watcher.svg)](https://www.npmjs.com/package/@fcannizzaro/react-use-cookie-watcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @fcannizzaro/react-use-cookie-watcher
```

## Usage

```jsx
import React, { Component } from 'react'

import { useCookieWatcher, useCookie } from '@fcannizzaro/react-use-cookie-watcher'

const Example = () => {

  // cookie existence
  const isNotExpired = useCookieWatcher('react-cookie', 500);

  // cookie value
  const cookie = useCookie('react-cookie');

  return <div>cookie {isNotExpired ? 'found' : 'not found'}</div>

}
```

## License

MIT © [fcannizzaro](https://github.com/fcannizzaro)
