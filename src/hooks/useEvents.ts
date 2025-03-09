import type { UnlistenFn } from '@tauri-apps/api/event'
import { useCallback, useEffect, useState } from 'react'
import { eventStore } from '../store/event'

export function useEvents() {
  const [isPending, setIsPending] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState<HitEvent[]>([])

  const getEvents = useCallback(async () => {
    setIsLoading(true)
    try {
      setEvents(await eventStore.values<HitEvent>())
    }
    catch {}
    setIsLoading(false)
    setIsPending(false)
  }, [])

  useEffect(() => {
    getEvents()

    let unsubscribe: UnlistenFn
    eventStore.onChange(getEvents).then((v) => {
      unsubscribe = v
    })
    return () => {
      unsubscribe?.()
    }
  }, [getEvents])

  return {
    isPending,
    isLoading,
    events,
  }
}
