import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(user: any): Promise<any> {
    let foundUser = await this.userRepository.findOne({
      where: { email: user.email }
    });
    if (!foundUser) {
      foundUser = await this.userRepository.save(user);
    }
    return foundUser;
  }
  
}
