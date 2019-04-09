export const getGoogleTranslation = (text, target) => fetch('https://translation.googleapis.com/language/translate/v2', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'q': text,
    'target': target,
  }),
});
