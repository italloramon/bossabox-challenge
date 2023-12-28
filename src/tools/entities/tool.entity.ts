import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tools' })
export class Tool {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({})
	title: string;

	@Column()
	link: string;

	@Column()
	description: string;

	@Column('text', { array: true })
	tags: string[];
}
