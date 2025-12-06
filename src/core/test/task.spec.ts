import { beforeAll, describe, expect, test } from 'bun:test';
import { Task } from '@/core/task';

let $task: Task;
let UUID: string;

describe('Task', () => {
  beforeAll(async () => {
    $task = new Task();
    const inserted = await $task.create();
    UUID = inserted.uuid;

    expect(inserted.uuid).toBeDefined();
  });

  test('should retrieve an existing task when a UUID is provided', async () => {
    const data = await $task.getByUuid(UUID);
    expect(data.uuid).toBe(UUID);
  });
});
