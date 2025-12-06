import { createTask, getTaskByUuid } from '@/db/controller/task';

export class Task {
  private uuid: string;
  private position: number;
  private description?: string;
  private label: string;

  constructor(payload?: {
    position?: number;
    label?: string;
    description?: string;
    uuid?: string;
  }) {
    const {
      uuid = '',
      position = 1,
      label = '',
      description = '',
    } = payload || {};
    this.uuid = uuid;
    this.position = position;
    this.label = label;
    this.description = description;
  }

  public get() {
    return {
      uuid: this.uuid,
      position: this.position,
      label: this.label,
      description: this.description,
    };
  }

  public async create() {
    const task = await createTask();

    this.uuid = task.uuid;
    this.position = task.position;
    this.label = task.label;
    this.description = task.description;

    return this.get();
  }

  public async getByUuid(uuid: string) {
    const task = await getTaskByUuid(uuid);

    this.uuid = task.uuid;
    this.position = task.position;
    this.label = task.label;
    this.description = task.description;

    return this.get();
  }
}
