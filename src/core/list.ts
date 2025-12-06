import type { Task } from '@/lib/schema';
import { createList, getListByUuid } from '@/db/controller/list';

export class List {
  private uuid = '';
  private title = '';
  private tasks: Task[] = [];

  public get() {
    return {
      uuid: this.uuid,
      title: this.title,
      tasks: this.tasks,
    };
  }

  public async create() {
    const list = await createList();
    this.uuid = list.uuid;
    this.title = list.title;
    this.tasks = list.tasks;
    return this.get();
  }

  public async getByUuid(uuid: string) {
    const list = await getListByUuid(uuid);
    this.uuid = list.uuid;
    this.title = list.title;
    this.tasks = list.tasks;

    return this.get();
  }
}
