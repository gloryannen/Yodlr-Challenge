// Load users into a table in Admin page

let $userList = $("#user_list");

$(async function fetchUsers() {
  let res = await axios.get("/users");
  let users = res.data;

  for (let user of users) {
    let u = `<tr>
          <th scope="row" id="user-${user.id}">${user.id}</th>
					<td>${user.firstName} ${user.lastName}</td>
					<td>${user.email}</td>
				 </tr>`;

    $userList.append($(u));
  }
});
