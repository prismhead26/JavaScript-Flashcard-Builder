// add blog func
const createBlog = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#new-note-title").value.trim();
    const body = document.querySelector("#new-note-body").value.trim();
  
    if (title && body) {
      const response = await fetch(`api/notes`, {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" },
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

  document
    .querySelector("#new-note")
    .addEventListener("click", createBlog);
