import { taskSchema } from '@/lib/schema';

export function createTask() {
  return taskSchema.parse({
    uuid: crypto.randomUUID(),
    position: 1,
    label: '',
    description: '',
  });
}

export function getTaskByUuid(uuid: string) {
  return taskSchema.parse({
    uuid,
    position: 1,
    label: '',
    description: '',
  });
}
