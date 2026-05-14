import {
  Css as CssIcon,
  Html as HtmlIcon,
  Javascript as JavascriptIcon,
  Javascript as TypescriptIcon,
} from '@mui/icons-material';
import type { Skill } from './Skills.tsx';

export const languages: Skill[] = [
  {
    icon: <TypescriptIcon />,
    title: 'TypeScript',
    description: 'Primitives, object types, union types, aliases, interfaces.',
  },
  {
    icon: <JavascriptIcon />,
    title: 'JavaScript',
    description:
      'ES6+, event management, several Web APIs (DOM, storage, canvas, Media Capture and Streams, etc.)',
  },
  {
    icon: <HtmlIcon />,
    title: 'HTML',
    description: 'HTML5 elements, and semantic, accessible markup.',
  },
  {
    icon: <CssIcon />,
    title: 'CSS',
    description:
      'CSS3, selectors, specificity, variables, media queries and responsive design, BEM naming conventions.',
  },
];
