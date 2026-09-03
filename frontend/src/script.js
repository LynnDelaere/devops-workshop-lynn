const mainButton = document.querySelector("button");
const messageArea = document.querySelector(
  "#message, .message, [role='status']"
);

if (mainButton) {
  const buttonRow = document.createElement("div");
  buttonRow.className = "button-row";

  mainButton.parentNode.insertBefore(buttonRow, mainButton);
  buttonRow.appendChild(mainButton);

  const themeButton = document.createElement("button");
  themeButton.type = "button";
  themeButton.textContent = "Cozy mode";
  themeButton.setAttribute("aria-pressed", "false");
  buttonRow.appendChild(themeButton);

  const themeDescription = document.createElement("p");
  themeDescription.className = "theme-description";
  themeDescription.setAttribute("aria-live", "polite");
  themeDescription.textContent =
    "Arcade theme: neon cyan, lilac and hot pink.";

  buttonRow.insertAdjacentElement("afterend", themeDescription);

  function createExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top + rect.height / 2;
    const styles = getComputedStyle(document.body);

    const colours = [
      styles.getPropertyValue("--cyan").trim(),
      styles.getPropertyValue("--lilac").trim(),
      styles.getPropertyValue("--pink").trim(),
      styles.getPropertyValue("--yellow").trim()
    ];

    for (let i = 0; i < 28; i++) {
      const particle = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 100;

      particle.className = "particle";
      particle.style.left = `${centreX}px`;
      particle.style.top = `${centreY}px`;
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      particle.style.setProperty(
        "--particle-colour",
        colours[Math.floor(Math.random() * colours.length)]
      );

      document.body.appendChild(particle);
      particle.addEventListener("animationend", () => particle.remove());
    }
  }

  mainButton.addEventListener("click", () => {
    createExplosion(mainButton);

    if (messageArea) {
      messageArea.textContent = "Level unlocked — welcome to the workshop!";
    }
  });

  themeButton.addEventListener("click", () => {
    const cozyModeIsActive = document.body.classList.toggle("theme-anime");

    themeButton.textContent = cozyModeIsActive ? "Arcade mode" : "Cozy mode";
    themeButton.setAttribute("aria-pressed", String(cozyModeIsActive));

    themeDescription.textContent = cozyModeIsActive
      ? "Cozy anime theme: warm pink, lilac and peach."
      : "Arcade theme: neon cyan, lilac and hot pink.";
  });
}