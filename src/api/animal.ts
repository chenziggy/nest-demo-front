import request from '@/api'
import {AnimalEntity} from '@/types/animal'

export function getAnimalList (): ApiRet<AnimalEntity[]> {
  return request({
    url: '/api/animal/list',
    method: 'get',
  })
}