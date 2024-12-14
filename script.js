document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
    const themeToggles = document.querySelectorAll("input[name='toggle']");
    let currentTheme = 1;
  
    let currentOperation = "";
    let currentResult = null;
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (button.classList.contains("delete")) {
          currentOperation = currentOperation.slice(0, -1);
        } else if (button.classList.contains("reset")) {
          currentOperation = "";
          currentResult = null;
        } else if (button.classList.contains("equal")) {
          try {
            currentOperation = currentOperation.replace(/x/g, "*");
            currentResult = eval(currentOperation);
            currentOperation = currentResult.toString();
          } catch {
            currentOperation = "Error";
          }
        } else {
          currentOperation += value;
        }
  
        display.textContent = currentOperation || "0";
      });
    });
  
    themeToggles.forEach((toggle, index) => {
      toggle.addEventListener("change", () => {
        if (toggle.checked) {
          currentTheme = index + 1;
          updateTheme(currentTheme);
        }
      });
    });
  
    function updateTheme(theme) {
      const root = document.documentElement;
  
      // Define themes
      const themes = {
        1: {
          "--bg-color": "#3b4664",
          "--calc-bg": "#242d44",
          "--btn-bg": "#f0eed2",
          "--btn-color": "#444",
          "--btn-shadow": "#b6b3af",
          "--btn-hover": "#d1ccc0",
          "--display-bg": "#181f32",
          "--display-color": "#ffffff",
          "--dr-bg": "#647299",
          "--dr-color": "#ffffff",
          "--dr-shadow": "#444e6b",
          "--dr-hover": "#353f5e",
          "--equal-bg": "#d03f2f",
          "--equal-color": "#ffffff",
          "--equal-shadow": "#91261a",
          "--equal-hover": "#b33224",
          "--toggle-container-color":"#222b44",
          "--slider": "#91261a",
        },
        2: {
          "--bg-color": "#06567D",
          "--calc-bg": "#29576D",
          "--btn-bg": "#123E53",
          "--btn-color": "#497388",
          "--btn-shadow": "#2A4B5E",
          "--btn-hover": "#78A6BC",
          "--display-bg": "#123E53",
          "--display-color": "#ffffff",
          "--dr-bg": "#497388",
          "--dr-color": "#113C51",
          "--dr-shadow": "#355266",
          "--dr-hover": "#4A6A7D",
          "--equal-bg": "#1E657A",
          "--equal-color": "#013A4A",
          "--equal-shadow": "#0C495C",
          "--equal-hover": "#387A8A",
          "--toggle-container-color":"#123E53",
          "--slider": "#78A6BC",
        },
        3: {
          "--bg-color": "#25004F",
          "--calc-bg": "#1e0836",
          "--btn-bg": "#56077c",
          "--btn-color": "#150020",
          "--btn-shadow": "#3d045b",
          "--btn-hover": "#7a0ba4",
          "--display-bg": "#1e0836",
          "--display-color": "#ffffff",
          "--dr-bg": "#3C1068",
          "--dr-color": "#1B0131",
          "--dr-shadow": "#29034a",
          "--dr-hover": "#3e0562",
          "--equal-bg": "#b81c55",
          "--equal-color": "#530000",
          "--equal-shadow": "#7f143e",
          "--equal-hover": "#d9266e",
          "--toggle-container-color":"#3C1068",
          "--slider": "#1e0836",
        },
      };
  
      // Apply theme styles
      const selectedTheme = themes[theme];
      Object.entries(selectedTheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    }
  
    // Initialize theme
    updateTheme(currentTheme);
  });
  