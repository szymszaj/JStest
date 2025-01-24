const sections = [
  {
    title: "Wstęp",
    links: [
      { text: "Link 1", href: "https://example.com/link1" },
      { text: "Link 2", href: "https://example.com/link2" },
    ],
  },
  {
    title: "Rozdział 1",
    links: [
      { text: "Link 3", href: "https://example.com/link3" },
      { text: "Link 4", href: "https://example.com/link4" },
    ],
  },
  {
    title: "Rozdział 2",
    links: [
      { text: "Link 5", href: "https://example.com/link5" },
      { text: "Link 6", href: "https://example.com/link6" },
    ],
  },
  {
    title: "Rozdział 3",
    links: [
      { text: "Link 7", href: "https://example.com/link7" },
      { text: "Link 8", href: "https://example.com/link8" },
    ],
  },
];

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
