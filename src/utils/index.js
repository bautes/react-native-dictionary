export const hasManyWords = text => /(\s.*)/g.test(text.trim())
export const isValidString = text => /[^\d]+/g.test(text.trim())
export const json2uri = data => Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&')
