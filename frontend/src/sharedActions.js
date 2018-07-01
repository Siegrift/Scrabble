export const setValue = (path, data, type) => ({
  type: type || 'Set data on path',
  payload: data,
  path,
  reducer: (state, data) => data,
})
