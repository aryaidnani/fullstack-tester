async function submit() {
  let user = document.querySelector(".usernameInput").value;
  console.log(user);
  await axios.post(`http://localhost:443/?userName=${user}`).then((res) => {
    console.log(res.data);
  });
}

async function find() {
  let user = document.querySelector(".userFindInput").value;
  console.log(user);
  await axios
    .get(
      `https://fullstack-tester-git-main-aryaidnanis-projects.vercel.app/?userName=${user}`
    )
    .then((res) => {
      document.querySelector(
        "h1"
      ).textContent = `Welcome ${res.data.foundUser[0].userName}`;
      console.log(res.data.foundUser[0].userName);
    });
}
