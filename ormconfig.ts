import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1284',
  database: 'OAuth-Local',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormconfig;
