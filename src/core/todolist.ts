import type { List } from '@/lib/schema';
import { createNewTodolist, getTodolistByUuid } from '@/db/controller/todolist';

export class Todolist {
  private uuid = '';
  private lists: List[] = [];
  private name = '';

  constructor(name?: string) {
    this.name = name ?? '';
  }

  public get() {
    return {
      uuid: this.uuid,
      lists: this.lists,
      name: this.name,
    };
  }

  public async create() {
    const todolist = await createNewTodolist(this.name);
    this.uuid = todolist.uuid;
    this.lists = todolist.lists;
    this.name = todolist.name;
    return this.get();
  }

  public async getByUuid(uuid: string) {
    const todolistData = await getTodolistByUuid(uuid);
    this.uuid = todolistData.uuid;
    this.lists = todolistData.lists;
    this.name = todolistData.name;
    return this.get();
  }
}
