import { defineField, defineType } from "sanity";

// Schema for business associates of Maritime Shipping Company Limited
export default defineType({
    name: 'businessAssociate',
    title: 'Business Associate',
    type: 'document',
    fields: [

      defineField({
        name: 'title',
        title: 'Company Name',
        type: 'string',
      }),
      defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'contactPerson',
        title: 'Contact Person',
        type: 'string',
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
      }),
      defineField({
        name: 'phoneNumber',
        title: 'Phone Number',
        type: 'string',
      }),
      defineField({
        name: 'faxNumber',
        title: 'Fax Number',
        type: 'string',
      }),
      defineField({
        name: 'emailAddress',
        title: 'Email Address',
        type: 'string',
      }),
    ],
  })