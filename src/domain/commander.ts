import { Command } from 'commander';
import { Todolist } from '@/core/todolist';
import { List } from '@/core/list';
import { Task } from '@/core/task';

const program = new Command();

program
  .command('create-todolist')
  .description('Create a new todo list')
  .argument('<name>', 'Name of the todo list')
  .action(async (name: string) => {
    const todolist = new Todolist(name);
    const created = await todolist.create();

    // biome-ignore lint/suspicious/noConsole: Keep it simple for poc
    console.log('Created Todolist:', created);
  });

program
  .command('create-list')
  .description('Create a new list of tasks assigned to a todo list')
  .argument('<title>', 'Title of the list')
  .action(async (title: string) => {
    const list = new List(title);
    const created = await list.create();

    // biome-ignore lint/suspicious/noConsole: Keep it simple for poc
    console.log('Created List:', created);
  });

program
  .command('create-task')
  .description('Create a new task assigned to a list')
  .argument('<name>', 'Name of the task')
  .argument('<description>', 'Description of the task')
  .argument('<position>', 'Position of the task in the list')
  .action(async (name: string, description: string, position: string) => {
    if (Number.isNaN(Number(position))) {
      console.error('Position must be a number');
      process.exit(1);
    }

    const task = new Task({ name, description, position: Number(position) });
    await task.create();

    // biome-ignore lint/suspicious/noConsole: Keep it simple for poc
    console.log('Created Task:', task.get());
  });

program.parse(process.argv);
