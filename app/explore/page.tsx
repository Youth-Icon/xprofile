"use client"

import Cardui from '@/components/Cardui'
import React, { useEffect, useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  const [profiles, setProfiles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [loadMore, setLoadMore] = useState(true)
  const [page, setPage] = useState(1);

  async function fetcher(page: number) {
    setLoading(true)
    const res = await fetch(`/api/profiles?page=${page}`);
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
      {profiles.length === 0 ? <Loader /> : <React.StrictMode>

        <div className='grid gap-4 lg:grid-cols-3 sm:grid-cols-2 '>
          {profiles.map((profile) => <Cardui key={profile.id} {...profile} />)}
        </div>
        {loadMore && <Button variant={'outline'}
          className="block mx-auto mt-10"
          onClick={() => setPage(prev => prev + 1)}>
          {loading ? <Loader /> : 'Load More'}
        </Button>}
      </React.StrictMode>
      }

    </div>
  )
}

