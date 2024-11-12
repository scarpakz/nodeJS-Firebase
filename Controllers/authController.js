import jwt from 'jsonwebtoken';

/**
 * Authenticate user
 */
export const userAuth = async (req, res) => {
    const user = { 
        email: req.body.email,
        password: req.body.password
     }
    const token = jwt.sign({user}, process.env.SECRET_KEY);
    res.status(200).send({
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
