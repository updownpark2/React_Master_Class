import { useRecoilValue } from "recoil";
import toDoState from "./atoms";

const ToDoPaint = () => {
  interface IToDo {
    text: string;
    id?: number;
    category: "TO_DO" | "DOING" | "DONE";
    //의도적으로 type을 통해 해당 하는 recoil의 value를 제한함
    // 즉 , 해당 atom의 value인 toDos를
  }
  const toDos = useRecoilValue<IToDo[]>(toDoState);
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>{toDo.text}</li>
      ))}
    </ul>
  );
};
export default ToDoPaint;
