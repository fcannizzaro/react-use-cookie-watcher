import React, {useCallback} from 'react'
import {useCookieWatcher} from '@fcannizzaro/react-use-cookie-watcher'

const SAMPLE_COOKIE = 'react-cookie'

export default () => {

  const isNotExp = useCookieWatcher(SAMPLE_COOKIE, 500)

  const cookieApply = useCallback((remove) => {
    document.cookie = SAMPLE_COOKIE + (remove ? '=; Max-Age=-99999999;' : '=something')
  }, [])

  return <div>
    <button onClick={() => cookieApply(isNotExp)}><b>{isNotExp ? 'REMOVE' : 'SET'}</b> cookie</button>
    <div>cookie <b>{isNotExp ? 'found' : 'not found'}</b></div>
  </div>

}
