const FIREBASE_DOMAIN =
  'https://quotes-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/';

const factory = (
  cb,
  {
    dbDomain = FIREBASE_DOMAIN,
    method = 'GET',
    folder = 'quotes',
    headers = {
      'Content-Type': 'applicaton/json',
    },
  } = {}
) => {
  return async ({ body = null, file = '', inputData = null } = {}) => {
    if (file) {
      file = '/' + file;
    }
    const url = `${dbDomain}/${folder}${file}.json`;

    const response = await fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : body,
      headers: headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    if (cb) {
      return cb(data, inputData);
    }
    return null;
  };
};

const getTransformedData = data => {
  const transformedData = [];

  for (const key in data) {
    transformedData.push({
      id: key,
      ...data[key],
    });
  }

  return transformedData;
};

export const getAllQuotes = factory(getTransformedData);

export const getSingleQuote = factory((data, id) => {
  return { id, ...data };
});

export const addQuote = factory(null, { method: 'POST' });

export const addComment = factory(null, { method: 'POST', folder: 'comments' });

export const getAllComments = factory(getTransformedData, {
  folder: 'comments',
});
