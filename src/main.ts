import { mount } from "svelte";
import { initializeApp } from "firebase/app";

import "./app.css";
import App from "./App.svelte";
import { getStorage } from "firebase/storage";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;

const firebaseConfig = {
  apiKey: "AIzaSyBnzhJmKi9KjP2h2hU_GCzvpUQSCXcZe-0",
  authDomain: "rumbleremixmixer.firebaseapp.com",
  projectId: "rumbleremixmixer",
  storageBucket: "rumbleremixmixer.appspot.com",
  messagingSenderId: "192919010589",
  appId: "1:192919010589:web:8811d21b9ffb5231a475f4",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
