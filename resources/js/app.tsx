import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import type { ComponentType } from 'react';

const pages = import.meta.glob('./Pages/**/*.tsx');

/** GitHub Pages is static HTML only — use full page loads instead of Inertia XHR. */
if (import.meta.env.VITE_GITHUB_PAGES === 'true') {
  document.addEventListener('inertia:before', (event) => {
    const visit = (event as CustomEvent<{ visit: { method: string; url: URL } }>).detail.visit;
    if (visit.method.toLowerCase() !== 'get') {
      return;
    }
    event.preventDefault();
    window.location.assign(visit.url.pathname + visit.url.search + visit.url.hash);
  });
}

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
