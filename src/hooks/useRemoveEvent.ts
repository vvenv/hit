import { useCallback, useState } from 'react'
import { eventStore } from '../store/event'
import { logStore } from '../store/log'

export function useRemoveEvent(name: string) {
  const [isLoading, setIsLoading] = useState(false)

  return {
    isLoading,
    mutateAsync: useCallback(async () => {
      setIsLoading(true)
      try {
        await eventStore.delete(name)
        logStore.delete(name)
      }
      catch {}
      setIsLoading(false)
    }, [name]),
  }
}
