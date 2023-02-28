import { atom } from "recoil";

interface IToDo {
  text: string;
  category: string;
  id: number;
}

export const toDoList = atom<IToDo[]>({
  key: "TODO",
  default: [],
});
