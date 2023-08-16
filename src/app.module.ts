import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HttpModule, PrismaClient, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
