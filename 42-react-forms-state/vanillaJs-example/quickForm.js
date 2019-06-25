document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    postContent();
  });
});

function postContent() {
  const postDiv = document.getElementById("post-here");

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const cohortName = document.getElementById("cohort-name").value;
  const modNumber = document.querySelector("input[name = mod]:checked").value;

  const pFirst = document.createElement("p");
  pFirst.innerText = firstName;

  const pLast = document.createElement("p");
  pLast.innerText = lastName;

  const pCohortName = document.createElement("p");
  pCohortName.innerText = cohortName;

  const pModNumber = document.createElement("p");
  pModNumber.innerText = modNumber;

  postDiv.appendChild(pFirst);
  postDiv.appendChild(pLast);
  postDiv.appendChild(pCohortName);
  postDiv.appendChild(pModNumber);
}
