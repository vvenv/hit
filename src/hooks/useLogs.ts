import type { UnlistenFn } from '@tauri-apps/api/event'
import { useCallback, useEffect, useState } from 'react'
import { logStore } from '../store/log'

export function useLogs(name: string) {
  const [logs, setLogs] = useState<HitLog[]>([])

  const getLogs = useCallback(async () => {
    try {
      setLogs((await logStore.get<HitLog[]>(name)) ?? [])
    }
    catch {}
  }, [name])

  useEffect(() => {
    getLogs()

    let unsubscribe: UnlistenFn
    logStore.onChange(getLogs).then((v) => {
      unsubscribe = v
    })
    return () => {
      unsubscribe?.()
    }
  }, [getLogs])

  return logs
}
