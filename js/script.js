/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.getElementsByClassName('student-item cf');
const number = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
  let startIndex = (page * number) - number;
  let endIndex = page * number;
  // hide all the student item
  const studentList = document.getElementsByClassName('student-item cf');

  for(let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
  }

  // show 10 students each time

  for(let i = startIndex; i < endIndex; i++) {
    if(studentList[i] == undefined){
      break;
    }
    studentList[i].style.display = '';
  }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {

  // use math to calculate the number of pages are needed
  const numberOfList = Math.ceil(list.length / 10);

  // create and append a div to the div has class "page"
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  document.querySelector('.page').appendChild(paginationDiv);

  const paginationUl = document.createElement('ul');
  paginationDiv.appendChild(paginationUl);

  // use for loop to add enough li tag and a tag 

  for(let i = 0; i < numberOfList; i++) {
    const paginationLi = document.createElement('li');
    const paginationA = document.createElement('a');
    paginationA.textContent = `${i+1}`;
    if(i == 0) {
      paginationA.className = "active";
    }
    paginationA.setAttribute("href", "#");

    // add event listenr to every a tag
      // use the content of a tag to set the target a tag
      // pass in the content of a tag to function showPage to show those students
    paginationA.addEventListener('click', (event) => {
      showPage(list, i+1);

      // in the pass in function, remove the class active from all the a tag
      const paginationAs = document.querySelectorAll('.pagination ul li a');
      for(let i = 0; i < paginationAs.length; i++) {
        paginationAs[i].className = "";
      }
      
      // set class active to that a tag
      event.target.className = "active";
    });

    paginationLi.appendChild(paginationA);
    paginationUl.appendChild(paginationLi);
  }

}

showPage(list, 1);
appendPageLinks(list);



// Remember to delete the comments that came with this file, and replace them with your own code comments.