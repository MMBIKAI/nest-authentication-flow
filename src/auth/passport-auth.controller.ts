import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  //NotImplementedException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from 'src/guards/passport-local.guard';
import { PassportJwtAuthGuard } from 'src/guards/passport-jwt.guard';

@Controller('auth-v2')
export class PassportAuthContorller {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Request() request) {
    // throw new NotImplementedException();
    return this.authService.signIn(request.user);
  }

  @Get('me')
  @UseGuards(PassportJwtAuthGuard)
  getUserInfo(@Request() request) {
    //throw new NotImplementedException();
    return request.user;
  }
}
