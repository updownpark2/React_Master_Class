import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import toDoState from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDoPaint from "./ToDoPaint";

const Todo = () => {
  const toDos = useRecoilValue(toDoState);

  /*
  const value = useRecoilValue(toDoState);
  const modFn = useSetRecoilState(toDoState);
  */

  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <CreateToDo />
      <ToDoPaint />
    </div>
  );
};

export default Todo;
