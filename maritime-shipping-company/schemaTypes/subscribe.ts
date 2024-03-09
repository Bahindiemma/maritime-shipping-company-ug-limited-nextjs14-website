import { defineField, defineType } from "sanity";

export default defineType({
  name: "subscribe",
  title: "Subscription To Newsletter",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "email", // Use the email type for validation
      validation: (rule) => rule.required(), // Mark as required
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
  ],
});
