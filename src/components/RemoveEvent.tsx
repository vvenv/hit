import { Button } from '@headlessui/react'
import { useRemoveEvent } from '../hooks/useRemoveEvent'

interface Props { className: string, disabled: boolean, event: HitEvent }

export function RemoveEvent({ className, disabled, event }: Props) {
  const { isLoading, mutateAsync } = useRemoveEvent(event.name)

  return (
    <Button
      className={`${className} rounded-full p-2 btn-danger`}
      disabled={disabled || isLoading}
      onClick={mutateAsync}
    >
      <i className="i-hit-trash block size-4"></i>
    </Button>
  )
}
