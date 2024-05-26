export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'review',
      title: 'Review',
      type: 'text',
    },
    {
      name: 'cafesVisited',
      title: 'Cafes Visited',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        range: { min: 0, max: 5 },
        step: 0.1,
      },
    },
  ],
};