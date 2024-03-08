export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Service Title',
        type: 'string',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of your Services',
        options: {
            source: 'title'
        }
    },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
    ],
  };