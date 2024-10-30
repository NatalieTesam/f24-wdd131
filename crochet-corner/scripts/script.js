const patterns = [
  {
    "id": 0,
    "name": "Chicken",
    "rating": 5,
    "difficulty": "beginner",
    "image": "images/chickens.jpg",
    "imageAlt": "various colors of round shaped yarn crochet chickens",
    "pattern": {
      "Body": [
        "1. 6 Sc in MR (6)",
        "2. [Inc] x 6 (12)",
        "3. [Sc, Inc] x 6 (18)",
        "4. [2 Sc, Inc] x 6 (24)",
        "5. [7 Sc, Inc] x 3 (27)",
        "6-7. Sc in each St around (27)",
        "8. [ 8 Sc, Inc] x 3 (30)",
        "9. 19 Sc, Inc, 10 Sc (31)",
        "10. 20 Sc, Inc, 10 Sc (32)",
        "11. 19 Sc, 2 Dec, 9 Sc (30)",
        "12. [3 Sc, Dec] x 6 (24)",
        "13. [2 Sc, Dec] x 6 (18)",
        "14. [Sc, Dec] x 6 (12)",
        "15. [Dec] x 6 (6)",
        "Finish off."
      ],
      "Wings": [
        "1. Ch 6, Sc, dc Inc, dc, dc Inc, Sc (7)",
        "Finish off with long tail to sew to body."
      ],
      "Comb": [
        "1. Ch 10, [Sc, dc Inc, Sl-St] x 3 (12)",
        "Finish off with long tail to sew to body."
      ]
    }
  },
  {
    "id": 1,
    "name": "Pig",
    "rating": 3,
    "difficulty": "intermediate",
    "image": "images/placeholder.jpg",
    "imageAlt": "round hot pink yarn crochet pig",
    "pattern": {
      "Body": [
        "1. 6 Sc in MR (6)",
        "2. [Inc] x 6 (12)",
        "3. [Sc, Inc] x 6 (18)",
        "4. [2 Sc, Inc] x 6 (24)",
        "5. [7 Sc, Inc] x 3 (27)",
        "6-15. Sc in each St around (27)",
        "16. [3 Sc, Dec] x 6 (24)",
        "17. [2 Sc, Dec] x 6 (18)",
        "18. [Sc, Dec] x 6 (12)",
        "19. [Dec] x 6 (6)",
        "Finish off."
      ],
      "Snout": [
        "1. 6 Sc in MR (6)",
        "2. [Inc] x 6 (12)",
        "3. BLO Sc in each St around (12)",
        "Finish off with long tail to sew to face."
      ],
      "Ears (Make 2)": [
        "1. 4 Sc in MR (4)",
        "2. [Sc Inc] x 2 (6)",
        "3. [2 Sc, Inc] x 2 (8)",
        "4. Sc in each St around (8) – Row 5",
        "Finish off with long tail to sew to head."
      ],
      "Feet (Make 4)": [
        "1. 4 Sc in MR (4)",
        "2. [Inc] x 4 (8)",
        "3. Sc in each St around (8)",
        "Finish off with long tail to sew to body."
      ],
      "Tail": [
        "1. Ch 8, Inc across Chain (14)",
        "Finish off with long tail to sew to back."
      ],
      "Notes": [
        "Eyes:Between Rows 3 & 4, 8 St apart on row 3, 9 on row 4.",
        "Nose:covers rows 1 & 2",
        "Tail:row 16"
      ]
    }
  },
  {
    "id": 2,
    "name": "Bald Eagle",
    "rating": 4,
    "difficulty": "hard",
    "image": "images/placeholder.jpg",
    "imageAlt": "Brown and White with yellow beak yarn crochet Bald Eagle",
    "pattern": {
      "Head": [
        "Start with white.",
        "1. Sc 6 in MR (6)",
        "2. [Inc] x 6 (12)",
        "3. [Sc, Inc] x 6 (18)",
        "4. [2 Sc, Inc] x 6 (24)",
        "5. [3 Sc, Inc] x 6 (30)",
        "6. Sc in each St around (30) – Row 10",
        "11. FLO [Sl-St, (3 Hdc), Sl-St] x 10 (50)",
        "Fasten off then switch to brown.",
        "BLO Sc in each St around (30)",
        "12. Sc in each St around (30) – Row 15",
        "16. [3 Sc, Dec] x 6 (24)",
        "17. [2 Sc, Dec] x 6 (18)",
        "18. [Sc, Dec] x 6 (12)",
        "19. [Dec] x 6 (6)",
        "Finish off."
      ],
      "Tail": [
        "Start with white.",
        "1. 6 sc in MR (6)",
        "2. [Sc, Inc] x 3 (9)",
        "3. Sc in each St around (9)",
        "Finish off with long tail to sew to body."
      ],
      "Beak": [
        "Start with yellow.",
        "1. 3 Sc in MR (3)",
        "2. [Inc] x 3 (6)",
        "3. [Sc, Inc] x 3 (9)",
        "Finish off with long tail to sew to head."
      ],
      "Wings (Make 2)": [
        "Start with brown.",
        "1. 6 Sc in MR (6)",
        "2. [Inc] x 6 (12)",
        "3. [3 Sc, Inc] x 3 (15)",
        "4. Sc in each St around (15) – Row 8",
        "Finish off with long tail to sew to body."
      ],
      "Notes": [
        "Eyes:Row 8 stitch 7, Row 8 stitch 13/14, each eye 2 away from nose.",
        "Tail:Top between 14 & 15, bottom between 16& 17.",
        "Beak:Top between 5 & 6, bottom between 9 & 9.",
        "Wings:About 7 away from middle (beak) stitch on each side sewn horizontally to Row 11."
      ]
    }
  },
  {
    "id": 3,
    "name": "Placeholder 1",
    "rating": 1,
    "difficulty": "beginner",
    "image": "images/placeholder.jpg",
    "imageAlt": "placeholder",
    "pattern": {}
  },
  {
    "id": 4,
    "name": "Placeholder 2",
    "rating": 2,
    "difficulty": "intermediate",
    "image": "images/placeholder.jpg",
    "imageAlt": "placeholder",
    "pattern": {}
  },
  {
    "id": 5,
    "name": "Placeholder 3",
    "rating": 1,
    "difficulty": "hard",
    "image": "images/placeholder.jpg",
    "imageAlt": "placeholder",
    "pattern": {}
  }
];

