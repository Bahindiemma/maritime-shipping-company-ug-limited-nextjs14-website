// schema.js

export default {
    name: 'quote',
    title: 'Quote Request',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Your Name',
        type: 'string',
        description: 'Your name (required)',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        description: 'Your email (required)',
        validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email(),
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
        description: 'Your company',
      },
      {
        name: 'whatsappNumber',
        title: 'Whatsapp Number',
        type: 'string',
        description: 'Your Whatsapp number',
      },
      {
        name: 'wechat',
        title: 'Wechat',
        type: 'string',
        description: 'Your Wechat ID',
      },
      {
        name: 'commodity',
        title: 'Commodity',
        type: 'string',
        description: 'Commodity (required)',
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
      {
        name: 'terms',
        title: 'Type of Terms',
        type: 'string',
        description: 'Type of terms (required)',
        validation: (Rule: { required: () => any; }) => Rule.required(),
        options: {
          list: [
            { title: 'CIF (Cost, Insurance, Freight)', value: 'CIF' },
            { title: 'FOB (Free On Board)', value: 'FOB' },
            { title: 'EXW (Ex Works)', value: 'EXW' },
          ],
        },
      },
      {
        name: 'cargoReadyDate',
        title: 'Cargo Ready Date',
        type: 'date',
        description: 'Cargo ready date',
      },
      {
        name: 'deliveryDate',
        title: 'Delivery Date',
        type: 'date',
        description: 'Delivery date',
      },
      {
        name: 'shipFrom',
        title: 'Ship From',
        type: 'object',
        fields: [
          {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'City (required)',
            validation: (Rule: { required: () => any; }) => Rule.required(),
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
            description: 'Country (required)',
            validation: (Rule: { required: () => any; }) => Rule.required(),
          },
        ],
      },
      {
        name: 'shipTo',
        title: 'Ship To',
        type: 'object',
        fields: [
          {
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'City (required)',
            validation: (Rule: { required: () => any; }) => Rule.required(),
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
            description: 'Country (required)',
            validation: (Rule: { required: () => any; }) => Rule.required(),
          },
        ],
      },
      {
        name: 'factoryAddress',
        title: 'Factory Address',
        type: 'text',
        description: 'Factory address (if available)',
      },
      {
        name: 'containerLoad',
        title: 'Container Load',
        type: 'string',
        description: 'Type of container load (required)',
        validation: (Rule: { required: () => any; }) => Rule.required(),
        options: {
          list: [
            { title: 'FCL (Full Container Load)', value: 'FCL' },
            { title: 'LCL (Less than Container Load)', value: 'LCL' },
            { title: 'AIR (Air Freight)', value: 'AIR' },
            { title: 'FBA EXPRESS', value: 'FBA_EXPRESS' },
            { title: 'FCL TO DOOR', value: 'FCL_TO_DOOR' },
            { title: 'LCL TO DOOR', value: 'LCL_TO_DOOR' },
            { title: 'AIR TO DOOR', value: 'AIR_TO_DOOR' },
            { title: 'BREAK BULK', value: 'BREAK_BULK' },
          ],
        },
      },
      {
        name: 'containerType',
        title: 'Container Type',
        type: 'string',
        description: 'Type of container',
      },
      {
        name: 'containerQty',
        title: 'Container Quantity',
        type: 'number',
        description: 'Number of containers',
      },
      {
        name: 'commodityWeight',
        title: 'Commodity Weight',
        type: 'string',
        description: 'Weight of the commodity',
      },
      {
        name: 'serviceRequirements',
        title: 'Other Service Requirements',
        type: 'text',
        description: 'Any other service requirements or remarks',
      },
    ],
  };
  