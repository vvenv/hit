/// <reference types="vite/client" />

type View = 'create' | 'update' | 'config'

interface HitContext {
  isPending: boolean
  isLoading: boolean
  config: HitConfig
  setConfig: (v: Partial<HitConfig>) => void
  events: HitEvent[]
  event: HitEvent
  view: View
  setView: React.Dispatch<React.SetStateAction<View>>
}

interface ConfirmContext {
  confirm: (text: string, content: string) => Promise<void>
}

interface HitConfig {
  current: string | null
  sound: boolean
  vibrant: boolean
  history: boolean
  weekday: boolean
}

interface HitEvent {
  name: string
  remark: string
  value: number
  initialValue: number
  defaultStep: number
  created: number
  updated: number
}

interface HitLog {
  from: Partial<HitEvent> | null
  to: Partial<HitEvent>
  time: number
  remark?: string
}
