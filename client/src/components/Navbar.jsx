import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu>
      <Menu.Item header>Better food choices</Menu.Item>
      <Menu.Item
        name='categories'
        as={Link}
        to='/'
      />
    </Menu>
  );
}
