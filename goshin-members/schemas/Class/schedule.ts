import {defineField, defineType} from "sanity";
import {MdSchedule} from "react-icons/all";

export default defineType({
    name: 'schedule',
    title: 'Schedule',
    type: 'document',
    icon: MdSchedule,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'firstSemesterDate',
            title: 'First semester date',
            type: 'date',
        }),
        defineField({
            name: 'lastSemesterDate',
            title: 'Last semester date',
            type: 'date',
        }),
        defineField({
            name: 'freeDates',
            title: 'Free dates',
            description: 'No class on these dates',
            type: 'array',
            of: [{type: 'date'}],
        }),
    ],
});