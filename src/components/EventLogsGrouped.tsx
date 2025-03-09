import { groupBy } from 'lodash-es'
import { useContext, useMemo } from 'react'
import { hitContext } from '../contexts/hit'
import { useLogs } from '../hooks/useLogs'

export function EventLogsGrouped() {
  const { event } = useContext(hitContext)
  const logs = useLogs(event.name)

  const groupedLogs = useMemo(() => {
    return Object.entries(groupBy(logs, log => new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(log.time)))
  }, [logs])

  return groupedLogs.map(([time, _logs]) => (
    <li key={time} className="flex flex-col gap-1">
      <h3 className="font-mono">
        {time}
      </h3>
      <ul>
        {_logs.map(log => (
          <li key={time} className="flex items-center justify-between">
            <pre className="text-gray-5 font-mono">
              {formatChange(log)}
            </pre>
            <pre className="font-mono">
              {formatDelta(log)}
            </pre>
          </li>
        ))}
      </ul>
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