// Pattern modal template
function patternTemplate(info) {
  // turns the pattern information into the viewer
  return `<div class="patternCardViewer">
  <img src=${info.image} alt=${info.imageAlt} />
              <h3>${info.name}</h3>
              <p> Difficulty: ${info.difficulty}</p>
              <p> Rating: ${info.rating}</p>
              <div class="pattern-rows">
              </div>

  <button class="close-viewer">X</button>
</div>`;
}

// handles what happens when you click a pattern card
function viewHandler() {
  patternCard = event.target.closest(".pattern-card");
  patternName = patternCard.querySelector("h3").textContent;
  // checks between json elements to find the pattern that matches the pattern card's h3 that was clicked on
  patterns.forEach(element => {
    // patterns.find((item) => item.id == id)
    if (element.name == patternName) {
      console.log(element);
      document.body.insertAdjacentHTML("afterbegin", patternTemplate(element));
      // populates the pattern-rows information into the page
      for (const [key, value] of Object.entries(element.pattern)) {
        // the headings/parts of the pattern rows
        const keyTemplate = `<h4>${key}</h4>`;
        document.querySelector(".pattern-rows").insertAdjacentHTML("beforeend", keyTemplate);
        // adds the rows of each part
        value.forEach(row => {
          const rowTemplate = `<li>${row}</li>`;
          document.querySelector(".pattern-rows").insertAdjacentHTML("beforeend", rowTemplate);
        })
      }
    }
  })
  // event listener for the button to remove the whole viewer
  document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

// removes the whole pattern card viewer
function closeViewer() {
  document.querySelector(".patternCardViewer")?.remove();
}

const patternsSection = document.getElementById("patterns-section-output");

// populates the patterns page with cards
patterns.forEach(element => {
  const template = `<div class="pattern-card">
              <img src=${element.image} alt=${element.imageAlt} />
              <h3>${element.name}</h3>
              <p>${element.difficulty}</p>
          </div>`;

  patternsSection.insertAdjacentHTML("beforeend", template);
});

// selects all pattern cards
const patternCards = document.querySelectorAll(".pattern-card");

// adds a click listener to all the pattern card elements
patternCards.forEach(element => {
  element.addEventListener("click", viewHandler);
});