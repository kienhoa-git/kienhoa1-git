var listCoursesBlock = document.querySelector('.courses-list')
var courseApi = 'http://localhost:3000/courses'
function start() {
       getCourses(renderCourses)
       handleCreateForm()
}
start();
// Functions
function getCourses(callback) {
  fetch(courseApi)
      .then(response => {return response.json()})
      .then(callback)
}
function createCourses(data, callback) {
  var options = {
           method: 'POST',
           body: JSON.stringify(data),
           headers: {
            'Content-Type' : 'application/json'
           }
  }
  fetch(courseApi,options)
       .then(response =>{return response.json()})
       .then(callback)
}
function handleDeleteCourses(id) {
  var options = {
    method: 'DELETE',
    headers: {
     'Content-Type' : 'application/json'
    }
}
fetch(courseApi +'/'+ id,options)
.then(response =>{return response.json()})
.then(()=>{
  var courseItem = document.querySelector('.courses-item-'+ id)
  if(courseItem) {
    courseItem.remove()
  }
})
}
function renderCourses(courses) {
    var htmls = courses.map(course =>{
      return `<li class="courses-item-${course.id}">
             <h4>${course.name}</h4>
             <p>${course.description}</p>
             <button onclick="handleDeleteCourses(${course.id})">Xóa</button>
      </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('')
}
function handleCreateForm() {
      var createBtn = document.querySelector('#Create')
      createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var Description = document.querySelector('input[name="description"]').value
        var formData = {
          name: name,
          description: Description
        }
        createCourses(formData,()=>{
          getCourses(renderCourses)
        })
      }
}