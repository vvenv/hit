import { ConfirmProvider } from './providers/ConfirmProvider'
import { HitProvider } from './providers/HitProvider'
import { Router } from './Router'

export function App() {
  return (
    <HitProvider>
      <ConfirmProvider>
        <Router />
      </ConfirmProvider>
    </HitProvider>
  )
}
