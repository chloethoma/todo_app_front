import {writable} from 'svelte/store';

export const tasks = writable([]);

export const getTaskList = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/tasks");
    const data = await res.json();
    tasks.set(data);
  };