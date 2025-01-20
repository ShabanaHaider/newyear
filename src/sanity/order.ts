// schemas/order.js

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(100)
      },
  
      {
        name: 'productId',
        title: 'Product ID',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(100)
      },       


      {
        name: 'customerId',
        title: 'Customer ID',
        type: 'string',
       
      },

  
      {
        name: 'quantitySold',
        title: 'Quantity Sold',
        type: 'number',
        // validation: Rule => Rule.required().min(1).max(1000)
      },


      {
        name: 'price',
        title: 'Price',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      },

      {
        name: 'salesTax',
        title: 'Sales Tax',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      },

      {
        name: 'priceafterTax',
        title: 'Price After Tax',
        type: 'number',
        // validation: Rule => Rule.required().min(0)
      },

  
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Failed', value: 'failed' }
          ],
          layout: 'radio'  // Makes it a radio button group
        },
        // validation: Rule => Rule.required().min(1).max(50)
      },
  
      {
        name: 'productDescription',
        title: 'Product Description',
        type: 'text',
        // validation: Rule => Rule.required().min(1).max(1000)
      },
  
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        // validation: Rule => Rule.required().min(1).max(200)
      },
  
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'houseAddress',
            title: 'House Address',
            type: 'string',
            // validation: Rule => Rule.required().min(1).max(200)
          },
          {
            name: 'area',
            title: 'Area',
            type: 'string',
            // validation: Rule => Rule.required().min(1).max(100)
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
            // validation: Rule => Rule.required().min(1).max(100)
          }
        ]
      },
  
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        // validation: Rule => Rule.required()
      }
    ]
  }
  