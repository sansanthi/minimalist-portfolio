
const projectView = document.querySelector('.project-view');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');


document.addEventListener('DOMContentLoaded', ()=> {
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    console.log(projectData)
    const {projectId} = JSON.parse(localStorage.getItem("detailsValue"));
   console.log('project:', projectId);
   
    getDetailsPage(projectData, projectId);

    nextAndPrev(projectData, projectId);
    
});



function getDetailsPage(projectData, projectId) {

    let detailsProject = projectData.find(data => data.id === projectId);
    let {details} = detailsProject;
    console.log(details)

    // Main Picture
    const mainPicture = document.createElement('picture');
    // Desktop
    const sourceDesktop = document.createElement('source');
    sourceDesktop.classList.add('project-image');
    sourceDesktop.srcset = details.mainPicture.desktop;
    sourceDesktop.media = '(min-width: 900px)';
    //Tablet
    const sourceTablet = document.createElement('source');
    sourceTablet.classList.add('project-image');
    sourceTablet.srcset = details.mainPicture.tablet;
    sourceTablet.media = '(min-width: 600px)';
    //Mobile
    const sourceMobile = document.createElement('img');
    sourceMobile.classList.add('project-image');
    sourceMobile.src = details.mainPicture.mobile;
    mainPicture.append(sourceDesktop, sourceTablet, sourceMobile);

    // Project Details
    const projectDetails = document.createElement('article');
    projectDetails.classList.add('project-details');
    // About project
    const aboutProject = document.createElement('div');
    aboutProject.classList.add('about-project', 'flow');

    const h1 = document.createElement('h1');
    h1.textContent = detailsProject.projectName;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = detailsProject.projectDescription;

    const tags = document.createElement('div');
    tags.classList.add('tags');

    const tagsText1 = document.createElement('p');
    tagsText1.textContent = details.design.join(' / ');

    const tagsText2 = document.createElement('p');
    tagsText2.textContent = details.tech.join(' / ');

    tags.append(tagsText1, tagsText2);

    const link = document.createElement('a');
    link.classList.add('btn', 'btn-white', 'btn-link', 'uppercase', 'letter-spacing-s');
    link.textContent = 'visit website';
    link.href = detailsProject.projectLink;
    link.target = '_blank';
    aboutProject.append(h1, projectDesc, tags, link);

    //Project descripton
    const aside = document.createElement('aside');
    aside.classList.add('project-description');

    // project background
    const projectBackground = document.createElement('div');
    projectBackground.classList.add('project-background', 'flow');
    const h3 = document.createElement('h3');
    h3.classList.add('heading-project');
    h3.textContent = 'Project Background';
    const textBackground = document.createElement('p');
    textBackground.textContent = details.description;
    projectBackground.append(h3, textBackground);
   
    //static view
    const staticView = document.createElement('div');
    staticView.classList.add('static-view', 'flow');

    const h3Static = document.createElement('h3');
    h3Static.classList.add('heading-project');
    h3Static.textContent = 'Static views';
    //Preview picture 1
    const pictureStaticPreview1 = document.createElement('picture');
    //Desktop
    const sourceDesktopPre1 = document.createElement('source');
    sourceDesktopPre1.classList.add('static-image');
    sourceDesktopPre1.srcset = details.previewPicture1.desktop;
    sourceDesktopPre1.media = '(min-width: 900px)';
    //Tablet
    const sourceTabletPre1 = document.createElement('source');
    sourceTabletPre1.classList.add('static-image');
    sourceTabletPre1.srcset = details.previewPicture1.tablet;
    sourceTabletPre1.media = '(min-width: 600px)';
    //Mobile
    const prievewMobile1 = document.createElement('img');
    prievewMobile1.classList.add('static-image');
    prievewMobile1.src = details.previewPicture1.mobile;
    pictureStaticPreview1.append(sourceDesktopPre1, sourceTabletPre1, prievewMobile1);

    //Preview picture 2
    const pictureStaticPreview2 = document.createElement('picture');
    //Desktop
    const sourceDesktopPre2 = document.createElement('source');
    sourceDesktopPre2.classList.add('static-image');
    sourceDesktopPre2.srcset = details.previewPicture2.desktop;
    sourceDesktopPre2.media = '(min-width: 900px)';
    //Tablet
    //Tablet
    const sourceTabletPre2 = document.createElement('source');
    sourceTabletPre2.classList.add('static-image');
    sourceTabletPre2.srcset = details.previewPicture2.tablet;
    sourceTabletPre2.media = '(min-width: 600px)';
    //Mobile
    const prievewMobile2 = document.createElement('img');
    prievewMobile2.classList.add('static-image');
    prievewMobile2.src = details.previewPicture2.mobile;
    pictureStaticPreview2.append(sourceDesktopPre2, sourceTabletPre2, prievewMobile2);

    // staticView.append(h3Static, pictureStaticPreview1, pictureStaticPreview2);
    //******//
    staticView.innerHTML = `<div class="static-view flow">
    <h3 class="heading-project">Static views</h3>
    <picture>
        <source srcset="${details.previewPicture1.desktop}" class="static-image" media="(min-width: 900px)">
        <source srcset="${details.previewPicture1.tablet}" class="static-image" media="(min-width: 600px)">
        <img src="${details.previewPicture1.mobile}" alt="" class="static-image">
    </picture>
    <picture>
        <source srcset="${details.previewPicture2.desktop}" class="static-image" media="(min-width: 900px)">
        <source srcset="${details.previewPicture2.tablet}" class="static-image" media="(min-width: 600px)">
        <img src="${details.previewPicture2.mobile}" alt="" class="static-image">
    </picture>
</div>`;
    // ****//
    // staticView.appendChild(staticView);
    aside.append(projectBackground, staticView);

    projectDetails.append(aboutProject, aside);

    projectView.appendChild(mainPicture);
    projectView.appendChild(projectDetails);
    
}



function nextAndPrev(projectData, projectId) {
    //NextTo
    const nextProject = document.querySelector('.next .heading-project');
    const prevProject =document.querySelector('.prev .heading-project');
    let nextId;
    let prevId;
    for(let i=0; i < projectData.length; i++) {
        let currentId = projectId;
        let count = 0
        console.log('projectdataid:', projectData[i].id);
        if(projectData[i].id === currentId) {
            let count = i;
            let next = (i + 1) < projectData.length ? (i + 1): 0;
            let prev = (i - 1) >= 0 ? (i - 1) : (projectData.length - 1);
            console.log('prevVal:', prev)
            // next project
            nextId = projectData[next].id;
            nextProject.innerHTML = projectData[next].projectName;
            // prev project
            prevId = projectData[prev].id;
            prevProject.innerHTML = projectData[prev].projectName;
            
            console.log('current:', currentId);
            console.log('next:',nextId);
            console.log('prev:', prevId);
            
        }
        
    }
    
    nextBtn.addEventListener('click', () => {
        projectData.forEach(data => {
            console.log('nextId', nextId)
            if(data.id === nextId) {
                const projectId = nextId;
                localStorage.setItem("detailsValue", JSON.stringify({projectId}));
                location.href = "portfolio-view.html";
            }
        })
        
    });
    prevBtn.addEventListener('click', () => {
        projectData.forEach(data => {
            console.log('pervId:', prevId)
            if(data.id === prevId) {
                const projectId = prevId;
                localStorage.setItem("detailsValue", JSON.stringify({projectId}));
                location.href = "portfolio-view.html";
                
            }
        })
        
    })
    // 
}