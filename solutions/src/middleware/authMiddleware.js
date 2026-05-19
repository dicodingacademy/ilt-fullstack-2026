import jwt from 'jsonwebtoken';
import AuthenticationError from '../exceptions/AuthenticationError.js';
import AuthorizationError from '../exceptions/AuthorizationError.js';

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AuthenticationError('Token tidak ditemukan');
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

    req.auth = {
      credentials: {
        id: decoded.id,
        role: decoded.role,
      },
    };

    next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }

    return res.status(401).json({
      status: 'fail',
      message: 'Token tidak valid',
    });
  }
};

const authorize = (...allowedRoles) => (req, res, next) => {
  try {
    const { role } = req.auth.credentials;

    if (!allowedRoles.includes(role)) {
      throw new AuthorizationError('Anda tidak memiliki akses ke resource ini');
    }

    next();
  } catch (error) {
    if (error instanceof AuthorizationError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }

    return res.status(403).json({
      status: 'fail',
      message: 'Akses ditolak',
    });
  }
};

export { authenticate, authorize };
