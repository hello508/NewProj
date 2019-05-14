import { LOAD_DATA } from './home.constants'

export function getData() {
  return (dispatch) => {
    /**
     * fetch(url).then((response) => response.json()).then((data) => {
     * dispatch({
     *  type: LOAD_DATA,
     *  rows: data
     * })})
     */
    dispatch({
      type: LOAD_DATA,
      rows: [{ name: 'Anil', age: 28 }, { name: 'harika', age: 26 }],
    })
  }
}
