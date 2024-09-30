async function submit() {
  const username = document.querySelector(".userInput").value;
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: username }),
  }).then(console.log(`Done`, username));
}
