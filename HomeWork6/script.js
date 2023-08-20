async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const userData = await response.json();

    console.log("User Data:");
    console.log("id:", userData.id);
    console.log("name:", userData.name);
    console.log("username:", userData.username);
    console.log("email:", userData.email);
    console.log("phone:", userData.phone);
    console.log("website:", userData.website);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchUser();

function fetchUserPromise() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Відповідь була невірною");
      }
      return response.json();
    })
    .then((userData) => {
      console.log("User Data:");
      console.log("id:", userData.id);
      console.log("name:", userData.name);
      console.log("username:", userData.username);
      console.log("email:", userData.email);
      console.log("phone:", userData.phone);
      console.log("website:", userData.website);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchUserPromise();
