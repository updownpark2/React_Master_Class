import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First_name")} placeholder="First_name" />
        <input {...register("Last_name")} placeholder="Last_name" />
        <input {...register("User_name")} placeholder="User_name" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

/*
function ToDoList() {
  const [todo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTodo(value);
  };

  const onSubmut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToDoError("");
    if (todo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");

    setTodo("");
  };

  return (
    <div>
      <form onSubmit={onSubmut}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}
*/
export default ToDoList;
