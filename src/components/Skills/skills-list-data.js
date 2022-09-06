import React from 'react';
import {
  Code as CodeIcon,
  Css as CssIcon,
  GitHub as GitHubIcon,
  Html as HtmlIcon,
  Javascript as JavascriptIcon,
} from '@mui/icons-material';

const skillsListData = [
  {
    id: <CodeIcon />,
    title: 'React',
    description: 'Simple to complex components. Hooks. State management. Higher-level component design for optimal reuse.',
  },
  {
    id: <CodeIcon />,
    title: 'Node',
    description: 'Package managers: npm, yarn. Servers: Express, Hapi. Templating: Jade, Handlebars. Build: Webpack, Grunt, Gulp.',
  },
  {
    id: <JavascriptIcon />,
    title: 'JavaScript',
    description: 'Object-oriented programming, MVC architecture, DOM API, event management.',
  },
  {
    id: <HtmlIcon />,
    title: 'HTML5',
    description: 'Semantic, accessible markup.',
  },
  {
    id: <CssIcon />,
    title: 'CSS3',
    description: 'Selectors, specificity, responsive design. Build: SASS, LESS. Naming conventions: OOCSS, SMACSS, BEM.',
  },
  {
    id: <CodeIcon />,
    title: 'AngularJS',
    description: 'Services, directives, controllers, templates, filters.',
  },
  {
    id: <GitHubIcon />,
    title: 'GitHub',
    description: 'Peer review via pull requests.',
  },
];

export default skillsListData;