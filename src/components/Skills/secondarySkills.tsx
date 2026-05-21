import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGitAlt,
  faNodeJs,
  faNpm,
  faReact,
  faFigma,
  faDocker,
  faAws,
  faTailwindCss,
  faSass,
  faJira,
  faYarn,
} from '@fortawesome/free-brands-svg-icons';

export interface SecondarySkill {
  icon?: React.ReactElement;
  title: string;
}

export const secondarySkills: SecondarySkill[] = [
  {
    icon: <FontAwesomeIcon icon={faReact} size='2x' />,
    title: 'React',
  },
  {
    title: 'Redux',
  },
  {
    title: 'jQuery',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} size='2x' />,
    title: 'NodeJS',
  },
  {
    title: 'Material UI',
  },
  {
    title: 'Express',
  },
  {
    title: 'Hapi',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'Apollo',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} size='2x' />,
    title: 'Git branching',
  },
  {
    title: 'Webpack',
  },
  {
    title: 'Vite',
  },
  {
    title: 'Storybook',
  },
  {
    icon: <FontAwesomeIcon icon={faNpm} size='2x' />,
    title: 'npm',
  },
  {
    icon: <FontAwesomeIcon icon={faYarn} size='xl' />,
    title: 'Yarn',
  },
  {
    icon: <FontAwesomeIcon icon={faFigma} size='2x' />,
    title: 'Figma',
  },
  {
    title: 'Adobe Analytics',
  },
  {
    title: 'Artifactory',
  },
  {
    title: 'Jenkins',
  },
  {
    title: 'KafkaJS',
  },
  {
    icon: <FontAwesomeIcon icon={faDocker} size='xl' />,
    title: 'Docker',
  },
  {
    icon: <FontAwesomeIcon icon={faAws} size='2xl' />,
    title: 'AWS',
  },
  {
    title: 'Vitest',
  },
  {
    title: 'Jest',
  },
  {
    title: 'Enzyme',
  },
  {
    title: 'React Testing Library (RTL)',
  },
  {
    icon: <FontAwesomeIcon icon={faTailwindCss} size='xl' />,
    title: 'Tailwind',
  },
  {
    icon: <FontAwesomeIcon icon={faSass} size='xl' />,
    title: 'Sass',
  },
  {
    title: 'SSO/OAuth/OpenIDConnect',
  },
  {
    title: 'agile',
  },
  {
    title: 'scrum',
  },
  {
    title: 'kanban',
  },
  {
    title: 'waterfall',
  },
  {
    icon: <FontAwesomeIcon icon={faJira} size='xl' />,
    title: 'Jira',
  },
  {
    title: 'CI/CD',
  },
  {
    title: 'micro front-ends',
  },
];
