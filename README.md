# Bala Yoga

www.balayoga.com.au

Bootstrapped with create-t3-app

## Quick Start Local:

1. Start balayoga-postgres docker container 
2. pnpm dev

## Development:

Start local postgres db (docker): 

```
pnpm db:start
```

Start dev server:
```
pnpm dev
```

## Payload CMS

Generate payload boilerplate

```
pnpm payload:types
pnpm payload:importmap
```

## Deployment

1. Create a DB migration

```
pnpm payload:migrate
```

The github action will run the migrations on deploy
