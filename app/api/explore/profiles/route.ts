import { NextResponse } from 'next/server'
import { db } from '../../../../backend/firebase';
import { query, collection, orderBy, doc, getDocs, getDoc, startAfter, limit } from "firebase/firestore";

export async function GET(request: Request) {
    const size = 6;
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || "1");
    const lastDocId = url.searchParams.get('lastdocid')!;
    try {
        var baseQuery = query(
            collection(db, 'profiles'),
            orderBy('github_stars', 'desc'),
            orderBy('__name__'),
            limit(6)
        );
        if (lastDocId != "undefined") {
            const lastDoc = await getDoc(doc(db, 'profiles', lastDocId));
            baseQuery = query(
                collection(db, 'profiles'),
                orderBy('github_stars', 'desc'),
                orderBy('__name__'),
                startAfter(lastDoc),
                limit(6)
            );
        }
        const querySnapshot = await getDocs(baseQuery);
        const data = querySnapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        });
        const error = querySnapshot.empty ? 'No documents found' : null;
        return NextResponse.json({ data, error })
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ error: e })
    }
}
