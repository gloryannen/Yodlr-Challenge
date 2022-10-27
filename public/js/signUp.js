// Handle user signup on form submission

const $signUp = $("#signup_form");

async function signup(e) {
  e.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();

  try {
    await axios.post("http://localhost:3000/users", {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  } catch (err) {
    console.error("ERROR:", err);
  }
  $signUp.trigger("reset");
}

$signUp.on("submit", signup);
