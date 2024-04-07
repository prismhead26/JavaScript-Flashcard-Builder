// delete blog func
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.assign("/dashboard");
    } else {
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
    }
  }
};
// update blog func
const upButtonHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#update-blog-title").value.trim();
  const body = document
    .querySelector("#update-blog-body")
    .value.trim();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    
    if (response.ok) {
      document.location.assign(`/api/blogs/${id}`);
    } else {
      // alert modal
      let myModal = new bootstrap.Modal(
        document.getElementById("errorModal"),
        {}
      );
      myModal.show();
    }
  }
};
// Event listeners
document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);

document
  .querySelector("#update-button")
  .addEventListener("click", upButtonHandler);
