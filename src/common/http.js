export async function createPostRequest(requestBody = {}, url) {
  const nbk = localStorage.getItem('nbk');
  const data = JSON.stringify({
    userName: nbk,
    ...requestBody,
  })
  const env ='dev'
  if (nbk !== undefined && nbk !== null) {
    const fetchURL = await fetch(`http://boa.co:3000/${env}.ficc.ui.middletier/`, {
      credentials: 'include',
    )}
    const response = await fetch(`${fetchURL.url}${env}.ficc.fictools.ui/${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: data
    })
    return response.json());
  }
}
