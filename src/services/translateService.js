import { getYandexDictionary, formatYandexDictionaryResponse, formatYandexDictionaryError, getYandexTranslation, formatYandexTranslationResponse, formatYandexTranslationError } from './yandex'
import { getGoogleTranslation } from './google'
import { getAnthonyms } from './wordsapi'
import { isValidString, hasManyWords } from 'utils'
import { noop, sortBy } from 'lodash'
import { languageList } from './yandex/languages'

export const defineOrTranslate = (text, target, successFn, failureFn) => {
  if (!isValidString(text)) return

  if (hasManyWords(text))
    translateText(text, target, successFn, failureFn)
  else
    defineWord(text, target, successFn, failureFn)
}

export const defineWord = (word, from, to, successFn, failureFn) => {
  let getAnthonymsFn = getAnthonyms(to)
  return getYandexDictionary(word, [from, to].join('-'))
    .then(response => {
      successFn(formatYandexDictionaryResponse(response))
    })
    .then(() => getAnthonymsFn(word))
    .then(results => console.log("here", results))
    .catch(error => {
      console.log("error", error)
      failureFn(formatYandexDictionaryError(error))
    })
}

export const translateText = (text, target, successFn, failureFn) => {
  getYandexTranslation(text, target)
    .then(response => {
      console.log("response", response)
      successFn(formatYandexTranslationResponse(response))
    })
    .catch(error => {
      console.log("error", error)
      failureFn(formatYandexTranslationError(error))
    })
}

export const sortLanguages = ([a0, a1, a2 = 2], [b0, b1, b2 = 999]) => (`${a2}${a0}` < `${b2}${b0}` ? -1 : 1)
export const getLanguagesList = new Promise.resolve(languageList.sort(sortLanguages))
