<script>
  import { onMount } from 'svelte';
  import { tasks } from './lib/taskStore';
  import Header from './lib/Header.svelte';
  import TaskList from './lib/TaskList.svelte';
  import AddTask from './lib/AddTask.svelte';

  const getTaskList = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/tasks');
    const data = await res.json();
    tasks.set(data);
  };

  onMount(async () => {
    await getTaskList();
  });

  const addNewTask = async (event) => {
    const newTask = event.detail.data;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks`, {
        method: 'POST',
        body: JSON.stringify(newTask),
      });
      tasks.update((allTasks) => [...allTasks, newTask]);

    } catch (error) {
      console.error('Erreur sur la fonction postTask', error);
    }
  };

  const updateTask = async (event) => {
    const taskData = event.detail.data;
    const taskId = event.detail.id;

    try {
      await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        method: 'PUT',
        body: JSON.stringify(taskData),
      });
    } catch (error) {
      console.error('Erreur sur la fonction updateTask', error);
    }
  };

  const deleteTask = async (event) => {
    const taskId = event.detail.id;

    try {
      await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      tasks.update((allTasks) =>
        allTasks.filter((task) => task.id !== taskId)
      );

    } catch (error) {
      console.error('Erreur sur la fonction deleteTask', error);
    }
  };
</script>

<Header />
<TaskList on:updateStatus={updateTask} on:updateTaskName={updateTask} on:delete={deleteTask} />
<AddTask on:newTask={addNewTask} />
