const addButton = document.querySelector(`.add`);
const loadButton = document.querySelector(`.load`);
const firstNameInput = document.querySelector(`.firstName`);
const lastNameInput = document.querySelector(`.lastName`);
const salaryInput = document.querySelector(`.salary`);

const lists = document.querySelector(`.lists`);
const tbody = document.querySelector(`.tbody`);
const firstNameData = document.querySelector(`.firstNameData`);
const lastNameData = document.querySelector(`.lastNamedata`);
const salaryData = document.querySelector(`.salaryData`);

// if (
//   !lastNameInput.value === " " &&
//   !firstNameInput === " " &&
//   !salaryInput === " "
// ) {

// }

addButton.addEventListener("click", () => {
  lists.innerHTML += ` </br> <label ><input type="checkbox" class="checkbox" />

<span class="firstNameData">${firstNameInput.value}</span>
<span class="lastNameData">${lastNameInput.value}</span>
<span class="salaryData">${salaryInput.value}</span>
</label>`;
  firstNameInput.value = "";
  lastNameInput.value = "";
  salaryInput.value = "";
});

loadButton.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".checkbox");
  tbody.innerHTML = ""; // Cədvəli təmizləmək

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const firstName = checkbox.nextElementSibling.textContent; // İlk span
      const lastName =
        checkbox.nextElementSibling.nextElementSibling.textContent; // İkinci span
      const salary =
        checkbox.nextElementSibling.nextElementSibling.nextElementSibling
          .textContent; // Üçüncü span

      tbody.innerHTML += `
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${salary}</td>
                </tr>
            `;
    }
  });
});
