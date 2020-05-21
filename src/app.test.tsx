import * as React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from './app';
import { storyIds, oneStoryItem } from './fixtures';
import { getTopStoryIds, getHackerNewsItem } from './apis';

jest.mock('./apis', () => ({
  getTopStoryIds: jest.fn(),
  getHackerNewsItem: jest.fn()
}));

beforeEach(cleanup);

test('will render app', async () => {
  (getTopStoryIds as any).mockImplementation(() => Promise.resolve(storyIds));
  (getHackerNewsItem as jest.Mock).mockImplementation(() => Promise.resolve(oneStoryItem));
  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [expect(getByText('Hacker News Reader')).toBeTruthy()]);
  });
});
