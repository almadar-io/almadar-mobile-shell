# @almadar/mobile-shell

React Native mobile shell template for Almadar compiler.

## Install

```bash
npm install
```

If `npm install` crashes with `TypeError: Cannot read properties of null (reading 'matches')` from `@npmcli/arborist`, nested `node_modules/` directories from a previous pnpm install are confusing npm's workspace linker. Clear them and retry:

```bash
npm run reinstall
```

Equivalent to `rm -rf node_modules packages/*/node_modules && npm install`.

## Overview

This is a shell template that the `orbital` compiler uses to generate React Native mobile applications from `.orb` schema files.

## Structure

```
├── packages/
│   ├── mobile/          # React Native client template
│   ├── server/          # Express server (copied from almadar-shell)
│   └── shared/          # Shared types
├── component-mapping.json  # Pattern → Component mapping
└── shell.toml             # Shell manifest
```

## Usage with Compiler

```bash
orbital compile app.orb --shell mobile -o ./output
```

This generates:
```
./output/
├── packages/
│   ├── mobile/src/generated/   # Generated pages, traits
│   ├── server/                 # Server (identical to web)
│   └── shared/                 # Shared types
```

## Component Mapping

Patterns are mapped to React Native components:

| Pattern | Component |
|---------|-----------|
| `entity-table` | `@almadar/mobile/components/organisms/EntityList` |
| `form-section` | `@almadar/mobile/components/organisms/FormSection` |
| `button` | `@almadar/mobile/components/atoms/Button` |

## Server

The server is identical to the web shell's server. It handles:
- State machine execution
- API routes (`/api/orbitals/:name/events`)
- Persistence

## Development

```bash
# Start both server and mobile
npm run dev

# Start only mobile
npm run ios
npm run android

# Lint
npm run lint
```

## License

BSL 1.1 (Business Source License). Converts to Apache 2.0 on 2030-02-01. Non-production use is free.
