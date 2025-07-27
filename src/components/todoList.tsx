import { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onSelect: (todo: Todo) => void;
};

export const TodoList = ({ todos, onDelete, onSelect }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ cursor: "pointer", marginRight: "1rem" }}
            onClick={() => onSelect(todo)}
          >
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};
