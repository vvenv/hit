import { useContext } from 'react'
import { hitContext } from '../contexts/hit'
import { useLogs } from '../hooks/useLogs'

export function EventLogsStraight() {
  const { event } = useContext(hitContext)
  const logs = useLogs(event.name)

  return logs.map(log => (
    <li key={log.time} className="flex items-center justify-between">
      <span className="font-mono">
        {new Intl.DateTimeFormat('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(log.time)}
      </span>
      <pre className="text-gray-5 font-mono">
        {formatChange(log)}
      </pre>
      <pre className="font-mono">
        {formatDelta(log)}
      </pre>
    </li>
  ))
}

function formatChange({ from, to }: HitLog) {
  return `${from?.value ?? '-'} → ${to.value!}`
}

function formatDelta({ from, to }: HitLog) {
  const delta = (to.value ?? 0) - (from?.value ?? 0)
  if (delta > 0) {
    return (
      <span className="text-green-6">
        +
        {delta}
      </span>
    )
  }
  if (delta < 0) {
    return (
      <span className="text-red-6">
        {delta}
      </span>
    )
  }
  return ''
}
