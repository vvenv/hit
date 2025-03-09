import { impactFeedback, vibrate } from '@tauri-apps/plugin-haptics'
import { useCallback, useContext } from 'react'
import { hitContext } from '../contexts/hit'

export function useFeedback() {
  const { config } = useContext(hitContext)
  return useCallback(() => {
    if (config.sound) {
      impactFeedback('light')
    }
    if (config.vibrant) {
      vibrate(1)
    }
  }, [config.sound, config.vibrant])
}
