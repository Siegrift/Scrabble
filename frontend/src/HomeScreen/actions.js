export const createGame = () => async (dispatch, getState, {api, history}) => {
  const gameId = await api.createGame()
  history.push(`game/${gameId}`)
}
