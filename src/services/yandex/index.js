
import { json2uri } from 'utils'
import { fromPairs, toPairs, get, isFunction, isEmpty, compact, map } from 'lodash'

const YANDEX_DICTIONARY = 'dict.1.1.20190407T214906Z.15074c5961319017.82bf9dfcbf66390e1ea267139d45c44eb9337332'
const YANDEX_TRANSLATOR = 'trnsl.1.1.20190404T133118Z.c4441c3a13095799.3452cf1e2d180a082f436485ed5ca67e861e5dcc'

export const ATTRIBUTE_MAP = {
  YANDEX_DICTIONARY_EX_RESPONSE: toPairs({
    text: 'text',
    translate: item => map(get(item, 'tr', []), 'text'),
  }),
  YANDEX_DICTIONARY_TR_RESPONSE: toPairs({
    translation: 'text',
    gender: 'gen',
    grammar: 'pos',
    synonyms: item => map(get(item, 'syn', []), 'text'),
    meanings: item => map(get(item, 'mean', []), 'text'),
    examples: item => mapAttributes(ATTRIBUTE_MAP.YANDEX_DICTIONARY_EX_RESPONSE)(get(item, 'ex', []))
  }),
  YANDEX_DICTIONARY_ROOT_RESPONSE: toPairs({
    original: 'text',
    pronounce: 'ts',
    translations: item => mapAttributes(ATTRIBUTE_MAP.YANDEX_DICTIONARY_TR_RESPONSE)(get(item, 'tr', [])),
  })
}

export const mapAttributes = attributesMap => definitions => definitions.map(
  item => fromPairs(compact(attributesMap.map(
    ([keyTarget, keySource]) => {
      const value = isFunction(keySource) ? keySource(item) : get(item, keySource, '')
      return isEmpty(value) ? null : [keyTarget, value]
    })))
)

export const formatYandexDictionaryResponse = response => {
  const body = get(response, '_bodyInit', {})
  const definitions = get(JSON.parse(body), 'def', [])
  return mapAttributes(ATTRIBUTE_MAP.YANDEX_DICTIONARY_ROOT_RESPONSE)(definitions)
}

export const formatYandexDictionaryError = response => response

export const getYandexDictionary = (text, target) => {
  const params = json2uri({
    'key': YANDEX_DICTIONARY,
    'text': text,
    'lang': target,
  })
  const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?${params}`
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
