import { createTask, getTaskByUuid } from '@/db/controller/task';

export class Task {
  private uuid: string;
  private position: number;
  private description?: string;
  private name: string;

  constructor(payload?: {
    position?: number;
    name?: string;
    description?: string;
    uuid?: string;
  }) {
    const {
      uuid = '',
      position = 1,
      name = '',
      description = '',
    } = payload || {};
    this.uuid = uuid;
    this.position = position;
    this.name = name;
    this.description = description;
  }

  public get() {
    return {
      uuid: this.uuid,
      position: this.position,
      name: this.name,
      description: this.description,
    };
  }

  public async create() {
    const task = await createTask({
      name: this.name,
      description: this.description,
      position: this.position,
    });

    this.uuid = task.uuid;
    this.position = task.position;
    this.name = task.name;
    this.description = task.description;

    return this.get();
  }

  public async getByUuid(uuid: string) {
    const task = await getTaskByUuid(uuid);

    this.uuid = task.uuid;
    this.position = task.position;
    this.name = task.name;
    this.description = task.description;

    return this.get();
  }
}
