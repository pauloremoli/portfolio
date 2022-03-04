export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'techologies',
      title: 'Techologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}]
    },
    {
      name: 'color',
      title: 'Background color',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug',
      description: 'description',
      media: 'image'
    },
  },
}
