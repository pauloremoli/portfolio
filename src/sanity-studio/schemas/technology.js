export default {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'link',
        title: 'link',
        type: 'url',
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'name',
        slug: 'link',
        media: 'logo'
      }
    },
  }
  