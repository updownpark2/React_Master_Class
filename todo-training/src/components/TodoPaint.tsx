import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoList } from "../atoms";

const TodoPaint = () => {
  const todo = useRecoilValue(toDoList);
  const setTodo = useSetRecoilState(toDoList);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const LIID = event.currentTarget.parentElement?.id;
    setTodo((current) => current.filter((item) => String(item.id) !== LIID));

    //접근해야함
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <ul>
        {todo.map((item) => (
          <li id={String(item.id)} key={item.id}>
            {`🖍 ${item.text}`}
            <button onClick={onClick}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPaint;
