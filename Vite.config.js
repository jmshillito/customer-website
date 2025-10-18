import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['preview--wonderfully-tremendous-target.mimo-machines.svc.cluster.local']
  }
})
