import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

interface JWTPayload {
  data: string;
}

export class JETAuth {
  static create() {
    const token = jwt.sign({ data: "Douglinhas" }, SECRET, { expiresIn: '2h' });
  
    return token;
  }

  static async verifyMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');
    
    if (!token) {
      return res.status(401).json({ error: 'Token não encontrado!' });
    }
  
    try {
      const decoded = jwt.verify(token, SECRET) as JWTPayload;
  
      if (decoded.data !== "Douglinhas") {
        return res.status(401).json({ message: 'Token incorreto!' });
      }
      
      next();
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  }
}
