
// const customerSchema = {

//     name: 'customer',
//     title: 'Customer',
//     type: 'document',
//     fields: [
//       {
//         name: 'customerId',
//         title: 'Customer ID',
//         type: 'string',
       
//       },
  
//       {
//         name: 'customerName',
//         title: 'Customer Name',
//         type: 'string',
        
//       },
  
//       {
//         name: 'customerEmail',
//         title: 'Customer Email',
//         type: 'string',
        
//       },
  
//       {
//         name: 'customerAddress',
//         title: 'Customer Address',
//         type: 'object',
//         fields: [
//           {
//             name: 'houseAddress',
//             title: 'House Address',
//             type: 'string',
            
//           },
//           {
//             name: 'area',
//             title: 'Area',
//             type: 'string',
            
//           },
//           {
//             name: 'city',
//             title: 'City',
//             type: 'string',
            
//           }
//         ]
//       },
  
//       {
//         name: 'customerMobileNumber',
//         title: 'Customer Mobile Number',
//         type: 'string',
        
//       },

//       {
//         name: 'paymentMethod',
//         title: 'Payment Method',
//         type: 'array',
//         of: [
//           {
//             type: 'string',
//             options: {
//               list: [
//                 { title: 'Credit Card', value: 'creditCard' },
//                 { title: 'PayPal', value: 'paypal' },
//                 { title: 'Bank Transfer', value: 'bankTransfer' },
//                 { title: 'Cash on Delivery', value: 'cashOnDelivery' },
//               ],
//             },
//           },
//         ],
//       },
  
//       {
//         name: 'invoiceNumber',
//         title: 'Invoice Number',
//         type: 'string',
        
//       }
//     ]
//   }

//   export default customerSchema


// new code to avoid duplication

  const customerSchema = {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      
      {
        name: "customerName",
        title: "Customer Name",
        type: "string",
      },


      // {
      //   name: "customerId",
      //   title: "Customer ID",
      //   type: "string",
      //   readOnly: true,  // Prevent manual editing
      // },


      {
        name: "customerEmail",
        title: "Customer Email",
        type: "string",
      },
      {
        name: "customerAddress",
        title: "Customer Address",
        type: "object",
        fields: [
          { name: "houseAddress", title: "House Address", type: "string" },
          { name: "area", title: "Area", type: "string" },
          { name: "city", title: "City", type: "string" },
        ],
      },
      {
        name: "customerMobileNumber",
        title: "Customer Mobile Number",
        type: "string",
      },     


      {
        name: "paymentMethod",
        title: "Payment Method",
        type: "string",  // ✅ Change from "array" to "string"
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
        name: "invoiceNumber",
        title: "Invoice Number",
        type: "string",
      },
    ],
  };
  
  export default customerSchema;



  