import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

// emulator
// connectAuthEmulator(auth, "http://localhost:9099");
export const signup = async (email: string, password: string) => {
  console.log(email, password);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

signup("wVHkz@example.com", "123456");
