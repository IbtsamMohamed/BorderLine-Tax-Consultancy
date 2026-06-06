document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#navMenu");

  if (!navMenu || !menuToggle) {
    console.error("menuToggle or navMenu not found");
    return;
  }

  // Toggle menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Active link + close menu on click
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    document.querySelectorAll(".btn").forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

    if (window.innerWidth <= 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const isInsideMenu = navMenu.contains(e.target);
    const isToggle = menuToggle.contains(e.target);

    if (!isInsideMenu && !isToggle && window.innerWidth <= 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });

  // Reset on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navMenu.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });
});


/*document.querySelector(".getStarted").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    first_name: document.querySelector("[name='first_name']").value,
    last_name: document.querySelector("[name='last_name']").value,
    email: document.querySelector("[name='email']").value,
    message: document.querySelector("[name='message']").value,
  };

  try {
    const res = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      showToast("Message sent successfully ✅", "success");
    } else {
      showToast("Failed to send message ❌", "error");
    }
  } catch (err) {
    showToast("Server not running ❌", "error");
  }
});

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
*/