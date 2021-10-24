import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#3B4958',
        borderBottom: '1px solid #516574',
      }}>
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-yaldevi">
        <h1 className="text-3xl font-bold">
          {content.nav.logo}{' '}
          <span className="w-3 h-3 bg-green-900 inline-block rounded-full"></span>
        </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to="works" smooth={true}>
                <span key={index} className="text-xl mr-4 cursor-pointer hover:text-teal-200">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
