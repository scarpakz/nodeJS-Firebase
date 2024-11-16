import Product from "../../Models/productModel";

describe('Test Model for Product', () => {
    const product = new Product(
        '1',
        'Laptop',
        500,
        'Best Buy',
        10
    )

    test('Should match object length', () => {
        expect(Object.keys(product).length).toBe(5)
    })

    test('Should match property', () => {
        const expectedKeys = ['id', 'name', 'price', 'retailer', 'amountInStock']
        expect(Object.keys(product).sort()).toEqual(expectedKeys.sort())
        expect(Object.keys(product).length).toBe(5)
    })
})