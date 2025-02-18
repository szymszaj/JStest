import { sections } from "./data/sections.js";

const splitSections = (sections) => {
  const [firstSection, ...restSections] = sections;
  return { firstSection, restSections };
};

const generateLinkHTML = (link) => `
  <li><a href="${link.href}" target="_blank">${link.text}</a></li>
`;

const generateLinksListHTML = (links, title) => `
  <ul id="${title.replace(/\s+/g, "")}" class="links-list">
    ${links.map(generateLinkHTML).join("")}
  </ul>
`;

const renderSection = ({ title, links }) => `
  <div class="section">
    <h2 onclick="toggleLinks('${title}')">${title}</h2>
    ${generateLinksListHTML(links, title)}
  </div>
`;

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
