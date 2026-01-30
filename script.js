function doneTask(task){
    task.querySelector('button').remove();
    task.querySelector('button').remove();
    task.className="p-3 border border-gray-300 rounded mb-2 shadow-sm bg-gray-200";
    document.getElementById('completedList').appendChild(task);
}
function addTask(){
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('todoList');
    const task = input.value.trim();
    if(task){
        const listItem = document.createElement('li');
        listItem.className = "p-3 border border-gray-300 rounded mb-2 shadow-sm flex flex-row justify-between items-center";
        const div = document.createElement('div');
        div.className="flex gap-2";
        const span = document.createElement('span');

        span.textContent = task;
        const done=document.createElement('button');

        done.textContent='Done';
        done.className="bg-green-500 text-white px-2 py-1 rounded";
          const del=document.createElement('button');

        del.textContent='Delete';
        del.className="bg-red-500 text-white px-2 py-1 rounded";
        
        del.onclick = () => listItem.remove();
        done.onclick=() => doneTask(listItem);
        listItem.appendChild(span);
        div.appendChild(done);
        div.appendChild(del);
        listItem.appendChild(div);
        taskList.appendChild(listItem);
        input.value = '';

    }



}
