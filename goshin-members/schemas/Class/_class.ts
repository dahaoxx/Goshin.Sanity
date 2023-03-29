import {defineField, defineType} from "sanity";
import {MdSportsMartialArts} from "react-icons/md";

export default defineType({
    name: 'class',
    title: 'Class',
    type: 'document',
    icon: MdSportsMartialArts,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'schedule',
            title: 'Schedule',
            type: 'reference',
            to: {type: 'schedule'},
        }),
        defineField({
            name: 'classInstances',
            title: 'Class Instances',
            type: 'array',
            of: [{type: 'reference', to: {type: 'classInstance'}}],
        })
    ],
});