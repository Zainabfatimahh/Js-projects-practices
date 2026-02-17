<!DOCTYPE html>
<html>
<head>
  <title>Simple To-Do App</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background: white;
      width: 350px;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      text-align: center;
    }

    h2 {
      margin-bottom: 15px;
    }

    input {
      width: 70%;
      padding: 8px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    button {
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      background: #667eea;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background: #5563c1;
    }

    ul {
      list-style: none;
      padding: 0;
      margin-top: 15px;
    }

    li {
      background: #f1f1f1;
      padding: 8px;
      margin-top: 5px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .delete {
      background: red;
      padding: 4px 8px;
      font-size: 12px;
    }

    .delete:hover {
      background: darkred;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>📝 My To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Enter task">
    <button onclick="addTask()">Add</button>

    <ul id="taskList"></ul>
  </div>

  <script>
    function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.textContent = taskText;

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.className = "delete";
      deleteBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
  </script>

</body>
</html>