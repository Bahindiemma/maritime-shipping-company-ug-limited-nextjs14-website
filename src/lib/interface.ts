// Assuming these types exist elsewhere in your project (or could be defined here)
type Document = {
  _id: string;
  _type: string;
};

type Reference<T> = {
  _id?: string;
  _type?: string;
  // Reference can point to any other document type, represented by T
};

type Slug = {
  currentSlug: string; // Assuming this structure for slugs
};

type Image = {
  asset: Reference<any>; // Assuming image stores a reference to an asset document
  hotspot?: boolean; // Optional hotspot property
};

// Rest of your code using these types...

export interface Author {
  _id?: string;
  _type?: string;
  name?: string;
}

export interface Category {
  _id?: string;
  _type?: string;
  title?: string; // Assuming title exists in the Category schema
}

export interface LogisticData extends Document {
  _id: string;
  _type: 'logistic';
  title: string;
  currentSlug: Slug;
  author?: Reference<Author>;
  mainImage?: Image;
  categories?: Reference<Category>[];
  publishedAt?: Date;
  description?: any; // Assuming any type for description (might need further refinement)
}

export interface PostData {
  _id?: string; // Optional since it might not be required in your usage
  _type: 'post';
  title: string;
  currentSlug: Slug;
  author?: Reference<Author>;
  mainImage?: Image; // Assuming SanityImage is defined elsewhere
  publishedAt: string | Date; // Can be string or Date depending on usage
  description?: any;
}

export interface AssociateData {
  _id?: string; // Optional since it might not be required in your usage
  _type: 'businessAssociate'; // Explicitly define the document type
  location: string;
  contactPerson: string;
  title?: string; // Optional title
  currentSlug: Slug;
  address?: string; // Optional address
  phoneNumber?: string; // Optional phone number
  faxNumber?: string; // Optional fax number
  emailAddress?: string; // Optional email address
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string | Date; // Sanity adds this automatically for timestamps
}

export interface Subscription {
  _type: 'subscribe'; // Explicitly define the document type
  email: string;
  createdAt: string | Date; // Sanity adds this automatically for timestamps
}


