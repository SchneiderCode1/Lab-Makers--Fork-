import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  projectId: "demo-semana6", // ID fictício para o emulador
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NEXT_PUBLIC_USE_EMULATOR === 'true') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}

export { db };