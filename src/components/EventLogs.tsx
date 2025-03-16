import { Input } from '@headlessui/react'
import { groupBy } from 'lodash-es'
import { memo, useContext, useMemo, useState } from 'react'
import { hitContext } from '../contexts/hit'
import { useLogs } from '../hooks/useLogs'
import { useUpdateLog } from '../hooks/useUpdateLog'

const LogItem = memo(({ event, log }: { event: HitEvent, log: HitLog }) => {
  const [isEdit, setIsEdit] = useState(false)
  const { mutateAsync } = useUpdateLog(event.name)

  return (
    <li
      className="grid grid-cols-[auto_2fr_2fr_1fr] cursor-pointer items-center gap-2"
      onClick={(e) => {
        e.stopPropagation()
        setIsEdit(!isEdit)
      }}
    >
      <i className={`${isEdit ? 'rotate-0' : '-rotate-90'} ${log.remark ? 'text-secondary' : ''} i-hit-caret block size-2 transition-transform`}></i>
      <span className="text-default/80 font-mono">
        {new Intl.DateTimeFormat('zh-CN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(log.time)}
      </span>
      <pre className="text-default/50 font-mono">
        {formatChange(log)}
      </pre>
      <pre className="text-right font-mono">
        {formatDelta(log)}
      </pre>
      {isEdit && (
        <Input
          className="col-span-4 mb-2 border border-neutral rounded-md bg-transparent px-4 py-2 text-default border-opacity-neutral"
          defaultValue={log.remark ?? ''}
          placeholder="Remark"
          onClick={(e) => {
            e.stopPropagation()
          }}
          onChange={(e) => {
            mutateAsync({
              ...log,
              remark: e.target.value.trim(),
            })
          }}
        />
      )}
    </li>
  )
}, ({ log: { remark: p = '' } }, { log: { remark: n = '' } }) => {
  return p === n
})

const LogGroup = memo(({ event, group: [title, logs], index }: { event: HitEvent, group: [string, HitLog[]], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <li className="flex flex-col gap-1">
      <h3
        className="flex cursor-pointer items-center gap-2 font-mono"
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <i className={`${isExpanded ? 'rotate-0' : '-rotate-90'} i-hit-caret block size-2 transition-transform`}></i>
        <span>{title}</span>
      </h3>
      {isExpanded && (
        <ul className="ml-4">
          {logs.map(log => (
            <LogItem key={log.time} event={event} log={log} />
          ))}
        </ul>
      )}
    </li>
  )
}, ({ group: [, p] }, { group: [, n] }) => {
  return p.map(({ remark = '' }) => remark).join(',') === n.map(({ remark = '' }) => remark).join(',')
})

export function EventLogs() {
  const { config, event } = useContext(hitContext)
  const logs = useLogs(event.name)

  const groupedLogs = useMemo(() => {
    return Object.entries(groupBy(logs, log => new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: config.weekday ? 'long' : undefined,
    }).format(log.time)))
  }, [config.weekday, logs])

  return (
    <ul
      className="flex flex-col cursor-default select-none gap-2 overflow-auto"
    >
      {groupedLogs.map((group, index) => (
        <LogGroup key={group[0]} event={event} group={group} index={index} />
      ))}
    </ul>
  )
}

function formatChange({ from, to }: HitLog) {
  return `${from?.value ?? '-'} → ${to.value!}`
}

function formatDelta({ from, to }: HitLog) {
  const delta = (to.value ?? 0) - (from?.value ?? 0)
  if (delta > 0) {
    return (
      <span className="text-primary">
        +
        {delta}
      </span>
    )
  }
  if (delta < 0) {
    return (
      <span className="text-danger">
        {delta}
      </span>
    )
  }
  return ''
}
