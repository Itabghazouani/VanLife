import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, doc, where, getDocs, getDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBS5Q_xN1ZLG0_8GqqFerqDYeF4Vvhzgk0",
  authDomain: "vanlife-1de89.firebaseapp.com",
  projectId: "vanlife-1de89",
  storageBucket: "vanlife-1de89.appspot.com",
  messagingSenderId: "600647625411",
  appId: "1:600647625411:web:0afa6a831b6644c2d8d076"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")



export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  const van = {
    ...snapshot.data(),
    id: snapshot.id
    }
  return van
}
// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//       }
//   }
//   const data = await res.json()
//   return data.vans
// }



export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "La7PxvYwDqFh9gQnXNAT"))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}


// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}
