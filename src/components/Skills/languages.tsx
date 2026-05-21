import type { Skill } from './Skills.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faTypescript,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

export const languages: Skill[] = [
  {
    icon: <FontAwesomeIcon icon={faTypescript} size='2xl' />,
    title: 'TypeScript',
    description: 'Primitives, object types, union types, aliases, interfaces.',
  },
  {
    icon: <FontAwesomeIcon icon={faJs} size='2xl' />,
    title: 'JavaScript',
    description:
      'ES6+, event management, several Web APIs (DOM, storage, canvas, Media Capture and Streams, etc.)',
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} size='2xl' />,
    title: 'HTML',
    description: 'HTML5 elements, and semantic, accessible markup.',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3Alt} size='2xl' />,
    title: 'CSS',
    description:
      'CSS3, selectors, specificity, variables, media queries and responsive design, BEM naming conventions.',
  },
];
