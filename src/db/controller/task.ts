import { taskSchema } from '@/lib/schema';

export function createTask({ name = '', description = '', position = 1 } = {}) {
  return taskSchema.parse({
    uuid: crypto.randomUUID(),
    position,
    name,
    description,
  });
}

export function getTaskByUuid(uuid: string) {
  return taskSchema.parse({
    uuid,
    position: 1,
    name: '',
    description: '',
  });
}
