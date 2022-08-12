const projectSection = document.querySelector('.section-project');

const url = "https://raw.githubusercontent.com/sansanthi/portfolio-projects/main/data.json";
async function getProjects() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.map(item => {
        console.log(item);
        createProject(item);
    });
}

getProjects();


function createProject({projectName, projectDescription, viewPictures, details}) {
    // create Project
    const project = document.createElement('div');
    project.classList.add('project', 'flow');

    // Picture
    const picture = document.createElement('picture');
    const sourceDesktop = document.createElement('source');
    const sourceTablet = document.createElement('source');
    const imgMobile = document.createElement('img');
    imgMobile.src = viewPictures.mobile;
    imgMobile.classList.add('project-img');
    picture.appendChild(imgMobile);

    // Project description
    const description = document.createElement('div');
    description.classList.add('project-description', 'flow');
    const h1 = document.createElement('h1');
    h1.textContent = projectName;
    const text = document.createElement('p');
    text.textContent = projectDescription;
    const link = document.createElement('button');
    link.textContent = "view project";
    link.classList.add('btn', 'btn-white', 'btn-link', 'uppercase');
    description.appendChild(h1);
    description.appendChild(text);
    description.appendChild(link);
    // Append to project
    project.appendChild(picture);
    project.appendChild(description);

    // Append to section project
    projectSection.appendChild(project);
    const projectDetails = {projectName, projectDescription, ...details};
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        localStorage.setItem("detailsValue", JSON.stringify(projectDetails));
        getDetailsPage();
        
    })
}

function getDetailsPage() {
    
    location.href = "portfolio-view.html";
   
    
}