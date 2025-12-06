import { listSchema } from '@/lib/schema';

export function createList() {
  return listSchema.parse({ uuid: crypto.randomUUID(), title: '', tasks: [] });
}

export function getListByUuid(uuid: string) {
  return listSchema.parse({ uuid, title: '', tasks: [] });
}
