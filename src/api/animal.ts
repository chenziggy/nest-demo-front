import axios from "@/api";
import { AnimalDto, AnimalEntity } from "@/types/animal";

export function queryAnimalList(): ApiRet<AnimalEntity[]> {
  return axios.get("/api/animal/list");
}

export function createAnimal(params: AnimalDto) {
  return axios.post("/api/animal", params);
}
