
const getUSSynonyms = text => {
  const KEY = "614b79e90b7266d3eb4a658d08edc610"
  let url = `http://words.bighugelabs.com/api/2/${KEY}/${text}/json`
  console.log("url", url)
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': '*/*'
    }
  })
}

export const getAnthonyms = (lang) => {
  switch (lang) {
    default:
      return getUSSynonyms
  }
}
