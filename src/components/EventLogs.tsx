import { useState } from 'react'
import { EventLogsGrouped } from './EventLogsGrouped'
import { EventLogsStraight } from './EventLogsStraight'

export function EventLogs() {
  const [mode, setMode] = useState('straight')

  return (
    <ul
      className="flex flex-col cursor-default select-none gap-2 overflow-auto"
      onClick={() => {
        setMode(mode === 'grouped' ? 'straight' : 'grouped')
      }}
    >
      { mode === 'straight' ? <EventLogsStraight /> : <EventLogsGrouped />}
    </ul>
  )
}
