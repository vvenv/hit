import { useCallback, useState } from 'react'
import { logStore } from '../store/log'

export function useUpdateLog(name: HitEvent['name']) {
  const [isLoading, setIsLoading] = useState(false)

  return {
    isLoading,
    mutateAsync: useCallback(async (log: HitLog) => {
      setIsLoading(true)
      try {
        logStore.set(name, await logStore.get<HitLog[]>(name).then(v => v!.map(v => v.time === log.time ? log : v)))
      }
      catch {}
      setIsLoading(false)
    }, [name]),
  }
}
