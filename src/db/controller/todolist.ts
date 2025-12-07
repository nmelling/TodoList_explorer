import { todolistSchema } from '@/lib/schema';

export function getTodolistByUuid(uuid: string) {
  return todolistSchema.parse({ uuid, lists: [] });
}

export function createNewTodolist(name = '') {
  return todolistSchema.parse({
    uuid: crypto.randomUUID(),
    lists: [],
    name,
  });
}
