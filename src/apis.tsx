import { HackerNewsItem } from './types';
import {topStoriesUrl, storyUrl} from './constants';

export const getTopStoryIds = async () => {
  try {
    const results = await fetch(topStoriesUrl);
    const json = await results.json();
    return json as number[];
  } catch (err) {
    console.error(`Failed to retrieve story ids`);
    return [];
  }
};

export const getHackerNewsItem = async (id: number) => {
  try {
    const results = await fetch(`${storyUrl}${id}.json`);
    const json = await results.json();
    return json as HackerNewsItem;
  } catch (err) {
    console.error(`Failed to retrieve story id: ${id}`);
  }
};

export const getStoryItem = async (id: number) => getHackerNewsItem(id);

export const getCommentItem = async (id: number) => getHackerNewsItem(id);
