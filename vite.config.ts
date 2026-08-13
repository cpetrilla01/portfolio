/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // todo: remove this resolve when MUI updates their imports
  //   https://github.com/mui/material-ui/issues/48636
  resolve: {
    alias: {
      // Intercepts the broken MUI subpath and forces the explicit ESM file extension
      'react-transition-group/TransitionGroupContext':
        'react-transition-group/esm/TransitionGroupContext.js',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // todo: remove this server when MUI updates their imports
    //   https://github.com/mui/material-ui/issues/48636
    server: {
      deps: {
        // Forces Vitest to run these libraries through Vite's resolver pipeline
        inline: ['@mui/material', 'react-transition-group'],
      },
    },
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      enabled: true,
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
        perFile: true,
      },
    },
  },
});
