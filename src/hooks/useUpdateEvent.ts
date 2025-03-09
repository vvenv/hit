import { useCallback, useState } from 'react'
import { eventStore } from '../store/event'
import { logStore } from '../store/log'

export function useUpdateEvent(name: string) {
  const [isLoading, setIsLoading] = useState(false)

  return {
    isLoading,
    mutateAsync: useCallback(async (value: Partial<HitEvent> | ((v: HitEvent) => Partial<HitEvent>)) => {
      setIsLoading(true)
      try {
        const orig = await eventStore.get<HitEvent>(name)
        const diff = typeof value === 'function' ? value(orig!) : value
        const time = Date.now()
        await eventStore.set(name, { ...orig, ...diff, updatedAt: time })

        ;(async () => {
          logStore.set(name, [
            {
              from: orig
                && Object.keys(diff).reduce((acc, key) => ({
                  ...acc,
                  [key]: orig[key as keyof HitEvent],
                }), {} as Partial<HitEvent>),
              to: diff,
              time,
            },
            ...((await logStore.get<HitLog[]>(name)) ?? []),
          ])
        })()
      }
      catch {}
      setIsLoading(false)
    }, [name]),
  }
}
