import {defineField, defineType} from "sanity";
import {MdArticle} from "react-icons/all";

export default defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    icon: MdArticle,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'visibleTo',
            title: 'Visible to',
            type: 'array',
            of: [{type: 'reference', to: {type: 'level'}}],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});