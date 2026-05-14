import { Code as CodeIcon } from '@mui/icons-material';
import type { Skill } from './Skills.tsx';

export const tools: Skill[] = [
  {
    id: <CodeIcon />,
    title: 'React',
    description:
      'Hooks, state management, higher-level components, React Router.',
  },
  {
    id: <CodeIcon />,
    title: 'Node',
    description: '',
  },
  {
    id: <CodeIcon />,
    title: 'npm',
    description:
      'Semantic versioning, publishing to and importing from private registries like Artifactory.',
  },
  {
    id: <CodeIcon />,
    title: 'Webpack',
    description: '',
  },
  {
    id: <CodeIcon />,
    title: 'Sass',
    description: '',
  },
];
