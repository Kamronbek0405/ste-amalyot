import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { request } from '../../../../../../config/request'

export const usePhoneGet = () => {
  return useQuery({
    queryKey: ["Phone"],
    queryFn: ()=> request.get("/phones").then((res) => res.data)
  })
}
