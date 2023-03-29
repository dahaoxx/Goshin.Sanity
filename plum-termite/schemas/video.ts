import {defineField, defineType} from 'sanity'
import {FaVideo} from "react-icons/all";

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'document',
    icon: FaVideo,
    orderings: [
        {
            name: 'levelAsc',
            title: 'Level Ascending',
            by: [
                {field: 'level', direction: 'asc'},
            ],
        }],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'level',
            title: 'Level',
            description: 'The level this video belongs to',
            type: 'reference',
            to: {type: 'level'},
        }),
        defineField({
            name: 'visibleTo',
            title: 'Visible To',
            description: 'The level required to see this video',
            type: 'array',
            of: [{type: 'reference', to: {type: 'level'}}],
        }),
    ],
})