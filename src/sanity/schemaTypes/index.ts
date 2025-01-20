
import { type SchemaTypeDefinition } from 'sanity'
import product from "../product"
import order from "../order"
import customer from "../customer"
import invoice from "../invoice"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,customer,order,invoice,]
}


