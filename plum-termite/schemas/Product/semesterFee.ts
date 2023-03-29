import {defineField, defineType} from "sanity";
import {MdPayment} from "react-icons/all";

export default defineType({
    name: 'semesterFee',
    title: 'Semester Fee',
    type: 'document',
    icon: MdPayment,
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
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
            validation: Rule => Rule.max(25),
        }),
    ],
});