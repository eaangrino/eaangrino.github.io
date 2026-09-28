# eaangrino.github.io — Next.js 16

Migración nativa del portafolio a Next.js 16 App Router con exportación estática para GitHub Pages.

## Requisitos
- Node.js 24
- pnpm 12.3.4

## Desarrollo
```bash
corepack enable
pnpm install
pnpm dev
```

## Validación
```bash
pnpm lint
pnpm test
pnpm build
pnpm check:seo
```

## Internacionalización
Las rutas públicas son `/es/` y `/en/`. La raíz `/` conserva el selector de idioma y no redirige automáticamente.

No se incluye `pnpm-lock.yaml` deliberadamente. Genéralo localmente con `pnpm install`.
