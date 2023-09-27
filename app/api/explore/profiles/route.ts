import { NextResponse } from "next/server";
// import supabase from '../../../../backend/supabase';

export async function GET(request: Request) {
  // const size = 6;
  // const url = new URL(request.url);
  // // console.log(url.searchParams.get('page'));
  // const page = parseInt(url.searchParams.get('page') || "1");
  // // console.log(page);
  // function getFromAndTo(page: number, size: number) {
  //     const from = (page - 1) * size;
  //     const to = page * size - 1;
  //     return { from, to };
  // }

  // const { from, to } = getFromAndTo(page, size);
  // let { data, error } = await supabase
  //     .from('profiles')
  //     .select('*')
  //     // .order('id', { ascending: true })
  //     .range(from, to)

  // if (error) console.error('Error: ', error)
  // // console.log(data)

  return NextResponse.json("dummy response");
}
