import * as React from 'react';
import styled from 'styled-components';

import { StoryList } from './story-list';
import { ScrollToTop } from '../utils';

const BaseMain = () => {
  return (
    <div id="main">
      <ScrollToTop />
      <div className="header">
        <h1>Hacker News Reader</h1>
        <h2>Smoother on the eyes</h2>
      </div>
      <div className="content">
        <StoryList />
      </div>
    </div>
  );
};

export const Main = styled(BaseMain)``;
Main.displayName = 'Main';
