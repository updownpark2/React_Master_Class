import { useState } from "react";
import { useForm } from "react-hook-form";

interface ITodo {
  todo?: string;
}

const TodolistTraining = () => {
  const { register, watch, handleSubmit, reset } = useForm();
  const [todo, setTodo] = useState<ITodo[]>([]);

  const Pass = () => {
    setTodo((current: any) => [watch("Todo"), ...current]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Pass)}>
        <input {...register("Todo")} placeholder="todolist" />
        <button>제출</button>
      </form>
      <div>
        <ul>
          {todo?.map((item: any, index) => (
            <li key={index}>{`🔥 ${item}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodolistTraining;
