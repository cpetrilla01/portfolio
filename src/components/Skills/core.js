import React from 'react';
import {
  Css as CssIcon,
  Html as HtmlIcon,
  Javascript as JavascriptIcon,
} from '@mui/icons-material';

const core = [
  {
    id: <JavascriptIcon />,
    title: 'JavaScript',
    description: 'ES6, Functional programming, object-oriented programming, DOM API, event management.',
  },
  {
    id: <HtmlIcon />,
    title: 'HTML',
    description: 'HTML5, and semantic, accessible markup.',
  },
  {
    id: <CssIcon />,
    title: 'CSS',
    description: 'CSS3, selectors, specificity, variables, media queries and responsive design, BEM naming conventions.',
  },
];

export {core};