import { Button, Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { confirmContext } from '../contexts/confirm'
import { hitContext } from '../contexts/hit'
import { useFeedback } from '../hooks/useFeedback'
import { useRemoveEvent } from '../hooks/useRemoveEvent'
import { useUpdateEvent } from '../hooks/useUpdateEvent'
import { EventLogs } from './EventLogs'

export function UpdateView() {
  const { config, event } = useContext(hitContext)
  const { confirm } = useContext(confirmContext)
  const [logsOpen, setLogsOpen] = useState(config.history)
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
            className="absolute inset-0 p-4 text-center text-9xl font-500 leading-none font-mono text-shadow-xl text-shadow-color-secondary"
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
            className="absolute right-1 top-1 rounded-full p-5 btn-ghost-danger"
            onClick={() => {
              confirm('Delete?', 'The event data will be lost after confirmation, are you sure?')
                .then(remove)
                .catch(() => {})
            }}
          >
            <i className="i-hit-trash block size-4"></i>
          </Button>
          <Button
            className="absolute left-1 top-1 rounded-full p-5 btn-ghost-secondary"
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
            className="absolute bottom-1 left-1 rounded-full p-5 btn-ghost-secondary"
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
            className="absolute bottom-1 right-1 rounded-full p-5 btn-ghost-secondary"
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

function Header() {
  const { setConfig, events, event, setView } = useContext(hitContext)

  return (
    <header className="flex items-center justify-between">
      <div className="relative">
        <Menu>
          <MenuButton
            className="group peer relative z-20 flex items-center justify-between gap-4 p-3 btn-neutral"
          >
            <span className="leading-none">{event.name}</span>
            <i className="i-hit-caret block size-4 transition-transform group-[[data-open]]:rotate-180"></i>
          </MenuButton>
          <div className="fixed inset-0 z-0 z-10 hidden backdrop-blur-2 peer-[[data-open]]:block"></div>
          <MenuItems
            className="absolute z-20 w-50vw flex flex-col translate-y-2 gap-1 rounded-md bg-neutral p-2 shadow-md"
          >
            {events.map(({ name }) => (
              <Fragment
                key={name}
              >
                <MenuItem>
                  <Button
                    className="w-full flex items-center justify-center gap-1 p-2 btn-neutral"
                    onClick={() => {
                      setConfig({ current: name })
                    }}
                  >
                    {name}
                  </Button>
                </MenuItem>
                <MenuSeparator className="b-b b-b-invert/10" />
              </Fragment>
            ))}
            <MenuItem>
              <Button
                className="w-full flex items-center justify-center gap-1 p-2 btn-primary"
                onClick={() => {
                  setView('create')
                }}
              >
                <i className="i-hit-plus block size-6"></i>
                <span>Create new</span>
              </Button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <Button
        className="p-3 btn-neutral"
        onClick={() => {
          setView('config')
        }}
      >
        <i className="i-hit-gear block size-4"></i>
      </Button>
    </header>
  )
}
