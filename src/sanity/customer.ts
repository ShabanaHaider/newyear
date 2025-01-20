export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    fields: [
      {
        name: 'customerId',
        title: 'Customer ID',
        type: 'string',
       
      },
  
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        
      },
  
      {
        name: 'customerEmail',
        title: 'Customer Email',
        type: 'string',
        
      },
  
      {
        name: 'customerAddress',
        title: 'Customer Address',
        type: 'object',
        fields: [
          {
            name: 'houseAddress',
            title: 'House Address',
            type: 'string',
            
          },
          {
            name: 'area',
            title: 'Area',
            type: 'string',
            
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
            
          }
        ]
      },
  
      {
        name: 'customerMobileNumber',
        title: 'Customer Mobile Number',
        type: 'string',
        
      },
  
      {
        name: 'invoiceNumber',
        title: 'Invoice Number',
        type: 'string',
        
      }
    ]
  }
  
  