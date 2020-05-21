import { StyledProps } from 'styled-components';

export interface HashMap<T> { [key: string]: T }

export type AnyObj = { [key: string]: any };

export type Stylable = StyledProps<{
  className?: string;
  children?: any[];
}>;

export interface HackerNewsItem {
  by: string;
  id: number;
  kids: number[];
  time: number;
  type: string;
}

export interface CommentItem extends HackerNewsItem {
  parent: number;
  text: string;
}

export interface StoryItem extends HackerNewsItem {
  descendants: number;
  score: number;
  title: string;
  url: string;
}
