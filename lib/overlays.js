(() => {
  const overlay = document.getElementById("iframeOverlay");
  const iframe = document.getElementById("iframeContent");
  const openBlogBtn = document.getElementById("openBlog");
  const closeOverlayBtn = document.getElementById("closeOverlay");

  const disableBodyScroll = () => {
    document.body.classList.add("no-scroll");

    // Prevent scroll via keyboard
    window.addEventListener("keydown", preventScrollKeys, true);
    // Prevent wheel-based scrolling
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
  };

  const enableBodyScroll = () => {
    document.body.classList.remove("no-scroll");

    window.removeEventListener("keydown", preventScrollKeys, true);
    window.removeEventListener("wheel", preventDefault);
    window.removeEventListener("touchmove", preventDefault);
  };

  const preventDefault = (e) => e.preventDefault();

  const preventScrollKeys = (e) => {
    const keys = [
      "ArrowUp", "ArrowDown",
      "PageUp", "PageDown",
      "Space", " ",
      "Home", "End"
    ];
    if (keys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const scrollToTop = () => {
    return new Promise((resolve) => {
      // Scroll smoothly to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Wait until scroll completes
      let lastPosition = -1;
      const check = () => {
        const current = window.scrollY || document.documentElement.scrollTop;
        if (current === 0 || current === lastPosition) {
          resolve();
        } else {
          lastPosition = current;
          requestAnimationFrame(check);
        }
      };
      check();
    });
  };

  if (overlay && iframe && openBlogBtn && closeOverlayBtn) {
    openBlogBtn.addEventListener("click", async () => {
      await scrollToTop();
      iframe.src = "views/blog.html";
      overlay.classList.add("active");
      disableBodyScroll();
    });

    closeOverlayBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      iframe.src = "";
      enableBodyScroll();
    });
  }

  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn !== openBlogBtn) {
        alert("Opening " + btn.title);
      }
    });
  });
})();
