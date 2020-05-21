import * as React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { App } from './app';
import { storyIds, oneStoryItem } from './fixtures';
import { getTopStoryIds, getStoryItem } from './apis';

jest.mock('./apis', () => ({
  getTopStoryIds: jest.fn(),
  getStoryItem: jest.fn(),
}));

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test('will render app', async () => {
  (getTopStoryIds as any).mockImplementation(() => Promise.resolve(storyIds));
  (getStoryItem as jest.Mock).mockImplementation((id: number) =>
    Promise.resolve({
      ...oneStoryItem,
      id,
      score: id ** 2,
    }),
  );
  const { getByText, getAllByText, getAllByTestId } = render(<App />);

  await waitForElement(() => [
    getByText('Hacker News Reader'),
    getAllByTestId('id-by'),
    getAllByText('4 comments'),
  ]);
});
