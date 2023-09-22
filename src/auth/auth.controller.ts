import { Controller, Get, Req, UseGuards, Logger, UnauthorizedException, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';

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
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    this.logger.log('Handling Google OAuth callback...');
    // Additional logging for req.user
    this.logger.log(`req.user: ${JSON.stringify(req.user)}`);

    const user = await this.authService.validateUser(req.user);
    if (!user) {
      throw new UnauthorizedException('User could not be authenticated');
    }

    const jwt = await this.authService.generateJwt(req.user);
    if (!jwt) {
      throw new UnauthorizedException('JWT could not be generated');
    }

    // Aquí, rediriges al usuario a una URL específica en tu aplicación Next.js
    // Pasas el JWT como un parámetro para que lo puedas recoger en el frontend
    res.redirect(`http://localhost:3001?jwt=${jwt}`);
  }
}
