import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_SECRET } from 'src/configs/jwt-secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Correct field and function
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }
  // The validate method is required
  async validate(payload: { sub: string; username: string }) {
    // You can add custom validation logic here if needed
    // For now, we simply return the decoded payload
    return { userId: payload.sub, username: payload.username };
  }
}
