import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  //NotImplementedException,
  //NotImplementedException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { username: string; password: string }) {
    //throw new NotImplementedException('This method is not implemented');
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    //throw new NotImplementedException();
    return request.user;
  }
}
