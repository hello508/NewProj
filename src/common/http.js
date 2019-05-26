export function createPostRequest(requestBody = {}) {
  const nbk = localStorage.getItem('nbk');
  if (nbk !== undefined && nbk !== null) {
    const settings = {
      body: JSON.stringify({
        nbk,
        ...requestBody,
      }),
      cache: 'no-cache',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
    return fetch('url', settings).then(response => response.json());
  }
}
