import { Button } from '@headlessui/react'
import { useContext, useState } from 'react'
import { hitContext } from '../contexts/hit'
import { useCreateEvent } from '../hooks/useCreateEvent'
import { ComboInput } from './ComboInput'

export function CreateView() {
  const [name, setName] = useState('')
  const [remark, setRemark] = useState('')
  const [initialValue, setInitialValue] = useState(0)
  const [defaultStep, setDefaultStep] = useState(1)

  const { setConfig, events, setView } = useContext(hitContext)

  const { isLoading, mutateAsync } = useCreateEvent()

  return (
    <div
      className="h-100vh flex flex-col justify-center justify-items-stretch gap-4 -my-8"
    >
      <h2 className="text-center text-2xl">New Event</h2>
      <ComboInput
        label="Name"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value.trim())
        }}
      />
      <ComboInput
        multiple
        label="Remark"
        value={remark}
        onChange={(e) => {
          setRemark(e.target.value.trim())
        }}
      />
      <div className="flex items-center gap-4">
        <ComboInput
          type="number"
          label="Initial value"
          value={initialValue}
          onChange={(e) => {
            setInitialValue(Number.parseInt(e.target.value))
          }}
        />
        <ComboInput
          type="number"
          label="Default step"
          value={defaultStep}
          onChange={(e) => {
            setDefaultStep(Number.parseInt(e.target.value))
          }}
        />
      </div>
      <Button
        className="btn-primary"
        disabled={name === '' || isLoading}
        onClick={async () => {
          await mutateAsync(name, {
            name,
            remark,
            initialValue,
            defaultStep,
          })
          setConfig({ current: name })
          setView('update')
        }}
      >
        Create
      </Button>
      {events.length > 0 && (
        <Button
          className="btn-ghost-secondary"
          disabled={isLoading}
          onClick={() => {
            setView('update')
          }}
        >
          Cancel
        </Button>
      )}
    </div>
  )
}
