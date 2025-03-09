import { Button, Input, Textarea } from '@headlessui/react'
import { useContext, useState } from 'react'
import { hitContext } from '../contexts/hit'
import { useCreateEvent } from '../hooks/useCreateEvent'

export function CreateView() {
  const [name, setName] = useState('')
  const [remark, setRemark] = useState('')
  const [initialValue, setInitialValue] = useState(0)

  const { setConfig, events, setView } = useContext(hitContext)

  const { isLoading, mutateAsync } = useCreateEvent()

  return (
    <div
      className="h-100vh flex flex-col justify-center justify-items-stretch gap-4 -my-8"
    >
      <h2 className="text-center text-2xl">New Event</h2>
      <Input
        className="border-opacity-neutral w-full border border-neutral rounded-md bg-transparent px-5 py-3 text-center text-default"
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => {
          setName(e.target.value.trim())
        }}
      />
      <Textarea
        className="border-opacity-neutral w-full border border-neutral rounded-md bg-transparent px-5 py-3 text-center text-default"
        placeholder="Remark"
        rows={2}
        value={remark}
        onChange={(e) => {
          setRemark(e.target.value.trim())
        }}
      />
      <Input
        className="border-opacity-neutral w-full border border-neutral rounded-md bg-transparent px-5 py-3 text-center text-default"
        type="number"
        placeholder="Initial value"
        value={initialValue}
        onChange={(e) => {
          setInitialValue(Number.parseInt(e.target.value))
        }}
      />
      <Button
        className="btn-primary"
        disabled={name === '' || isLoading}
        onClick={async () => {
          await mutateAsync(name, {
            name,
            remark,
            initialValue,
          })
          setConfig({ current: name })
          setView('update')
        }}
      >
        Create
      </Button>
      <Button
        className="btn-secondary"
        disabled={name === '' || isLoading}
      >
        Create
      </Button>
      <Button
        className="btn-neutral"
        disabled={name === '' || isLoading}
      >
        Create
      </Button>
      <Button
        className="btn-danger"
        disabled={name === '' || isLoading}
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
