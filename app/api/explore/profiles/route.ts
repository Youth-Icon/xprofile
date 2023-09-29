import { NextResponse } from "next/server";
import { db, auth } from "@/backend/firebase";
import {
  query,
  collection,
  orderBy,
  doc,
  startAt,
  endAt,
  getDocs,
  getDoc,
  startAfter,
  limit,
} from "firebase/firestore";
export async function GET(request: Request) {
  const size = 6;
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const lastDocId = url.searchParams.get("lastdocid")!;
  // console.log(page);
  // function getFromAndTo(page: number, size: number) {
  //     const from = (page - 1) * size;
  //     const to = page * size - 1;
  //     return { from, to };
  // }

  // const { from, to } = getFromAndTo(page, size);
  try {
    var baseQuery = query(
      collection(db, "profiles"),
      orderBy("github_stars", "desc"),
      orderBy("__name__"),
      limit(6)
    );
    if (lastDocId != "undefined") {
      // console.log("in if last doc exists",lastDocId);
      const lastDoc = await getDoc(doc(db, "profiles", lastDocId));
      // console.log("last doc",lastDoc.data());
      baseQuery = query(
        collection(db, "profiles"),
        orderBy("github_stars", "desc"),
        orderBy("__name__"),
        startAfter(lastDoc),
        limit(6)
      );
    }
    const querySnapshot = await getDocs(baseQuery);
    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    const error = querySnapshot.empty ? "No documents found" : null;
    // console.log("in if ",data);
    return NextResponse.json({ data, error });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}
