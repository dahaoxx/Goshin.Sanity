import {defineField, defineType} from "sanity";
import {TbCategory} from "react-icons/all";

export default defineType({
    name: 'productCategory',
    title: 'Product Category',
    type: 'document',
    icon: TbCategory,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'id',
            title: 'ID',
            type: 'number',
            description: 'The ID of the category used across the app, don not change this unless you know what you are doing',
        }),
    ],
});