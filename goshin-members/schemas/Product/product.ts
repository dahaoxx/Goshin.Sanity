import {defineField, defineType} from "sanity";
import {GoPackage} from "react-icons/all";

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: GoPackage,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price - NOK',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: {type: 'productCategory'},
        })
    ],
});