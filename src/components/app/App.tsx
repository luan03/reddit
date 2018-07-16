import * as React from 'react';
import Content from '../../containers/content/Content';
import Header from '../../containers/header/Header';
import Sidebar from '../../containers/sidebar/Sidebar';

import './App.scss';

const App = () => (
  <div>
    <Sidebar />
    <Header />
    <Content />
  </div>
)

export default App