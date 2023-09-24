import { NextResponse } from 'next/server'
import supabase from '../../../backend/supabase';

export async function GET(request: Request) {

    // const dummyRecords = Array.from({ length: 25 }, (_, i) => ({
    //     xusername: `dummyUser${i}`,
    //     name: `Dummy User ${i}`,
    //     location: `Dummy Location ${i}`,
    //     banner_color: '#000000',
    //     about: `This is a dummy user ${i}.`,
    //     github: `dummyUser${i}`,
    //     tags: [`tag${i}`, `tag${i + 1}`],
    //     socials: [`social${i}`, `social${i + 1}`],
    //     repos: [`repo${i}`, `repo${i + 1}`],
    //     links: [`link${i}`, `link${i + 1}`]
    // }))

    // const { data, error } = await supabase
    //     .from('profiles')
    //     .insert(dummyRecords)

    const size = 6;
    const url = new URL(request.url);
    console.log(url.searchParams.get('page'));
    const page = parseInt(url.searchParams.get('page') || "1");
    console.log(page);
    function getFromAndTo(page: number, size: number) {
        const from = (page - 1) * size;
        const to = page * size - 1;
        return { from, to };
    }

    const {from,to}=getFromAndTo(page,size);
    let { data, error } = await supabase
        .from('profiles')
        .select('*')
        // .order('id', { ascending: true })
        .range(from , to)

    if (error) console.error('Error: ', error)
    console.log(data)

    return NextResponse.json({ data })
}
