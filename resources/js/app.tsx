import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';

const pages = import.meta.glob('./Pages/**/*.tsx');

createInertiaApp({
  progress: false,
  resolve: async (name) => {
    const path = `./Pages/${name}.tsx`;
    const loader = pages[path];
    if (!loader) {
      throw new Error(`Unknown Inertia page: ${name} (expected ${path})`);
    }
    const mod = (await loader()) as { default: ComponentType };
    return mod.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
