import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Tool } from './entities/tool.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
	constructor(
		@InjectRepository(Tool) private readonly repository: Repository<Tool>,
	) {}

	create(createToolDto: CreateToolDto) {
		return this.repository.save(createToolDto);
	}

	findAll() {
		return this.repository.find();
	}

	findOne(id: number) {
		return this.repository.findOne({ where: { id } });
	}

	update(id: number, updateToolDto: UpdateToolDto) {
		return this.repository.update({ id }, updateToolDto);
	}

	remove(id: number) {
		return this.repository.delete({ id });
	}
}
