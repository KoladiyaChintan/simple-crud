import { Injectable, NotFoundException } from '@nestjs/common';
import { Crud, Crudstatus } from './crud.model';
import { CreateDto } from './dto/create.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CrudService {
    private tasks: Crud[] = [];

    create(createTaskDto: CreateDto) {
        const { title, description } = createTaskDto

        const task: Crud = {
            id: uuid(),
            title,
            description,
            status: Crudstatus.OPEN
        };

        this.tasks.push(task);
        return task;
    }

    getAll(): Crud[] {
        return this.tasks;
    }

    getByID(id: string): Crud {
        const found = this.tasks.find((task) => task.id === id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    deleteByID(id: string): Crud[] {
        const found = this.getByID(id);
        this.tasks = this.tasks.filter((task) => task.id == found.id)
        return this.tasks;
    }

    updateByID(id: string, status: Crudstatus): Crud {
        const task = this.getByID(id);
        task.status = status;
        this.tasks.push(task);
        return task;
    }
}
