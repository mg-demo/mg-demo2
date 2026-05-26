// users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  
  create(@Body() createUserDto: CreateUserDto) {
    // Logic to save data to a database would go here
    return {
      message: 'User created successfully',
      data: createUserDto,
    };
  }
}
