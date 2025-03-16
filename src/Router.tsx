import { useContext } from 'react'
import { ConfigView } from './components/ConfigView'
import { CreateView } from './components/CreateView'
import { UpdateView } from './components/UpdateView'
import { hitContext } from './contexts/hit'

export function Router() {
  const { isPending, isLoading, view } = useContext(hitContext)

  return (
    <div className="grid grid-rows-[auto_1fr] h-100vh gap-8 p-8">
      {isLoading && <div className="progress fixed left-0 right-0 top-0 h-0.5 bg-invert/10"></div>}
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
