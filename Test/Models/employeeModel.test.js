import Employee from "../../Models/employeeModel";

describe('Test Model for Employee', () => {
    const employee = new Employee(
        '1',
        'John',
        'Doe',
        'Software Engineer',
        100000
    )
    
    test('Should match object length', () => {
        expect(Object.keys(employee).length).toBe(5)
    })

    test('Should match property', () => {
        const expectedKeys = ['id', 'first_name', 'last_name', 'position', 'salary']
        expect(Object.keys(employee).sort()).toEqual(expectedKeys.sort())
    })
})