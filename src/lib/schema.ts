import { z } from 'zod';

export const taskSchema = z.object({
  uuid: z.uuid(),
  position: z.number().positive(),
  description: z.string().optional(),
  label: z.string(),
})

export const listSchema = z.object({
  uuid: z.uuid(),
  title: z.string(),
  tasks: z.array(taskSchema),
})

export const todolistSchema = z.object({
  uuid: z.uuid(),
  lists: z.array(listSchema),
})

export type Task = z.infer<typeof taskSchema>;
export type List = z.infer<typeof listSchema>;
export type Todolist = z.infer<typeof todolistSchema>;

