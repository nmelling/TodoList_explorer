import { beforeAll, describe, expect, test } from 'bun:test';
import { List } from '@/core/list';

let $list: List;
let UUID: string;

describe('List', () => {
  beforeAll(async () => {
    $list = new List();
    const inserted = await $list.create();
    UUID = inserted.uuid;

    expect(inserted.uuid).toBeDefined();
    expect(inserted.tasks).toEqual([]);
  });

  test('should retrieve an existing list when a UUID is provided', async () => {
    const data = await $list.getByUuid(UUID);
    expect(data.uuid).toBe(UUID);
    expect(Array.isArray(data.tasks)).toBe(true);
  });
});
