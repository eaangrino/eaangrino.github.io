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

`next build` genera el sitio estático en `out/`. El workflow de GitHub Pages despliega esa carpeta mediante GitHub Actions.

## Internacionalización
Las rutas públicas son `/es/` y `/en/`. La raíz `/` conserva el selector de idioma y no redirige automáticamente.

## Nota sobre el hero
El repositorio original contiene `public/portrait_hero_alt.png`, pero el conector usado para preparar esta migración no permite transferir bytes binarios de archivos PNG. Para no sustituir tu imagen por otra, el componente usa la URL `raw.githubusercontent.com` fijada al commit de `main` inspeccionado durante la migración (`6bd150e...`). Si quieres dejar el proyecto 100% autocontenido, copia ese PNG a `public/portrait_hero_alt.png` y cambia `HERO_IMAGE` en `components/HeroSection.tsx` a `/portrait_hero_alt.png`.

No se incluye `pnpm-lock.yaml` deliberadamente. Genéralo localmente con `pnpm install`.
