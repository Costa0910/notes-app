import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

// emulator
// connectAuthEmulator(auth, "http://localhost:9099");
export const signup = (email: string, password: string) => {
  // emolator
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log(userCredential);
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
