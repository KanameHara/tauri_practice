import { useState } from "react";
import { Todo } from "../types/Todo";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (todo: Todo) => void;
};

export const AddTodoDialog = ({ open, onClose, onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title || !content) return;
    onAdd({
      id: Date.now(),
      title,
      content,
    });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!open) return null;

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", background: "#eee" }}>
      <h2>TODO追加</h2>
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="内容"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>追加</button>
      <button onClick={onClose}>キャンセル</button>
    </div>
  );
};
