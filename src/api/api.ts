import { callApi } from '../utils/api'

export const makeSearch = (value: string) => {
  return callApi('get', `http://api.tvmaze.com/search/shows?q=${value}`)
    .then(data => {
      return data
    })
    .catch(err => {
      return err
    })
}
