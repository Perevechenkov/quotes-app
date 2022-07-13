const FIREBASE_DOMAIN =
  'https://quotes-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/';

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'applicaton/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
}
