import { beforeAll, describe, expect, test } from 'bun:test';
import { Todolist } from '@/core/todolist';

let $todolist: Todolist;
let UUID: string;

describe('Todolist', () => {
  beforeAll(async () => {
    $todolist = new Todolist();
    const inserted = await $todolist.create();
    UUID = inserted.uuid;

    expect(inserted.uuid).toBeDefined();
    expect(inserted.lists).toEqual([]);
  });

  test('should retrieve an existing todolist when a UUID is provided', async () => {
    const data = await $todolist.getByUuid(UUID);
    expect(data.uuid).toBe(UUID);
    expect(Array.isArray(data.lists)).toBe(true);
  });
});
