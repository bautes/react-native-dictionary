
import { json2uri } from 'utils'
import get from 'lodash/get'

const YANDEX_DICTIONARY = 'dict.1.1.20190407T214906Z.15074c5961319017.82bf9dfcbf66390e1ea267139d45c44eb9337332'
const YANDEX_TRANSLATOR = 'trnsl.1.1.20190404T133118Z.c4441c3a13095799.3452cf1e2d180a082f436485ed5ca67e861e5dcc'

export const formatYandexDictionaryResponse = response => {
  const body = get(response, '_bodyInit', {})
  return JSON.parse(body)
}
export const formatYandexDictionaryError = response => response

export const getYandexDictionary = (text, target) => {
  const params = json2uri({
    'key': YANDEX_DICTIONARY,
    'text': text,
    'lang': target,
  })
  const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?${params}`
  console.log(url)
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': '*/*'
    }
  })
}
export const formatYandexTranslationResponse = response => response
export const formatYandexTranslationError = response => response

export const getYandexTranslation = (text, target) => fetch('https://translate.yandex.net/api/v1.5/tr.json/translate', {
  method: 'POST',
  headers: {
    'Accept': '*/*',
    'Content-Length': text.length.toString(),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: json2uri({
    'key': YANDEX_TRANSLATOR,
    'text': text,
    'lang': target,
    'format': 'plain',
  }),
});
