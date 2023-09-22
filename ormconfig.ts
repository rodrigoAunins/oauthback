import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '5qtxnFd7osVy',
  database: 'oAuth',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormconfig;
