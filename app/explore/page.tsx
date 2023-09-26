"use client"

import Cardui from '@/components/Cardui'
import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MostStarredCard from '@/components/MostStarredCard'
import {cn} from '@/lib/utils'

export default function Page() {
  const [profiles, setProfiles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(true)
  const [page, setPage] = useState(1);
  const [mostStar, setMostStar] = useState<any[]>([])
  
  
  useEffect(() => {
    async function fetchMostStar() {
      const res = await fetch(`/api/explore/most-star`);
      // console.log(res)
      const { data } = await res.json()
      // console.log(data)
      setMostStar(data)
    }
    fetchMostStar();
  }, [])

  async function fetcher(page: number) {
    setLoading(true)
    const res = await fetch(`/api/explore/profiles?page=${page}`);
    const { data } = await res.json()
    if(data.length === 0){
      setLoading(false)
      setLoadMore(false)
      return
    }
    // console.log(data)
    setProfiles(item => [...item, ...data])
    setLoading(false)
  }

  useEffect(() => {
    fetcher(page);
  }, [page])

  return (
    <div className='p-6 mt-20'>
      <div className='w-[100%]'>
        <h1 className='text-4xl font-bold'>Profiles with most Github Stars</h1>
        <p className='text-gray-500 my-2'>Find and connect with people</p>
        <div className='flex scrollbar pb-4 overflow-x-scroll gap-4 my-7'>
          {mostStar?.map((eachprof, key)=> 
              <MostStarredCard key={key} {...eachprof} />
          )}
        </div>
      </div>
      {profiles.length === 0 ? <Loader /> : <div className='mt-10'>
        <h1 className='text-4xl font-bold my-2'>Explore</h1>
        <p className='text-gray-500 my-2'>Find and connect with people</p>
        <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-2 my-8 '>
          {profiles.map((profile) => <Cardui key={profile.id} {...profile} />)}
        </div>
        {loadMore && 
        <Button className={cn("border hover:bg-zinc-200 block mx-auto mt-10 border-zinc-400")} variant={"outline"} onClick={() => setPage(prev => prev + 1)}>
            
            {loading ? <Loader /> : 'Load More'}</Button>
          }
      </div>
      }

    </div>
  )
}

