import {defineField, defineType} from 'sanity'
import {FaVideo} from "react-icons/all";

export default defineType({
    name: 'videoModule',
    title: 'Video Module',
    type: 'document',
    icon: FaVideo,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'visibleTo',
            title: 'Visible To',
            description: 'The level required to see this video',
            type: 'array',
            of: [{type: 'reference', to: {type: 'level'}}],
        }),
        defineField({
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of: [{type: 'reference', to: {type: 'video'}}],
        })
    ],
})