import {defineField, defineType} from 'sanity'
import {MdEvent} from "react-icons/all";

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: MdEvent,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
        }),
        defineField({
            name: 'lastSignupDate',
            title: 'Last signup date',
            type: 'date',
        }),
        defineField({
            name: 'canParticipate',
            title: 'Can Participate',
            description: 'Who can sign up for this event?',
            type: 'array',
            of: [{type: 'reference', to: {type: 'level'}}],
        }),
        defineField({
            name: 'visibleTo',
            title: 'Visible to',
            description: 'Who will get this event in their feed?',
            type: 'array',
            of: [{type: 'reference', to: {type: 'level'}}],
        }),
        defineField({
            name: 'price',
            title: 'Price - NOK',
            type: 'number',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            const {title} = selection
            return {
                title,
            }
        }
    }
})