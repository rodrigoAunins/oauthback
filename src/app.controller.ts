import { Controller, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private jwtService: JwtService) {
    console.log('JWT Secret Key:', this.jwtService.secretOrPrivateKey);
  }

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
