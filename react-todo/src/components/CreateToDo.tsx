import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import toDoState from "./atoms";

const CreateToDo = () => {
  interface IForm {
    toDo: string;
  }

  const { handleSubmit, register, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const onSubmit = (data: IForm) => {
    console.log(data);
    console.log("add to do", data.toDo);
    setValue("toDo", "");
    setToDos((current) => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
      ...current,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "Please wirte a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
