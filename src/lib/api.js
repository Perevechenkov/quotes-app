const FIREBASE_DOMAIN =
  'https://quotes-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  const transformedQuotes = [];

  for (const key in data) {
    transformedQuotes.push({
      id: key,
      ...data[key],
    });
  }

  return transformedQuotes;
}

export async function getSingleQuote(id) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${id}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return {
    id,
    ...data,
  };
}

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

  return null;
}
