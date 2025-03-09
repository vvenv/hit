import type { PropsWithChildren } from 'react'
import { Button, Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useCallback, useMemo, useRef, useState } from 'react'
import { confirmContext } from '../contexts/confirm'

export function ConfirmProvider({ children }: PropsWithChildren) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [open, setOpen] = useState(false)

  const ref = useRef<{
    resolve?: (value: void) => void
    reject?: (reason: void) => void
  } | null>(null)

  const value = useMemo(() => ({
    confirm: (title: string, content: string) => {
      setTitle(title)
      setContent(content)
      setOpen(true)
      return new Promise<void>((resolve, reject) => {
        ref.current = {
          resolve,
          reject,
        }
      })
    },
  }), [])

  const cancel = useCallback(() => {
    setOpen(false)
    ref.current?.reject?.()
    ref.current = null
  }, [])

  const confirm = useCallback(() => {
    setOpen(false)
    ref.current?.resolve?.()
    ref.current = null
  }, [])

  return (
    <confirmContext.Provider value={value}>
      {children}
      <Dialog
        open={open}
        onClose={cancel}
        className="relative z-30"
        transition
      >
        <DialogBackdrop
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
          transition
        >
        </DialogBackdrop>
        <DialogPanel
          className="fixed left-1/2 top-1/2 z-20 flex flex-col gap-2 bg-default p-4 opacity-100 transition-all -translate-x-1/2 -translate-y-1/2 data-[closed]:opacity-0 data-[closed]:-translate-y-full"
          transition
        >
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <Description>
            {content}
          </Description>
          <div className="flex items-center justify-between gap-2">
            <Button
              className="rounded-md btn-neutral"
              onClick={cancel}
            >
              Cancel
            </Button>
            <Button
              className="rounded-md btn-danger"
              onClick={confirm}
            >
              Confirm
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </confirmContext.Provider>
  )
}
