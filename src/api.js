// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase.config'


export async function getSongs() {

    const querySnapshot = await getDocs(collection(db, 'songs'))

    return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}