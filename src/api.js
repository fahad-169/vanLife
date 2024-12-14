// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdaoRmsmrq3y6_D-E_tIKRV9rGm53cSFE",
    authDomain: "vanlife-78cde.firebaseapp.com",
    projectId: "vanlife-78cde",
    storageBucket: "vanlife-78cde.firebasestorage.app",
    messagingSenderId: "589334903502",
    appId: "1:589334903502:web:4b980e48686aead1ea2e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring Fetcing Functions Below for FireStore
// we're making references for calls to get specific collections
// from the db.
const vansCollectionRef = collection(db, "vans");

// NEW VERSION:
export async function getVans(id) {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return vans;
}

// OLD VERSION:
// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans";
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         };
//     }
//     const data = await res.json();
//     return data.vans;
// }

// NEW VERSION:
export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const snapshot = await getDoc(docRef);
    const van = {
        ...snapshot.data(),
        id: snapshot.id,
    };
    return van;
}

// NEW VERSION:
export async function getHostVans(id) {
    const q = query(vansCollectionRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return vans;
}

// OLD VERSION:
// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status,
//         };
//     }
//     const data = await res.json();
//     return data.vans;
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
}

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
