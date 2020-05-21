import { StoryItem } from "./types";

export const storyIds = [10, 20, 30];

export const oneStoryItem: StoryItem = {
  by: 'elsewhen',
  descendants: 164,
  id: 10,
  kids: [
    1, 2, 3, 4
  ],
  score: 262,
  time: 1590008498,
  title: 'What Is Nix?',
  type: 'story',
  url: 'https://engineering.shopify.com/blogs/engineering/what-is-nix',
};

// bad data
export const badStoryItem: StoryItem = {
} as StoryItem;

