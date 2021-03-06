import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/counter">
          <a>Counter</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
