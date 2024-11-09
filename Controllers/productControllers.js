import firebase from '../firebase.js';
import Product from '../Models/productModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import jwt from 'jsonwebtoken';

const db = getFirestore(firebase);

/**
 * Create a new product
 */
export const createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'Product'), data);
        res.status(200).send('product created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

/**
 * Get all products
 */
export const getProducts = async (req, res, next) => {
    try {
        jwt.verify(req.token, process.env.SECRET_KEY, async (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                const products = await getDocs(collection(db, 'Product'));
                const productArray = [];
                
                if (products.empty) {
                    res.status(400).send('No Products found');
                } else {
                    products.forEach((doc) => {
                        const product = new Product(
                            doc.id,
                            doc.data().name,
                            doc.data().price,
                            doc.data().retailer,
                            doc.data().amountInStock,
                        );
                        productArray.push(product);
                    });
            
                    res.status(200).send(productArray);
                }
                next();
            }
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
};

/**
 * Get a single product by id
 */
export const getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = doc(db, 'Product', id);
        const data = await getDoc(product);
        if (data.exists()) {
            res.status(200).send(data.data());
        } else {
            res.status(404).send('product not found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

/**
 * Update a product by id
 */
export const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = doc(db, 'Product', id);
        await updateDoc(product, data);
        res.status(200).send('product updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

/**
 * Delete a product by id
 */
export const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, 'Product', id));
        res.status(200).send('product deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};