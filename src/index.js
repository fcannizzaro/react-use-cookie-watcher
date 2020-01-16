import {useEffect, useState} from 'react'

const cookieExist = (cookie) => document.cookie.includes(cookie)

export const useCookieWatcher = (cookie, pollingRate = 250) => {

  // state for cookie existence
  const [exist, setExist] = useState(cookieExist(cookie))

  useEffect(() => {
    const interval = setInterval(() => setExist(cookieExist(cookie)), pollingRate)
    return () => clearInterval(interval)
  })

  return exist
}

export const useCookie = (cookie) => cookieExist(cookie)
