import { NextResponse } from 'next/server'
import supabase from '../../../backend/supabase';

export async function GET(request: Request) {
    let { data, error } = await supabase
        .from('profiles')
        .select('github')

    if (error) console.error('Error: ', error)

    const arr = await Promise.all(
        data?.map(async (profile: any) => {
            const res = await fetch(`https://api.github-star-counter.workers.dev/user/${profile.github}`)
            const { stars } = await res.json()
            return { ...profile, stars }
        }) || []
    )

    return NextResponse.json({ arr })
}
