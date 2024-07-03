import jwt, { JwtPayload } from "jsonwebtoken";

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwt.decode(token) as { exp: number };
    if (!decodedToken || !decodedToken.exp) {
      return true; // Invalid token
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const verifyToken = (token: string): JwtPayload | null => {
  const secretKey = process.env.NEXT_JWT_SECRET_KEY as string;
  try {
    return jwt.verify(token, secretKey) as JwtPayload;
  } catch (error) {
    return null;
  }
};
