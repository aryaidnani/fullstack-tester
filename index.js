async function submit() {
  // body = {
  //   userName: document.querySelector(".usernameInput").value,
  // };

  // console.log(body.userName);
  // await axios.post(`https://fullstack-tester.vercel.app/`, body).then((res) => {
  //   console.log(res);
  // });
  let usernameVal = document.querySelector(".usernameInput").value;
  console.log(usernameVal);

  const res = await fetch("https://fullstack-tester.vercel.app/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName: usernameVal }),
  });

  console.log(await res.json());
}

async function findUser() {
  body = {
    userName: document.querySelector(".userFindInput").value,
  };
  console.log(body.userName);
  console.log(`Under development`);
  // await axios.get(`http://localhost:443/`, body).then((res) => {
  //   document.querySelector("h1").textContent = `Welcome ${res.data}`;
  //   console.log(res.data);
  // });
}
