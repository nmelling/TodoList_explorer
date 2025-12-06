import type { List } from '@/lib/schema';
import { createNewTodolist, getTodolistByUuid } from '@/db/controller/todolist';

export class Todolist {
  private uuid = '';
  private lists: List[] = [];

  public get() {
    return {
      uuid: this.uuid,
      lists: this.lists,
    };
  }

  public async create() {
    const todolist = await createNewTodolist();
    this.uuid = todolist.uuid;
    this.lists = todolist.lists;
    return this.get();
  }

  public async getByUuid(uuid: string) {
    const todolistData = await getTodolistByUuid(uuid);
    this.uuid = todolistData.uuid;
    this.lists = todolistData.lists;
    return this.get();
  }
}
