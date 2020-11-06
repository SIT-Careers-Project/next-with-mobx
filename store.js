import { createContext, useCallback } from 'react'
import { useObservable, useStaticRendering } from 'mobx-react-lite'

import { action } from 'mobx'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

let StoreContext = createContext()
let start
let stop
let store

function initializeData(initialData = store || {}) {
  const { lastUpdate = Date.now(), light } = initialData
  return {
    lastUpdate,
    light: Boolean(light),
  }
}

function InjectStoreContext({ children, initialData }) {
  store = useObservable(initializeData(initialData))
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export { InjectStoreContext, StoreContext, initializeData, start, stop, store }
