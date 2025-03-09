import { Store } from '@tauri-apps/plugin-store'

export const logStore = await Store.load('store/log.json')
