import React from 'react'
import {useQuery} from '@tanstack/react-query'
import { request } from '../../../../../../config/request'

export const useCatalogGet = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data)
  })
}
