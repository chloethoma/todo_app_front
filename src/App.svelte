<script>
  import {onMount} from 'svelte';
  import Header from "./lib/Header.svelte";
  import TaskList from "./lib/TaskList.svelte";
  import AddTask from "./lib/AddTask.svelte";
  import {getTaskList, tasks} from './lib/taskStore';

  onMount(async () => {
    await getTaskList()
  });

  const addNewTask = async (event) => {
    const newTask = event.detail.data

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks`,
        {
          method: "POST",
          body:JSON.stringify(newTask)
        }
      );
      tasks.update(allTasks => [...allTasks, newTask]);
    } catch (error) {
      console.error("Erreur sur la fonction postTask", error);
    }
  }

  const updateTask = async (event) => {
    const updateTask = event.detail.data;
    const updateTaskId = event.detail.id;
    
    try {
      await fetch(`http://127.0.0.1:8000/api/tasks/${updateTaskId}`,
        {
          method: "PUT",
          body: JSON.stringify(updateTask),
        }
      );
    } catch (error) {
      console.error("Erreur sur la fonction updateTask", error);
    }
  };

  const deleteTask = async (event) => {
    const deleteTaskId = event.detail.id;

    try {
      await fetch(`http://127.0.0.1:8000/api/tasks/${deleteTaskId}`,
        {
          method: "DELETE",
        }
      );
      tasks.update((allTasks) => allTasks.filter((task) => task.id !== deleteTaskId))
    } catch (error) {
      console.error("Erreur sur la fonction deleteTask", error);
    }
  };


</script>

<Header/>
<TaskList on:updateStatus={updateTask} on:delete={deleteTask}/>
<AddTask on:newTask={addNewTask}/>

