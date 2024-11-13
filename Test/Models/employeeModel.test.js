import Employee from "../../Models/employeeModel";

describe('Test Model for Employee', () => {
    test('Should match property', () => {
        const employee = new Employee(
            '1',
            'John',
            'Doe',
            'Software Engineer',
            100000
        )
        expect(employee).toEqual({
            id: '1',
            first_name: 'John',
            last_name: 'Doe',
            position: 'Software Engineer',
            salary: 100000
        })
    })
})