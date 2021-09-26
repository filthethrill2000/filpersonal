import { filpersonal } from "../../declarations/filpersonal";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with filpersonal actor, calling the greet method
  const greeting = await filpersonal.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
