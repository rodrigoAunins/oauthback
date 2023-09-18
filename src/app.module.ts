import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';  // Asegúrate de que la ruta sea la correcta

@Module({
  imports: [AuthModule],  // Agrega AuthModule aquí
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
