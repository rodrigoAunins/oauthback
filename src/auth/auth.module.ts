import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Use a more secure secret and keep it in environment variables
      signOptions: { expiresIn: '1h' },
    }),
    // ... (your existing imports)
  ],
  providers: [AuthService,GoogleStrategy],  // ... (your existing providers)
  controllers: [AuthController],  // ... (your existing controllers)
})
export class AuthModule {}
