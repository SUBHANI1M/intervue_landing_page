// Resource data array
const resources = [
  { level: "Easy", color: "primary" },
  { level: "Medium", color: "warning" },
  { level: "Hard", color: "success" },
];

// Reference to container
const container = document.getElementById("resourceContainer");

// Generate 3x3 cards (9 total)
for (let i = 0; i < 12; i++) {
  const res = resources[i % 3]; // Rotate through Easy, Medium, Hard

  const card = `
    <div class="col-md-4">
      <div class="card resource-card h-100 p-3">
        <div class="d-flex align-items-center mb-2">
          <span class="btn fw-bold px-4 text-white bg-${res.color} me-2">${res.level}</span>
          <small class="text-uppercase text-muted fw-semibold">
            Data Structures & Algorithms
          </small>
        </div>
        <p class="fw-semibold mb-2 text-start mt-3">Design a Free Food App</p>
        <p class="text-muted mb-0 text-start mt-1">
          We created this guide after speaking with our community of interviewers,
          which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.
        </p>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", card);
}
