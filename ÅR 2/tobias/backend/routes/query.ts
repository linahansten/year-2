export default eventHandler((e) => {
    const query = getQuery(e)
    console.log(query)
    return query
  })