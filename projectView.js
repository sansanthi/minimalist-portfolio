const projectView = document.querySelector('.project-view');

function getDetailsPage() {
    const details = JSON.parse(localStorage.getItem("detailsValue"));
    
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
    h1.textContent = details.projectName;

    const text = document.createElement('p');
    text.textContent = details.projectDescription;

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
    aboutProject.append(h1, text, tags, link);

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

    staticView.append(h3Static, pictureStaticPreview1, pictureStaticPreview2);
    aside.append(projectBackground, staticView);

    projectDetails.append(aboutProject, aside);

    projectView.appendChild(mainPicture);
    projectView.appendChild(projectDetails);
    

    

}

getDetailsPage();