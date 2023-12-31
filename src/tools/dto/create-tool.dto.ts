import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateToolDto {
	@ApiProperty()
	@IsString({ message: 'Title must be a string' })
	@Length(3, 50, { message: 'Title must be between 3 and 50 characters' })
	title: string;

	@ApiProperty()
	@IsString({ message: 'Link must be a string' })
	@Length(3, 50, { message: 'Link must be between 3 and 50 characters' })
	link: string;

	@ApiProperty()
	@IsString({ message: 'Description must be a string' })
	@Length(3, 100, {
		message: 'Description must be between 3 and 100 characters',
	})
	description: string;

	@ApiProperty({ type: [String] })
	@IsString({ message: 'Tags must be a string', each: true })
	@Length(3, 50, { message: 'Tags must be between 3 and 50 characters' })
	@IsNotEmpty()
	tags: string[];
}
