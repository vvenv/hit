import { Button, Field, Label, Switch } from '@headlessui/react'
import { useContext } from 'react'
import { hitContext } from '../contexts/hit'

export function ConfigView() {
  const { config, setConfig, setView } = useContext(hitContext)

  return (
    <>
      <header className="flex items-center gap-4">
        <Button
          className="p-3 btn-neutral"
          onClick={() => {
            setView('update')
          }}
        >
          <i className="i-hit-caret block size-4 rotate-90"></i>
        </Button>
        <h1 className="text-2xl">Preference</h1>
      </header>
      <main className="flex flex-col gap-4">
        <Field className="flex items-center justify-between">
          <Label htmlFor="sound">Sound</Label>
          <Switch
            className="group h-6 w-11 inline-flex items-center border border-neutral rounded-full bg-neutral transition data-[checked]:border-secondary data-[checked]:bg-secondary"
            id="sound"
            checked={config.sound}
            onChange={(sound) => {
              setConfig({ sound })
            }}
          >
            <span className="bg-neutral-contrast bg-opacity-neutral-contrast group-data-[checked]:bg-opacity-secondary-contrast size-4 translate-x-1 rounded-full transition group-data-[checked]:translate-x-6 group-data-[checked]:bg-secondary-contrast" />
          </Switch>
        </Field>
        <Field className="flex items-center justify-between">
          <Label htmlFor="vibrant">Vibrant</Label>
          <Switch
            className="group h-6 w-11 inline-flex items-center border border-neutral rounded-full bg-neutral transition data-[checked]:border-secondary data-[checked]:bg-secondary"
            id="vibrant"
            checked={config.vibrant}
            onChange={(vibrant) => {
              setConfig({ vibrant })
            }}
          >
            <span className="bg-neutral-contrast bg-opacity-neutral-contrast group-data-[checked]:bg-opacity-secondary-contrast size-4 translate-x-1 rounded-full transition group-data-[checked]:translate-x-6 group-data-[checked]:bg-secondary-contrast" />
          </Switch>
        </Field>
      </main>
    </>
  )
}
