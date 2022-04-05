import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_API_KEY,
  authDomain: process.env.NUXT_ENV_AUTH_DOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASE_URL,
  projectId: process.env.NUXT_ENV_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER_ID,
  appId: process.env.NUXT_ENV_APP_ID,
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database }
