import {defineField, defineType} from "sanity";
import {RiAdminFill} from "react-icons/all";

export default defineType({
    name: 'accessRole',
    title: 'Access Role',
    type: 'document',
    icon: RiAdminFill,
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'number',
            description: 'The ID of the role used across the app, don not change this unless you know what you are doing',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
    ]
})