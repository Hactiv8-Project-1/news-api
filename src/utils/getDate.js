export const getDate = () => {
  const d = new Date()
  const to = d.toISOString().slice(0, 10)
  d.setMonth(d.getMonth() - 1)
  const from = d.toISOString().slice(0, 10)

  return {
    to: to,
    from: from,
  }
}