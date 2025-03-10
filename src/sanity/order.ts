// schemas/order.js

// const orderSchema = {
//     name: 'order',
//     title: 'Order',
//     type: 'document',
//     fields: [
//       {
//         name: 'orderId',
//         title: 'Order ID',
//         type: 'string',
//         // validation: Rule => Rule.required().min(1).max(100)
//       },
  
//       {
//         name: 'productId',
//         title: 'Product ID',
//         type: 'string',
//         // validation: Rule => Rule.required().min(1).max(100)
//       },       


//       {
//         name: 'customerId',
//         title: 'Customer ID',
//         type: 'string',
       
//       },

  
//       {
//         name: 'quantitySold',
//         title: 'Quantity Sold',
//         type: 'number',
//         // validation: Rule => Rule.required().min(1).max(1000)
//       },


//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         // validation: Rule => Rule.required().min(0)
//       },

//       {
//         name: 'salesTax',
//         title: 'Sales Tax',
//         type: 'number',
//         // validation: Rule => Rule.required().min(0)
//       },

//       {
//         name: 'priceafterTax',
//         title: 'Price After Tax',
//         type: 'number',
//         // validation: Rule => Rule.required().min(0)
//       },

  
//       {
//         name: 'paymentStatus',
//         title: 'Payment Status',
//         type: 'string',
//         options: {
//           list: [
//             { title: 'Pending', value: 'pending' },
//             { title: 'Completed', value: 'completed' },
//             { title: 'Failed', value: 'failed' }
//           ],
//           layout: 'radio'  // Makes it a radio button group
//         },
//         // validation: Rule => Rule.required().min(1).max(50)
//       },
  
//       {
//         name: 'producDescription',
//         title: 'Product Description',
//         type: 'text',
//         // validation: Rule => Rule.required().min(1).max(1000)
//       },
  
//       {
//         name: 'customerName',
//         title: 'Customer Name',
//         type: 'string',
//         // validation: Rule => Rule.required().min(1).max(200)
//       },
  
//       {
//         name: 'shippingAddress',
//         title: 'Shipping Address',
//         type: 'object',
//         fields: [
//           {
//             name: 'houseAddress',
//             title: 'House Address',
//             type: 'string',
//             // validation: Rule => Rule.required().min(1).max(200)
//           },
//           {
//             name: 'area',
//             title: 'Area',
//             type: 'string',
//             // validation: Rule => Rule.required().min(1).max(100)
//           },
//           {
//             name: 'city',
//             title: 'City',
//             type: 'string',
//             // validation: Rule => Rule.required().min(1).max(100)
//           }
//         ]
//       },
  
//       {
//         name: 'orderDate',
//         title: 'Order Date',
//         type: 'datetime',
//         // validation: Rule => Rule.required()
//       }
//     ]
//   }

//   export default orderSchema










//   updated orderschema

// const orderSchema = {
//   name: 'order',
//   title: 'Order',
//   type: 'document',
//   fields: [
//     {
//       name: 'orderId',
//       title: 'Order ID',
//       type: 'string',
//       // validation: Rule => Rule.required().min(1).max(100)
//     },


//     {
//               name: 'productId',
//             title: 'Product ID',
//             type: 'string',
//               // validation: Rule => Rule.required().min(1).max(100)
//              },       


      
//     {
//       name: 'customerId',
//       title: 'Customer ID',
//       type: 'string',
//     },
//     {
//       name: 'customerName',
//       title: 'Customer Name',
//       type: 'string',
//       // validation: Rule => Rule.required().min(1).max(200)
//     },
//     {
//       name: 'shippingAddress',
//       title: 'Shipping Address',
//       type: 'object',
//       fields: [
//         {
//           name: 'houseAddress',
//           title: 'House Address',
//           type: 'string',
//           // validation: Rule => Rule.required().min(1).max(200)
//         },
//         {
//           name: 'area',
//           title: 'Area',
//           type: 'string',
//           // validation: Rule => Rule.required().min(1).max(100)
//         },
//         {
//           name: 'city',
//           title: 'City',
//           type: 'string',
//           // validation: Rule => Rule.required().min(1).max(100)
//         },
//       ],
//     },
//     {
//       name: 'orderDate',
//       title: 'Order Date',
//       type: 'datetime',
//       // validation: Rule => Rule.required()
//     },

//           {
//       name: 'paymentStatus',
//        title: 'Payment Status',
//        type: 'string',
//        options: {
//         list: [
//            { title: 'Pending', value: 'pending' },
//             { title: 'Completed', value: 'completed' },
//             { title: 'Failed', value: 'failed' }
//         ],
//         layout: 'radio'  // Makes it a radio button group
//       },
//         // validation: Rule => Rule.required().min(1).max(50)
//       },




//     {
//       name: 'orderStatus',
//       title: 'Order Status',
//       type: 'array',
//       of: [
//         {
//           type: 'string',
//           options: {
//             list: [
//               { title: 'Pending', value: 'pending' },
//               { title: 'Processing', value: 'processing' },
//               { title: 'Shipped', value: 'shipped' },
//               { title: 'Delivered', value: 'delivered' },
//               { title: 'Cancelled', value: 'cancelled' },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       name: 'paymentMethod',
//       title: 'Payment Method',
//       type: 'array',
//       of: [
//         {
//           type: 'string',
//           options: {
//             list: [
//               { title: 'Credit Card', value: 'creditCard' },
//               { title: 'PayPal', value: 'paypal' },
//               { title: 'Bank Transfer', value: 'bankTransfer' },
//               { title: 'Cash on Delivery', value: 'cashOnDelivery' },
//             ],
//           },
//         },
//       ],
//     },
    
    
    
