import { atom } from "recoil";

interface IToDo {
  text: string;
  id?: number;
  category: "TO_DO" | "DOING" | "DONE";
  //의도적으로 type을 통해 해당 하는 recoil의 value를 제한함
  // 즉 , 해당 atom의 value인 toDos를
}

const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export default toDoState;
