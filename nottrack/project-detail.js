document.addEventListener("DOMContentLoaded", function () {
  // Get the project slug from the URL path
  const path = window.location.pathname;
  const slug = path
    .split("/")
    .filter((segment) => segment)
    .pop();

  // Load project data
  loadProjectData(slug);

  // Add smooth transition to back button
  const backButton = document.querySelector('header a[href="/"]');
  if (backButton) {
    backButton.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(-3px)";
    });

    backButton.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  }
});

function loadProjectData(slug) {
  // This would normally fetch data from a JSON file or API
  // For this example, we'll use hardcoded data
  const projects = {
    larelief: {
      title: "LARelief",
      category: "Hackathon 3rd place",
      description:
        "LA wildfire resource platform with prevention resources with wildfire/air quality tracker and various languages support.",
      thumbnail: "./images/projects/larelief/thumbnail.jpg",
      githubUrl: "https://github.com/username/larelief",
      liveUrl: "https://larelief-demo.com",
      sections: [
        {
          title: "Project Purpose and Goals",
          content: "Problem statement and solution details...",
        },
        {
          title: "prototype",
          content: "Prototype description...",
        },
        // Additional sections
      ],
    },
    project2: {
      title: "Project 2",
      githubUrl: "https://github.com/username/project2",
      websiteUrl: "https://project2-demo.com",
      // Other project data would be here
    },
    project3: {
      title: "Project 3",
      githubUrl: "https://github.com/username/project3",
      websiteUrl: "https://project3-demo.com",
      // Other project data would be here
    },
  };

  // If we have data for this project
  if (projects[slug]) {
    const project = projects[slug];

    // Update page title
    document.title = `${project.title} | Portfolio`;

    // Update project title on page
    const titleElement = document.getElementById("project-title");
    if (titleElement) titleElement.textContent = project.title;

    // Update GitHub link
    const githubLink = document.getElementById("github-link");
    if (githubLink && project.githubUrl) githubLink.href = project.githubUrl;

    // Update website link
    const websiteLink = document.getElementById("website-link");
    if (websiteLink && project.websiteUrl)
      websiteLink.href = project.websiteUrl;

    // Additional data could be populated here
  }
}
