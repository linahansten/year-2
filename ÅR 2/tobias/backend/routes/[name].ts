export default eventHandler((e) => {
    const name = getRouterParam(e, "name")
    return { data: `Hello ${name}!` }
  })