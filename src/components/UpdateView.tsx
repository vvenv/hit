import { Button } from '@headlessui/react'
import { useContext, useState } from 'react'
import { confirmContext } from '../contexts/confirm'
import { hitContext } from '../contexts/hit'
import { useFeedback } from '../hooks/useFeedback'
import { useRemoveEvent } from '../hooks/useRemoveEvent'
import { useUpdateEvent } from '../hooks/useUpdateEvent'
import { EventLogs } from './EventLogs'
import { Header } from './Header'

export function UpdateView() {
  const { event } = useContext(hitContext)
  const { confirm } = useContext(confirmContext)
  const [logsOpen, setLogsOpen] = useState(false)
  const { mutateAsync: update } = useUpdateEvent(event.name)
  const { mutateAsync: remove } = useRemoveEvent(event.name)

  const feedback = useFeedback()

  return (
    <>
      <Header />
      <main className="grid grid-rows-[auto_1fr] min-h-0 gap-8">
        <div
          className="relative h-0 rounded-md pt-full outline-1 outline-divider outline-solid"
        >
          <Button
            className="absolute inset-0 p-4 text-center text-9xl font-500 leading-none font-mono text-shadow-lg text-shadow-color-cyan"
            onClick={() => {
              update(v => ({
                value: v.value + 1,
              }))
              feedback()
            }}
          >
            {event.value}
          </Button>
          <Button
            className="absolute right-1 top-1 rounded-full p-2 btn-ghost-danger"
            onClick={() => {
              confirm('Delete?', 'The event data will be lost after confirmation, are you sure?')
                .then(remove)
                .catch(() => {})
            }}
          >
            <i className="i-hit-trash block size-4"></i>
          </Button>
          <Button
            className="absolute left-1 top-1 rounded-full p-2 btn-ghost-secondary"
            disabled={event.value === event.initialValue}
            onClick={() => {
              update(v => ({
                value: v.initialValue,
              }))
              feedback()
            }}
          >
            <i className="i-hit-reset block size-4"></i>
          </Button>
          <Button
            className="absolute bottom-1 left-1 rounded-full p-2 btn-ghost-secondary"
            onClick={() => {
              update(v => ({
                value: v.value - 1,
              }))
              feedback()
            }}
          >
            <i className="i-hit-minus block size-4"></i>
          </Button>
          <Button
            className="absolute bottom-1 right-1 rounded-full p-2 btn-ghost-secondary"
            onClick={() => {
              setLogsOpen(!logsOpen)
            }}
          >
            <i className="i-hit-history block size-4"></i>
          </Button>
        </div>
        {logsOpen && (
          <EventLogs />
        )}
      </main>
    </>
  )
}
