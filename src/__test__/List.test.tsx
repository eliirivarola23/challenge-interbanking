import { cleanup, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as ReactRouterDom from 'react-router-dom';
import List from '../components/List';
import { phrasesServices } from '../services/phrasesServices';

jest.mock('react-router-dom');
const useLocationMock = jest.spyOn(ReactRouterDom, 'useLocation');
afterEach(cleanup);

describe('List', () => {
  beforeEach(() => {
    useLocationMock.mockReturnValue({ ...jest.requireActual('react-router-dom') });
  });

  it('Renders loading state initially', () => {
    render(<List />);
    expect(screen.getByTestId('test-loading')).toBeInTheDocument();
  });

  it('Should render a text on promise failure', async () => {
    jest.spyOn(phrasesServices, 'listPhrases').mockResolvedValue(Promise.reject(new Error()));
    render(<List />);
    await waitFor(() => expect(screen.getByTestId('test-error')).toBeInTheDocument());
  });

  it('It should do the query but have no results', async () => {
    jest.spyOn(phrasesServices, 'listPhrases').mockResolvedValue({ data: [] });
    render(<List />);
    await waitFor(() => {
      const notResultsElement = screen.getByTestId('test-no-phrase');
      expect(notResultsElement).toBeInTheDocument();
    });
  });

  it('It should do the query and render the information', async () => {
    jest
      .spyOn(phrasesServices, 'listPhrases')
      .mockResolvedValue({ data: [{ detail: 'frase', color: 'red', createdAt: '2023-08-06T09:50:42.682Z' }] });
    render(<List />);
    await waitFor(() => {
      expect(screen.getByTestId('test-results')).toBeInTheDocument();
    });
  });
});
