import { Button, Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { hitContext } from '../contexts/hit'

export function Header() {
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
