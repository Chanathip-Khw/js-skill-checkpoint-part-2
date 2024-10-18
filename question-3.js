async function getUsers() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await userData.json();
  const filteredData = data
    .filter((user) => user.name.length > 17)
    .map((user) => user.name);
  console.log(filteredData);
}

getUsers();
