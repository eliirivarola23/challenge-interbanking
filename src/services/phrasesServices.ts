import { callApi } from './utilServices';

export const phrasesServices = (callService => {
  const listPhrases = (data: object) => {
    return callService({
      endpoint: 'https://64ce632d0c01d81da3eec502.mockapi.io/api/v1/phrases',
      data,
    });
  };

  const phraseSave = (data: object) => {
    return callService({ endpoint: `https://64ce632d0c01d81da3eec502.mockapi.io/api/v1/phrases`, method: 'post', data });
  };

  return { listPhrases, phraseSave };
})(callApi);
