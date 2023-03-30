import { initializeApp } from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR-CREDENTIALS',
  authDomain: 'YOUR-CREDENTIALS',
  projectId: 'YOUR-CREDENTIALS',
  storageBucket: 'YOUR-CREDENTIALS',
  messagingSenderId: 'YOUR-CREDENTIALS',
  appId: 'YOUR-CREDENTIALS',
  measurementId: 'YOUR-CREDENTIALS'
};

app = initializeApp(firebaseConfig);
db = getFirestore(app);

const COLLECTION = 'Observations'

export const subscribeToPosts = (callback, sortField, SortDirection) => {
  return () => undefined;
}

export const addPost = async (title, description, image) => {

}

export const updatePost = async (docID, title, description, image) => {

}

export const deletePost = async (docID) => {

}

export const likePost = async (docID) => {

}

export const dislikePost = async (docID) => {

}