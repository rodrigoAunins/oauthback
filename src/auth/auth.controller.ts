
import { Controller, Get, Req, UseGuards, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  
  constructor(private readonly authService: AuthService) {}
  
  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ summary: 'Inicio de autenticación con Google' })
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ApiOperation({ summary: 'Callback de Google OAuth' })
  async googleAuthCallback(@Req() req) {
    this.logger.log('Handling Google OAuth callback...');
    this.logger.log(`req.user: ${JSON.stringify(req.user)}`);  // Additional logging for req.user
    const user = await this.authService.validateUser(req.user);
    return {
      message: 'Usuario autenticado con éxito',
      user,
    };
  }
}
