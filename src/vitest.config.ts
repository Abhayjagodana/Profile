import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    testEnvironment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './src/SetupTest.ts', // assuming the test folder is in the root of our project
  }
} as UserConfig)