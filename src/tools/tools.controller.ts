import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('tools')
@ApiTags('tools')
export class ToolsController {
	constructor(private readonly toolsService: ToolsService) {}

	@Post()
	create(@Body() createToolDto: CreateToolDto) {
		return this.toolsService.create(createToolDto);
	}

	@Get()
	@Public()
	@ApiQuery({ name: 'tag', required: false })
	findAll(@Query('tag') tag: string) {
		return tag ? this.toolsService.findByTag(tag) : this.toolsService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.toolsService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
		return this.toolsService.update(+id, updateToolDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.toolsService.remove(+id);
	}
}
