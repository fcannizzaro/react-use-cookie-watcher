# @fcannizzaro/react-use-cookie-watcher

> react hook to watch browser cookies

[![NPM](https://img.shields.io/npm/v/@fcannizzaro/react-use-cookie-watcher.svg)](https://www.npmjs.com/package/@fcannizzaro/react-use-cookie-watcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @fcannizzaro/react-use-cookie-watcher
```

## Usage

```jsx
import React, { Component } from 'react'

import { useCookieWatcher } from '@fcannizzaro/react-use-cookie-watcher'

const Example = () => {

  const isCookieNotExpired = useCookieWatcher('react-cookie', 500);

  return <div>cookie {isCookieNotExpired ? 'found' : 'not found'}</div>

}
```

## License

MIT © [fcannizzaro](https://github.com/fcannizzaro)
