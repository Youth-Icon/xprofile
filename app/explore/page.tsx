"use client"

import Cardui from '@/components/Cardui'
import React, { useEffect } from 'react'
import { Loader } from 'lucide-react'

export default function page() {
  const [profiles, setProfiles] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1);

  async function fetcher(page: number) {
    setLoading(true)
    const res = await fetch(`/api/profiles?page=${page}`);
    const { data } = await res.json()
    console.log(data)
    setProfiles(item => [...item, ...data])
    setLoading(false)
  }

  useEffect(() => {
    fetcher(page);
  }, [page])

  return (
    profiles.length === 0 ? <Loader /> :
      <div>

        <div className='p-4 mt-20 grid gap-4 grid-cols-3 '>
          {profiles.map((profile) => <Cardui key={profile.id} {...profile} />)}
        </div>
        <button
          className="px-4 py-2 w-[75%] block mx-auto font-medium bg-white border border-gray-700 text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded focus:outline-none focus:ring"
          onClick={() => setPage(prev => prev + 1)}>
          {loading ? <Loader /> : 'Load More'}
        </button>
      </div>
  )
}

