# Bala Yoga

www.balayoga.com.au

Bootstrapped with create-t3-app

## Getting started:

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
