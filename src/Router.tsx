import { useContext } from 'react'
import { ConfigView } from './components/ConfigView'
import { CreateView } from './components/CreateView'
import { ProgressBar } from './components/ProgressBar'
import { UpdateView } from './components/UpdateView'
import { hitContext } from './contexts/hit'

export function Router() {
  const { isPending, isLoading, view } = useContext(hitContext)

  return (
    <div className="grid grid-rows-[auto_1fr] h-100vh gap-8 p-8">
      {isLoading && <ProgressBar />}
      {isPending || (
        <>
          {
            view === 'update' && <UpdateView />
          }
          {
            view === 'create' && <CreateView />
          }
          {
            view === 'config' && <ConfigView />
          }
        </>
      )}
    </div>
  )
}