//     {
//       name: 'transactionId',
//       title: 'Transaction ID',
//       type: 'number',
//     },
//     {
//       name: 'totalAmount',
//       title: 'Total Amount',
//       type: 'number',
//       // validation: Rule => Rule.required().min(0)
//     },
//     // Grouped product-related fields under productDetails
//     {
//       name: 'productDetails',
//       title: 'Product Details',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'productName',
//               title: 'Product Name',
//               type: 'string',
//               // validation: Rule => Rule.required().min(1).max(1000)
//             },
//             {
//               name: 'quantitySold',
//               title: 'Quantity Sold',
//               type: 'number',
//               // validation: Rule => Rule.required().min(1).max(1000)
//             },
//             {
//               name: 'price',
//               title: 'Price',
//               type: 'number',
//               // validation: Rule => Rule.required().min(0)
//             },
//             {
//               name: 'salesTax',
//               title: 'Sales Tax',
//               type: 'number',
//               // validation: Rule => Rule.required().min(0)
//             },
//             {
//               name: 'priceafterTax',
//               title: 'Price After Tax',
//               type: 'number',
//               // validation: Rule => Rule.required().min(0)
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// export default orderSchema;



// new code to avoid duplication

// const orderSchema = {
//   name: "order",
//   title: "Order",
//   type: "document",
//   fields: [
    


//     {
//       name: "customerId",
//       title: "Customer ID",
//       type: "reference",
//       to: [{ type: "customer" }],
//     },

    


//     {
//       name: "orderDate",
//       title: "Order Date",
//       type: "datetime",
//     },
//     {
//       name: "shippingAddress",
//       title: "Shipping Address",
//       type: "object",
//       fields: [
//         { name: "houseAddress", title: "House Address", type: "string" },
//         { name: "area", title: "Area", type: "string" },
//         { name: "city", title: "City", type: "string" },
//       ],
//     },
//     {
//       name: "paymentStatus",
//       title: "Payment Status",
//       type: "string",
//       options: {
//         list: [
//           { title: "Pending", value: "pending" },
//           { title: "Completed", value: "completed" },
//           { title: "Failed", value: "failed" },
//         ],
//       },
//     },
//     {
//       name: "orderStatus",
//       title: "Order Status",
//       type: "array",
//       of: [
//         {
//           type: "string",
//           options: {
//             list: [
//               { title: "Pending", value: "pending" },
//               { title: "Processing", value: "processing" },
//               { title: "Shipped", value: "shipped" },
//               { title: "Delivered", value: "delivered" },
//               { title: "Cancelled", value: "cancelled" },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       name: "paymentMethod",
//       title: "Payment Method",
//       type: "array",
//       of: [
//         {
//           type: "string",
//           options: {
//             list: [
//               { title: "Credit Card", value: "creditCard" },
//               { title: "PayPal", value: "paypal" },
//               { title: "Bank Transfer", value: "bankTransfer" },
//               { title: "Cash on Delivery", value: "cashOnDelivery" },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       name: "transactionId",
//       title: "Transaction ID",
//       type: "number",
//     },
//     {
//       name: "totalAmount",
//       title: "Total Amount",
//       type: "number",
//     },
//     {
//       name: "productDetails",
//       title: "Product Details",
//       type: "array",
//       of: [
//         {
//           type: "object",
//           fields: [
//             { name: "productId", title: "Product ID", type: "string" },
//             { name: "productName", title: "Product Name", type: "string" },
//             { name: "quantitySold", title: "Quantity Sold", type: "number" },
//             { name: "price", title: "Price", type: "number" },
//             { name: "salesTax", title: "Sales Tax", type: "number" },
//             { name: "priceafterTax", title: "Price After Tax", type: "number" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// export default orderSchema;



// updated order schema




const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [


    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    },  
    
    // ({
    //   name: 'customerId',
    //   title: 'Customer',
    //   type: 'reference', // ✅ Correctly define as a reference
    //   to: [{ type: 'customer' }], // ✅ It references the 'customer' schema
    // }),  

    


   
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        { name: "houseAddress", title: "House Address", type: "string" },
        { name: "area", title: "Area", type: "string" },
        { name: "city", title: "City", type: "string" },
      ],
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Completed", value: "completed" },
          { title: "Failed", value: "failed" },
        ],
      },
    },


    {
      name: 'quantitySold',
      title: 'Quantity Sold',
        type: 'number',
        // validation: Rule => Rule.required().min(1).max(1000)
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
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Credit Card", value: "creditCard" },
          { title: "PayPal", value: "paypal" },
          { title: "Bank Transfer", value: "bankTransfer" },
          { title: "Cash on Delivery", value: "cashOnDelivery" },
        ],
      },
    },

    
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    }, 



    // {
    //   name: "productDetails",
    //   title: "Product Details",
    //   type: "array",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         { name: "productId", title: "Product", type: "reference", to: [{ type: "product" }] },
    //         { name: "productName", title: "Product Name", type: "string" },            
    //         { name: "price", title: "Price", type: "number" },
            
    //       ],
    //     },
    //   ],
    // },


    {
      name: "productDetails",
      title: "Product Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { 
              name: "product", 
              title: "Product", 
              type: "reference", 
              to: [{ type: "product" }] 
            },
            { name: "productId", title: "Product ID", type: "string" }, // Just for display
            { name: "productName", title: "Product Name", type: "string" },            
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    }




  ],
};

export default orderSchema;


