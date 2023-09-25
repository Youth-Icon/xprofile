import { NextResponse } from 'next/server'
import supabase from '../../../../backend/supabase';

export async function GET(request: Request) {
    // console.log('request', request)
    let { data, error } = await supabase
        .from('profiles')
        .select('github,github_stars,github_followers')
        .not('github_stars', 'is',null)
        .order('github_stars', { ascending: false })
        .range(0, 10)
    if (error) console.error('Error: ', error)

    const arr = await Promise.all(
        data?.map(async (profile: any) => {
            // const res = await fetch(`https://api.github-star-counter.workers.dev/user/${profile.github}`)
            // const { stars } = await res.json()
            // console.log('stars', stars)
            const dat = await fetch(`https://api.github.com/users/${profile.github}`)
            const {  name } = await dat.json()
            // console.log('stars', name)
            const avatar_url = `https://avatars.githubusercontent.com/${profile.github}`
            return { ...profile, avatar_url, name }
        }) || []
    )
    // console.log('arr', arr)
    return NextResponse.json({ data:arr })
}
