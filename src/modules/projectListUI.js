/*
 <!-- ? SINGULAR ITEM-->
    <div class="project-list-item">
        <div class="project-icon">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#1A8BB7"/>
            </svg>   
        </div>
        <button class="project-button" id="project-button-one">Project Two</button>       
        <div class="project-counter">15</div>
    </div>


*/

export const projectListElement = (project) =>{
    // Create the main container
    const projectListItem = document.createElement('div');
    projectListItem.classList.add('project-list-item');
  
    // Create the project icon container
    const projectIcon = document.createElement('div');
    projectIcon.classList.add('project-icon');
  
    // Create the SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '7');
    svg.setAttribute('height', '7');
    svg.setAttribute('viewBox', '0 0 7 7');
    svg.setAttribute('fill', 'none');
  
    // Create the circle element
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '3.5');
    circle.setAttribute('cy', '3.5');
    circle.setAttribute('r', '3.5');
    // fill color determined by the label of the project ~ needs to be added to the project 
    circle.setAttribute('fill', '#1A8BB7');
  
    // Create the project button
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    projectButton.setAttribute('id', `project-button-`);
    projectButton.textContent = project.getProjectName();
  
    // Create the project counter
    const projectCounter = document.createElement('div');
    projectCounter.classList.add('project-counter');
    projectCounter.textContent = project.getAmountOfProjects();
  
    // Assemble the elements
    svg.appendChild(circle);
    projectIcon.appendChild(svg);
    projectListItem.appendChild(projectIcon);
    projectListItem.appendChild(projectButton);
    projectListItem.appendChild(projectCounter);
  
    return projectListItem;
}