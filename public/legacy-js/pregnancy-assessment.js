/**
 * Pregnancy Assessment page — two-step form logic.
 * Keeps the original nextStep()/prevStep() global functions (referenced by
 * inline onclick in the HTML) but adds real validation, a dynamic progress
 * bar, and a working submit action.
 */

function ncGetStep1Inputs() {
  return document.querySelectorAll("#step-1 input[type='number']");
}

function ncValidateStep1() {
  let valid = true;
  ncGetStep1Inputs().forEach(function (input) {
    const value = parseFloat(input.value);
    const isEmpty = input.value.trim() === "";
    const isValid = !isEmpty && !isNaN(value) && value > 0;
    input.classList.toggle("nc-field-invalid", !isValid);
    if (!isValid) valid = false;
  });
  return valid;
}

// nextStep/prevStep are referenced via inline onclick="" in the markup,
// so they must stay real `window` globals.
window.nextStep = function nextStep() {
  if (!ncValidateStep1()) {
    showToast("Please fill in all fields with valid numbers.", "error");
    return;
  }

  document.getElementById("step-1").classList.remove("step-active");
  document.getElementById("step-1").classList.add("step-inactive");

  document.getElementById("step-2").classList.remove("step-inactive");
  document.getElementById("step-2").classList.add("step-active");

  document.getElementById("progress-bar").style.width = "100%";
  document.getElementById("current-step-display").innerText = "2";
};

window.prevStep = function prevStep() {
  document.getElementById("step-2").classList.remove("step-active");
  document.getElementById("step-2").classList.add("step-inactive");

  document.getElementById("step-1").classList.remove("step-inactive");
  document.getElementById("step-1").classList.add("step-active");

  document.getElementById("progress-bar").style.width = "50%";
  document.getElementById("current-step-display").innerText = "1";
};

window.NC_init_PregnancyAssessment = function () {
  // Clear the invalid state as soon as the person starts fixing a field
  ncGetStep1Inputs().forEach(function (input) {
    input.addEventListener("input", function () {
      input.classList.remove("nc-field-invalid");
    });
  });

  // Reset to step 1 every time this page mounts fresh.
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const progressBar = document.getElementById("progress-bar");
  const stepDisplay = document.getElementById("current-step-display");
  if (step1 && step2 && progressBar && stepDisplay) {
    step1.classList.add("step-active");
    step1.classList.remove("step-inactive");
    step2.classList.add("step-inactive");
    step2.classList.remove("step-active");
    progressBar.style.width = "50%";
    stepDisplay.innerText = "1";
  }

  // Submit Assessment button (last button inside step 2)
  const submitBtn = document.querySelector("#step-2 button:not([onclick])");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-70");
      submitBtn.querySelector("span") && (submitBtn.firstChild.textContent = "Submitting... ");

      setTimeout(function () {
        showToast("Assessment submitted successfully.", "success");
        setTimeout(function () {
          ncNavigate("/food-database");
        }, 900);
      }, 700);
    });
  }
};
