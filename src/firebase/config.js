// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, limit } from "firebase/firestore";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getAllDocuments = async () => {
    try {
        const quotesDocumetsQuery = query(
            collection(db, "fuckit-quotes"),
            // limit(10)
        )
        const querySnapshot = await getDocs(quotesDocumetsQuery);
        const promises = querySnapshot.docs.map(async (doc) => {
            const id = doc.id;
            const data = doc.data();
            const document = { id, data };
            return document;
        });
      
        const allDocs = await Promise.all(promises);
      
        return allDocs;
    } catch (error) {
        console.log(error.message);
    }
}

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const pathReference = ref(storage, 'Images Landscape/');

export const getFiles = async () => {
    try {
        const filesDownloadLinks = [];
        // List all files in folder reference
        const folderRef = await listAll(pathReference);
        // Get url download for files in folder reference
        const downloadPromises = folderRef.items.map(async (item) => {
            const downloadLink = await getDownloadURL(item);
            return downloadLink;
        });
        // Wait for data fetching to be completed
        const allDownloadLinks = await Promise.all(downloadPromises);
        // Save files link
        filesDownloadLinks.push(...allDownloadLinks);
        return filesDownloadLinks;
    } catch (error) {
        console.log(error.message);
    }
};

