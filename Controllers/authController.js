import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';
import firebase from '../firebase.js';
import jwt from 'jsonwebtoken';

const db = getFirestore(firebase);

/**
 * Authenticate user
 */
export const userAuth = async (req, res) => {
    const user = { id: 1 }
    const token = jwt.sign({user}, process.env.SECRET_KEY);
    res.json({
        token
    });
}

/**
 * Bearer
 */
export const authVerify = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
