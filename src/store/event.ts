import { Store } from '@tauri-apps/plugin-store'

export const eventStore = await Store.load('store/event.json')
