import { useState, useEffect } from "react";
import { Todo } from "./types/Todo";
import { TodoList } from "./components/TodoList";
import { AddTodoDialog } from "./components/AddTodoDialog";
import { TodoDetailDialog } from "./components/TodoDetailDialog";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  // 初期取得
useEffect(() => {
  const fetchTodos = async () => {
    const result = await invoke<Todo[]>("get_todos");
    setTodos(result);
  };
  fetchTodos();
}, []);

// 追加
const handleAdd = async (todo: Todo) => {
  await invoke("add_todo", { todo });
  setTodos(prev => [...prev, todo]);
};

// 削除
const handleDelete = async (id: number) => {
  await invoke("delete_todo", { id });
  setTodos(prev => prev.filter(t => t.id !== id));
};

  return (
    <div>
      <h1>TODOアプリ</h1>
      <button onClick={() => setShowAddDialog(true)}>TODOを追加</button>

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onSelect={setSelectedTodo}
      />

      <AddTodoDialog
        open={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onAdd={handleAdd}
      />

      <TodoDetailDialog
        todo={selectedTodo}
        onClose={() => setSelectedTodo(null)}
      />
    </div>
  );
}

export default App;
