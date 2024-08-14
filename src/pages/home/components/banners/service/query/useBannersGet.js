import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { request } from '../../../../../../config/request'

export const useBannersGet = () => {
  return useQuery({
    queryKey: ["Banners"],
    queryFn: ()=> request.get("/banners").then((res) => res.data)
  })
}
