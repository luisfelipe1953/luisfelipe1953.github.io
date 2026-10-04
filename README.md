# Felipe Betancur — Portafolio

Portafolio personal de Felipe Betancur, Full Stack Developer (Laravel, Node.js/TypeScript, Angular, Vue 3).
Publicado en https://luisfelipe1953.github.io/

Proyectos destacados: plataforma B2B de viajes Octopus (+50 proveedores, 50K búsquedas/día), dashboard de QA con Playwright, Hotel Intelligence Score, ERP DIAN y facturación municipal.

Hecho con **Vue 3**, **TypeScript** y **Vite**; animaciones con **GSAP** y **Lenis**, 3D con **three.js** y audio con **Howler**.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto **3000** |
| `npm run build` | `vue-tsc` y build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run typecheck` | Solo revisión de tipos |

## Contenido

- **Proyectos**: `src/content/projects/{es,en}/<slug>.ts`. Los slugs deben coincidir con `projectIds` en `src/content/projects/index.ts`.
- **Tarjetas de proyectos**: `src/content/projects/previews/`.
- **Textos**: `src/i18n/messages/namespaces/common/{es,en}.json`.

## Credits & Attribution

This project is based on the portfolio created and designed by David Heckhoff.

Original portfolio:
-> https://david-hckh.com
