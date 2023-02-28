import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { toDoList } from "../atoms";
import TodoPaint from "./TodoPaint";

//여기서 Input을받아온다.

function TodoInput() {
  const { register, handleSubmit, setValue } = useForm<IData>();
  const [todo, setTodo] = useRecoilState(toDoList);

  interface IData {
    Todo: string;
  }

  const PassValidation = (data: IData) => {
    setTodo((current) => [
      ...current,
      { text: data.Todo, category: "TODO", id: Date.now() },
    ]);
    setValue("Todo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(PassValidation)}>
        <input {...register("Todo")} placeholder="해야할 일!!" />
      </form>
      <TodoPaint />
    </div>
  );
}

export default TodoInput;
