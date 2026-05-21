import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faTypescript,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

export interface PrimarySkill {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export const primarySkills: PrimarySkill[] = [
  {
    icon: <FontAwesomeIcon icon={faTypescript} size='2xl' />,
    title: 'TypeScript',
    description: 'Primitives, object types, union types, aliases, interfaces',
  },
  {
    icon: <FontAwesomeIcon icon={faJs} size='2xl' />,
    title: 'JavaScript',
    description:
      'ES6+, event and state management, several Web APIs (DOM, storage, canvas, Media Capture and Streams, etc.), single-page applications (SPAs), serving/consuming REST/GraphQL APIs, client- and server-side processing',
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} size='2xl' />,
    title: 'HTML',
    description: 'HTML5 elements, semantic markup, WCAG accessibility',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3Alt} size='2xl' />,
    title: 'CSS',
    description:
      'CSS3, CSS-in-JS, selectors, specificity, variables, media queries and responsive design, BEM naming conventions',
  },
];
