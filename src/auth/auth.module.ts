import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: '456789',
      signOptions: { expiresIn: '1h' },
    }),
    // ... other imports
  ],
  providers: [AuthService, GoogleStrategy],  // JwtModule is removed from here
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
