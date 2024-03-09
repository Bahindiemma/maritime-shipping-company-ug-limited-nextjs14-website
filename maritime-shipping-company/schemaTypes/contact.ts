import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact", // Use a descriptive name like "contactFormSubmission"
  title: "Contact Form Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(), // Mark as required
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      }),
    defineField({
      name: "email",
      title: "Email",
      type: "email", // Use the email type for validation
      validation: (rule) => rule.required(), // Mark as required
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (rule) => rule.required(), // Mark as required
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (rule) => rule.required(), // Mark as required
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        isHighlighted: true, // Display in list views
      },
    }),
  ],
});
