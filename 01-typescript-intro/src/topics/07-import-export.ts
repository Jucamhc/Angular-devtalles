import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
  {
    description: 'Nilia',
    price: 100,
  },
  {
    description: 'iPad',
    price: 150,
  },
]

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 })

console.log("El resultado es " + total + " con impuestos seria " + tax);
