import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore();

export const addPostService = (postName, postDescription, postPost, postAuthor) => {
    try {
        const docRef = addDoc(collection(db, "posts"), {
          name: postName,
          description: postDescription,
          post: postPost,
          author: postAuthor
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}