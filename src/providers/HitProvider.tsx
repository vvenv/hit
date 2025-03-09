import type { PropsWithChildren } from 'react'
import { useMemo, useState } from 'react'
import { hitContext } from '../contexts/hit'
import { useConfig } from '../hooks/useConfig'
import { useEvents } from '../hooks/useEvents'

export function HitProvider({ children }: PropsWithChildren) {
  const { config, setConfig } = useConfig()
  const { isPending, isLoading, events } = useEvents()
  const [_view, setView] = useState<View>('update')

  const value = useMemo(() => {
    const event = events.find(v => v.name === config.current) ?? events[0]
    return {
      isPending,
      isLoading,
      config,
      setConfig,
      events,
      event,
      view: !event ? 'create' : _view,
      setView,
    }
  }, [isPending, isLoading, config, setConfig, events, _view])

  return (
    <hitContext.Provider value={value}>
      {children}
    </hitContext.Provider>
  )
}
