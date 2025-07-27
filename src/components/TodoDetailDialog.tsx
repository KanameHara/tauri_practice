import { Todo } from "../types/Todo";

type Props = {
  todo: Todo | null;
  onClose: () => void;
};

export const TodoDetailDialog = ({ todo, onClose }: Props) => {
  if (!todo) return null;

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", background: "#eee", marginTop: "1rem" }}>
      <h2>TODO詳細</h2>
      <p><strong>タイトル:</strong> {todo.title}</p>
      <p><strong>内容:</strong> {todo.content}</p>
      <button onClick={onClose}>閉じる</button>
    </div>
  );
};
