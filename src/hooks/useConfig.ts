import type { UnlistenFn } from '@tauri-apps/api/event'
import { useCallback, useEffect, useState } from 'react'
import { store } from '../store/store'

const defaultConfig: HitConfig = {
  current: null,
  sound: false,
  vibrant: false,
}

export function useConfig() {
  const [config, setConfig] = useState(defaultConfig)

  const getConfig = useCallback(async () => {
    try {
      setConfig((await store.get<HitConfig>('config')) ?? defaultConfig)
    }
    catch {}
  }, [])

  useEffect(() => {
    getConfig()

    let unsubscribe: UnlistenFn
    store.onChange(getConfig).then((v) => {
      unsubscribe = v
    })
    return () => {
      unsubscribe?.()
    }
  }, [getConfig])

  return {
    config,
    setConfig: useCallback((value: Partial<HitConfig>) => {
      const newConfig = { ...config, ...value }
      setConfig({ ...newConfig })
      store.set('config', newConfig)
    }, [config]),
  }
}
