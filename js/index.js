document.querySelector("#signup-form .actions ul li:last-child a").onclick =
  function () {
    let arrInput = document.querySelectorAll("input, select");

    let user = {};
    for (let input of arrInput) {
      let { id, value } = input;
      user = { ...user, [id]: value };
    }
    console.log(user);

    let htmlUser = "";
    for (let key in user) {
      htmlUser += `
          <tr>
              <th>${key}</th>
              <th>${user[key]}</th>
          </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = htmlUser;
  };
