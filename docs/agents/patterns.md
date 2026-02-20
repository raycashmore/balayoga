# Common Patterns

Server component data fetching:
- Fetch data in the page component
- Pass data into the component tree

Payload block rendering:
- Use `<BlockRenderer layout={page.layout} />`

tRPC client usage:
- Use `api.<router>.<procedure>.useQuery()`
