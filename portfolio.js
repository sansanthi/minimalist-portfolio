

const projectSection = document.querySelector('.section-project');

const url = "https://raw.githubusercontent.com/sansanthi/portfolio-projects/main/data.json";
async function getProjects() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    localStorage.setItem('projectData', JSON.stringify(data));
    data.map(item => {
        // console.log(item);
        createProject(item);
    });
}

getProjects();


function createProject(projectData) {
    // create Project
    // console.log('projectData', projectData)
    const project = document.createElement('div');
    project.classList.add('project', 'flow');

    // Picture
    const picture = document.createElement('picture');

    const sourceDesktop = document.createElement('source');
    sourceDesktop.classList.add('project-img');
    sourceDesktop.srcset = projectData.viewPictures.desktop;
    sourceDesktop.media = '(min-width: 900px)';

    const sourceTablet = document.createElement('source');
    sourceTablet.classList.add('project-img');
    sourceTablet.srcset = projectData.viewPictures.tablet;
    sourceTablet.media = '(min-width: 900px)'; 

    const imgMobile = document.createElement('img');
    imgMobile.src = projectData.viewPictures.mobile;

    imgMobile.classList.add('project-img');
    picture.append(sourceDesktop, sourceTablet, imgMobile);

    // Project description
    const description = document.createElement('div');
    description.classList.add('project-description', 'flow');
    const h1 = document.createElement('h1');
    h1.textContent = projectData.projectName;
    const text = document.createElement('p');
    text.textContent = projectData.projectDescription;
    text.classList.add('description-text');
    const link = document.createElement('button');
    link.textContent = "view project";
    link.classList.add('btn', 'btn-white', 'btn-link', 'uppercase');
    description.appendChild(h1);
    description.appendChild(text);
    description.appendChild(link);
    // Append to project
    project.append(picture, description);
    

    // Append to section project
    projectSection.appendChild(project);

    const projectId = projectData.id;
    const projectName = projectData.projectName;
    const projectDescripton = projectData.projectDescription;
    const details = projectData.details;
    const projectDetails = {projectId, projectName, projectDescripton, details};
    
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const detailsValue = {projectId};
        // localStorage.setItem("detailsValue", JSON.stringify(projectDetails));
        localStorage.setItem("detailsValue", JSON.stringify(detailsValue));

        getDetailsPage();
        
    })
}

function getDetailsPage() {
    
    location.href = "portfolio-view.html";
    // location.pathname = "portfolio-view/manage";
   
    
}