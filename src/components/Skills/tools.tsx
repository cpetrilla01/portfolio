import { Code as CodeIcon } from '@mui/icons-material';
import type { Skill } from './Skills.tsx';

export const tools: Skill[] = [
  {
    icon: <CodeIcon />,
    title: 'React',
    description:
      'Hooks, state management, higher-level components, React Router.',
  },
  {
    icon: <CodeIcon />,
    title: 'Node',
    description: '',
  },
  {
    icon: <CodeIcon />,
    title: 'npm',
    description:
      'Semantic versioning, publishing to and importing from private registries like Artifactory.',
  },
  {
    icon: <CodeIcon />,
    title: 'Webpack',
    description: '',
  },
  {
    icon: <CodeIcon />,
    title: 'Sass',
    description: '',
  },
];
