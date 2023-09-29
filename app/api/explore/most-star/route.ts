import { NextResponse } from "next/server";
import { db } from "@/backend/firebase";
import { query, collection, orderBy, limit, getDocs } from "firebase/firestore";

export async function GET(request: Request) {
  let baseQuery = query(
    collection(db, "profiles"),
    orderBy("github_stars", "desc"),
    limit(10)
  );

  const dataSnapshot = await getDocs(baseQuery);
  // console.log(data);
  const data = dataSnapshot.docs.map((doc) => doc.data()) || [];
  return NextResponse.json({ data });
}
