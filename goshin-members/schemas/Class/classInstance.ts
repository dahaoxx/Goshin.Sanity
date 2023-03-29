import {defineField, defineType} from "sanity";
import {MdSportsMartialArts} from "react-icons/md";

export default defineType({
    name: 'classInstance',
    title: 'Class Instance',
    type: 'document',
    icon: MdSportsMartialArts,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'number',
            title: 'Number',
            type: 'number',
        }),
        defineField({
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of: [{type: 'reference', to: {type: 'video'}}],
        })
    ],
    preview : {
        select: {
            name: 'name',
            number: 'number',
        },
        prepare(selection) {
            const {name, number} = selection;
            return {
                title: `${number} - ${name}`,
            };
        }
    }
});