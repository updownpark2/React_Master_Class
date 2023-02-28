import { useRecoilValue } from "recoil";
import { toDoList } from "../atoms";

const TodoPaint = () => {
  const todo = useRecoilValue(toDoList);
  return (
    <div>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{`🖍 ${item.text}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPaint;
