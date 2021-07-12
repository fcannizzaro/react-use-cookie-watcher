import {useEffect, useState} from 'react'

const cookies = () => Object.fromEntries(document.cookie.split(';').map(it => {
  const [key, value] = it.split('=')
  return [key.trim(), value]
}))

const cookieExist = (cookie) => !!cookies()[cookie]

export const useCookieWatcher = (cookie, pollingRate = 250) => {

  // state for cookie existence
  const [exist, setExist] = useState(cookieExist(cookie))

  useEffect(() => {
    const interval = setInterval(() => setExist(cookieExist(cookie)), pollingRate)
    return () => clearInterval(interval)
  })

  return exist
}

export const useCookie = (cookie) => cookies()[cookie]
