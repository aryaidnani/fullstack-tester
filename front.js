async function submit() {
  const username = document.querySelector(".userInput").value;
  await fetch("https://fullstack-tester.vercel.app/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: username }),
  });
}
