import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import ormconfig from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    // JwtModule is removed here, it should only be in AuthModule
  ],
  controllers: [AppController],  // AuthController is moved to AuthModule
  providers: [AppService],  // AuthService is moved to AuthModule
})
export class AppModule {}
