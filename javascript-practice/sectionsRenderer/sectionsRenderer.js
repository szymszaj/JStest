const sections = [
  { title: "Wstęp", links: ["link1", "link2"] },
  { title: "Rozdział 1", links: ["link3", "link4"] },
  { title: "Rozdział 2", links: ["link5", "link6"] },
  { title: "Rozdział 3", links: ["link7", "link8"] },
];

const splitSections = (sections) => {
  const [firstSection, ...restSections] = sections;
  return { firstSection, restSections };
};

const renderSection = ({ title, links }) => {
  return `
    <div class="section">
      <h2>${title}</h2>
      <ul>
        ${links
          .map((link) => `<li><a href="${link}">${link}</a></li>`)
          .join("")}
      </ul>
    </div>
  `;
};

const renderSections = (sections) => {
  const { firstSection, restSections } = splitSections(sections);

  const firstSectionHTML = renderSection(firstSection);
  const restSectionsHTML = restSections.map(renderSection).join("");

  return `
    <div class="sections-container">
      <div class="first-section">${firstSectionHTML}</div>
      <div class="rest-sections">${restSectionsHTML}</div>
    </div>
  `;
};

const sectionsHTML = renderSections(sections);
document.getElementById("sections-container").innerHTML = sectionsHTML;
