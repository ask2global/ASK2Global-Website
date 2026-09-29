import jwt from 'jsonwebtoken';

// Creates a signed token containing the user's id and role.
// Used right after a successful register/login.
export function signToken(user) {
    return jwt.sign({ id: user._id, role: user.role },
        process.env.JWT_SECRET, { expiresIn: '7d' }
    );
}

// Checks the "Authorization: Bearer <token>" header and attaches
// req.user = { id, role } if the token is valid.
export function requireAuth(req, res, next) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Missing or invalid Authorization header' });

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

// Use after requireAuth to restrict a route to specific roles.
// Example: router.get('/admin', requireAuth, requireRole('employee'), handler)
export function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: 'You do not have access to this resource' });
        }
        next();
    };
}