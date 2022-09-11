# @fcannizzaro/react-use-cookie-watcher

> react hook to watch browser cookies

[![NPM](https://img.shields.io/npm/v/@fcannizzaro/react-use-cookie-watcher.svg)](https://www.npmjs.com/package/@fcannizzaro/react-use-cookie-watcher) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @fcannizzaro/react-use-cookie-watcher
# yarn add @fcannizzaro/react-use-cookie-watcher
# pnpm add @fcannizzaro/react-use-cookie-watcher
```

## Usage

```jsx
import React, {Component} from 'react'

import {useCookieWatcher, useCookie} from '@fcannizzaro/react-use-cookie-watcher'

const Example = () => {

    // cookie existence
    const isNotExpired = useCookieWatcher('react-cookie', {
        // check for changes every 500ms
        checkEvery: 500
    });

    // cookie value (updated on change)
    const value = useCookieWatcher('react-cookie', {
        valueOnly: 500
    });

    // cookie value (at call time)
    const cookie = useCookie('react-cookie');

    return <div>
        <p>cookie {isNotExpired ? 'found' : 'not found'}</p>
        <p>cookie value = {value}</p>
    </div>

}
```

## 2.0.0 Breaking Changes

- added typescript support
- `useCookieWatcher` now can return a boolean value or a string value (if `valueOnly` is set to `true`)
- `useCookieWatcher` now accepts an options object as second parameter

## License

MIT © [fcannizzaro](https://github.com/fcannizzaro)
