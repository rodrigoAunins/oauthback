import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(user: any): Promise<any> {
    this.logger.log('Validating user...');
    if (user && user.email) {
      const foundUser = {
        id: user.email, // Use email as the ID if you don't have a separate ID
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
      };
      this.logger.log(`User validated: ${JSON.stringify(foundUser)}`);

      // Create JWT payload and sign it
      const payload = { username: foundUser.email, sub: foundUser.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      this.logger.error('User information is incomplete or undefined.');
      return null;
    }
  }

  async generateJwt(user: any): Promise<string> {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);  // secret is removed from here
  }
  
}


