import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';
import firebase from '../firebase.js';
import Employee from '../Models/employeeModel.js';

const db = getFirestore(firebase);

/**
 * Get all employees
 */
export const getEmployees = async (req, res) => {
    try {
        const employees = await getDocs(collection(db, 'Employee'));
        const employeeArray = [];

        if (employees.empty) {
            res.status(400).send('No Employees found');
        } else {
            employees.forEach((doc) => {
                const employee = new Employee(
                    doc.id,
                    doc.data().first_name,
                    doc.data().last_name,
                    doc.data().position,
                    doc.data().salary,
                );
                employeeArray.push(employee);
            })
            res.status(200).send(employeeArray);
        }
    } catch(error) {
        res.status(400).send(error.message);
    }
}
