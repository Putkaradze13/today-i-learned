const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render fact in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://siipeifkddtnaoxkmpvc.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpaXBlaWZrZGR0bmFveGttcHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDcyMTUsImV4cCI6MjAxNTc4MzIxNX0.Y2sErHmLBn0Uxg9Zx-69pO3w6KnwVd1B2s7e7OElRjA",
        authorisation:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpaXBlaWZrZGR0bmFveGttcHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDcyMTUsImV4cCI6MjAxNTc4MzIxNX0.Y2sErHmLBn0Uxg9Zx-69pO3w6KnwVd1B2s7e7OElRjA",
      },
    }
  );
  const data = await res.json();

  const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

function createFactsList(data) {
  const htmlArr = data.map(
    (fact) => `
  <li class='fact'>
    <p>
        ${fact.text}    
        <a
            class="source"
            href="${fact.source}"
            target="_blank"
            >(Source)</a
        >
    </p>
    <span 
        class="tag" 
        style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }"
        >${fact.category}
    </span>
  </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//  Toggle from visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

// let votesInteresting = 23;
// let votesMindblowing = 5;
// let votesFalse = 1;
