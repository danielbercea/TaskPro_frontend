// src/data/initialData.js
const initialData = {
  title: 'Project title',
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      cardIds: ['card-1', 'card-2', 'card-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      cardIds: ['card-4', 'card-5'],
    },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'The Watch Spot Design',
      description:
        "Create a visually stunning and eye-catching watch dial design that embodies our brand's...",
      priority: 'low', // Changed to lowercase for consistency
      deadline: '2023-12-05', // Changed to ISO format
    },
    'card-2': {
      id: 'card-2',
      title: 'Research and Analysis',
      description:
        "Conduct in-depth research and analysis on the project's topic, gather relevant data, and identify...",
      priority: 'medium', // Changed to lowercase for consistency
      deadline: '2023-12-05',
    },
    'card-3': {
      id: 'card-3',
      title: 'Concept Development',
      description:
        "Brainstorm and develop creative concepts and ideas that align with the project's objectives...",
      priority: 'without', // Changed to lowercase for consistency
      deadline: '2023-12-05',
    },
    'card-4': {
      id: 'card-4',
      title: 'Design and Prototyping SoYummy',
      description:
        'Create visually appealing and functional design prototypes based on the approved concepts...',
      priority: 'low',
      deadline: '2023-12-05',
    },
    'card-5': {
      id: 'card-5',
      title: 'Content Creation',
      description:
        'Generate engaging and persuasive content for various project deliverables, such as...',
      priority: 'high',
      deadline: '2023-12-05',
    },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;
