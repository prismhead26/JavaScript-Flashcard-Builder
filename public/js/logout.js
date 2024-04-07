// logout handler func
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.assign("/");
  } else {
    // alert modal
    let myModal = new bootstrap.Modal(
      document.getElementById("errorModal"),
      {}
    );
    myModal.show();
  }
};

document.querySelector("#logout").addEventListener("click", logout);
