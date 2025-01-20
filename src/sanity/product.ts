// schemas/product.js

  export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productId',
        title: 'Product Id',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(200)
      },
  
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(200)
      },

      {
        name: 'productDescription',
        title: 'Product Description',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(400)
      },

  
      {
        name: 'productDimension',
        title: 'Product Dimension',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'dimension',
            fields: [
              {
                name: 'width',
                title: 'Width',
                type: 'number'
              },
              {
                name: 'height',
                title: 'Height',
                type: 'number'
              },
              {
                name: 'length',
                title: 'Length',
                type: 'number'
              }
            ]
          }
        ]
      },
  
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'productName',
          maxLength: 200
        },
        // validation: Rule => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      },
      {
        name: 'fullPrice',
        title: 'Full Price',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        },
        // validation: Rule => Rule.required()
      },
  
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }]
      },
  
      {
        name: 'color',
        title: 'Color',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(100)
      },

      {
        name: 'category',
        title: 'Category',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(100)
      },
  
      {
        name: 'quantity',
        title: 'Quantity in stock',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      }
    ]
  };
  