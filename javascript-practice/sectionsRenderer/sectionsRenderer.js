import { sections } from "./data/sections.js";

const splitSections = (sections) => {
  const [firstSection, ...restSections] = sections;
  return { firstSection, restSections };
};

const renderSection = ({ title, links }) => {
  return `
    <div class="section">
      <h2 onclick="toggleLinks('${title}')">${title}</h2>
      <ul id="${title.replace(/\s+/g, "")}" class="links-list">
        ${links
          .map(
            (link) => `
          <li><a href="${link.href}" target="_blank">${link.text}</a></li>
        `
          )
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

function toggleLinks(sectionTitle) {
  const sectionList = document.getElementById(sectionTitle.replace(/\s+/g, ""));
  sectionList.classList.toggle("open");
}

const sectionsHTML = renderSections(sections);
document.getElementById("sections-container").innerHTML = sectionsHTML;
