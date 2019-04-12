export const hasManyWords = text => /(\s.*)/g.test(text.trim())
export const isValidString = text => /[^\d]+/g.test(text.trim())
export const json2uri = data => Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&')


const GRAMMAR_MAPS = {
  YANDEX: {
    adjective: 'adj',
    noun: 'noun',
    verb: 'verb',
    adverb: 'adv'
  }
}
export const grammarMapper = (key, src) => (GRAMMAR_MAPS[src][key] || key)
