import {defineType} from "sanity";
import {GiSkills} from "react-icons/all";

export default defineType({
    name: 'level',
    title: 'Level',
    type: 'document',
    icon: GiSkills,
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            description: 'The ID of the level used across the app, don not change this unless you know what you are doing',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
    ]
})