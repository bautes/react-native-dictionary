import { getYandexDictionary, formatYandexDictionaryResponse, formatYandexDictionaryError, getYandexTranslation, formatYandexTranslationResponse, formatYandexTranslationError } from './yandex'
import { getGoogleTranslation } from './google'
import { isValidString, hasManyWords } from 'utils'

export const defineOrTranslate = (text, target, successFn, failureFn) => {
  if (!isValidString(text)) return

  if (hasManyWords(text))
    translateText(text, target, successFn, failureFn)
  else
    defineWord(text, target, successFn, failureFn)
}

export const defineWord = (text, target, successFn, failureFn) => {
  getYandexDictionary(text, target)
    .then(response => {
      successFn(formatYandexDictionaryResponse(response))
    })
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
