import { useCallback, useState } from 'react'
import { eventStore } from '../store/event'
import { logStore } from '../store/log'

export function useCreateEvent() {
  const [isLoading, setIsLoading] = useState(false)

  return {
    isLoading,
    mutateAsync: useCallback(async (name: string, value: Pick<HitEvent, 'name' | 'remark' | 'initialValue'>) => {
      setIsLoading(true)
      try {
        const time = Date.now()
        const diff = {
          ...value,
          value: value.initialValue,
        }
        await eventStore.set(name, {
          ...diff,
          created: time,
          updated: time,
        })

        ;(async () => {
          logStore.set(name, [
            {
              from: null,
              to: diff,
              time,
            },
          ])
        })()
      }
      catch {}
      setIsLoading(false)
    }, []),
  }
}
