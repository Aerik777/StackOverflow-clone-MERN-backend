import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    if (req.method === 'GET'){
        next();
        return;
    }

    const { token } = req.cookies;
    if(!token){
        res.status(403).send('Unauthorized');
        return;
    }
    const validUser = jwt.verify(token, process.env.JWT_SECRET);
    if(!validUser || !validUser.type === 'user'){
        res.status(403).send('Unauthorized');
        return;
    }

    req.validUser = validUser;
    next();
};

export default authMiddleware;