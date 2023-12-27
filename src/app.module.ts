import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ToolsModule } from './tools/tools.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot({
			type: process.env.DB_TYPE as 'postgres',
			host: process.env.DB_HOST,
			port: +process.env.DB_PORT,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [],
			autoLoadEntities: true,
			synchronize: true,
		}),
		ToolsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
