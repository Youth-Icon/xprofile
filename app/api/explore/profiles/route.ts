import { NextResponse } from 'next/server'
import supabase from '../../../../backend/supabase';
import {db, auth} from '../../../firebase';
import { query, collection, orderBy, startAt, endAt, getDocs, startAfter, limit } from "firebase/firestore";
export async function GET(request: Request) {

    const size = 6;
    const url = new URL(request.url);
    // console.log(url.searchParams.get('page'));
    const page = parseInt(url.searchParams.get('page') || "1");
    // console.log(page);
    function getFromAndTo(page: number, size: number) {
        const from = (page - 1) * size;
        const to = page * size - 1;
        return { from, to };
    }

    const { from, to } = getFromAndTo(page, size);
    // let { data, error } = await supabase
    //     .from('profiles')
    //     .select('*')
    //     // .order('id', { ascending: true })
    //     .range(from, to)

    let q = query(
        collection(db, 'profiles'),
        orderBy('github_stars', 'desc'),
        startAfter(from),
        limit(to-from+1)
    );

    let querySnapshot = await getDocs(q);

    let data = querySnapshot.docs.map(doc => doc.data());
    let error = querySnapshot.empty ? 'No documents found' : null;
    console.log(data);

    if (error) console.error('Error: ', error)
    // console.log(data)

    return NextResponse.json({ data, error })
}
