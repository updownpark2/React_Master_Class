import { useState } from "react";
import { useForm } from "react-hook-form";
import { Interface } from "readline";

interface IForm {
  CHECK: { type: string; message: string };
  ID: { type: string; message: string };
  PASS: { type: string; message: string };
}

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const Pass = (data: IForm) => {
    console.log(data);
  };
  console.log(errors?.ID?.message);

  return (
    <div>
      <form onSubmit={handleSubmit(Pass)}>
        <button>제출</button>
        <h2>{`당신의 입력값 ${watch("ID")}`}</h2>
        <h2>{errors?.ID?.message as string}</h2>
        <input
          {...register("ID", {
            required: { value: true, message: "필수입력사항입니다." },
          })}
          placeholder="ID"
        />

        <h2>{`당신의 입력값 ${watch("PASS")}`}</h2>
        <h2>{errors?.PASS?.message as string}</h2>
        <input
          {...register("PASS", {
            required: { value: true, message: "필수입력사항입니다." },
          })}
          placeholder="PASS"
        />
        <h2>{`당신의 입력값 ${watch("CHECK")}`}</h2>
        <h2>{errors?.CHECK?.message as string}</h2>
        <input
          {...register("CHECK", {
            required: { value: true, message: "필수입력사항입니다." },
          })}
          placeholder="CHECK"
        />
      </form>
    </div>
  );
};

/*interface IFormData {
  Email?: { type: string; message: string };
  First_name?: { type: string; message: string };
  Last_name?: { type: string; message: string };
  Password?: { type: string; message: string };
  Password1?: { type: string; message: string };
  User_name?: { type: string; message: string };
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormData>();
  const onValid = (data: IFormData) => {
    if (data.Password1 !== data.Password) {
      setError("Password1", { message: "Password are net the same" });
    }
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "필수입력사항입니당!",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver 이메일만 사용이가능합니다.",
            },
          })}
          placeholder="Email"
        />
        <span style={{ color: "red" }}>{errors?.Email?.message as string}</span>
        <input
          {...register("First_name", {
            required: "필수입력사항입니당!",
          })}
          placeholder="First_name"
        />
        <span style={{ color: "red" }}>
          {errors?.First_name?.message as string}
        </span>
        <input
          {...register("Last_name", {
            required: "필수입력사항입니당!",
          })}
          placeholder="Last_name"
        />
        <span style={{ color: "red" }}>
          {errors?.User_name?.message as string}
        </span>
        <input
          {...register("User_name", {
            required: "필수입력사항입니당!",
          })}
          placeholder="User_name"
        />
        <span style={{ color: "red" }}>
          {errors?.Password?.message as string}
        </span>
        <input
          {...register("Password", {
            required: "필수입력사항입니당!",
          })}
          placeholder="Password"
        />
        <span style={{ color: "red" }}>
          {errors?.Password1?.message as string}
        </span>
        <input
          {...register("Password1", {
            required: "필수입력사항입니당!",
          })}
          placeholder="Password1"
        />
        <span style={{ color: "red" }}>{errors?.Email?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
*/

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
export default Login;
