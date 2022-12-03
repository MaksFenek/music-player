import { Button } from '@suid/material';
import type { Component } from 'solid-js';
import { Menu } from 'shared';

const App: Component = () => (
  <Menu>
    <Button variant='outlined'>hello</Button>
    <Button variant='outlined'>hello</Button>
    <Button variant='outlined'>hello</Button>
    <Button variant='outlined'>hello</Button>
  </Menu>
);

export default App;
