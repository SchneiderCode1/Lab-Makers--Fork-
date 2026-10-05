import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  projectId: "entrega-6-makers", // Use o mesmo ID de projeto cadastrado no .firebaserc ou firebase.json
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_EMULATOR === "true") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

export { db };