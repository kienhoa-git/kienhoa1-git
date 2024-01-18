// Cho trước danh sách một số bộ phim, hãy viết hàm calculateRating 
//để tính điểm trung bình IMDB của những bộ phim mà Christopher Nolan làm đạo diễn.
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(watchList) {
        var data = watchList.filter2(function list(values) {
            return values.Director === 'Christopher Nolan'
        })
        var imdbRatings = data.reduce2(function (a,b) {
          return a + parseFloat(b.imdbRating)
        },0)
    return imdbRatings /data.length 
  }
 function test(watchList) {
       var list = watchList.map2((items)=>{return `đây là mảng mới ${items}`}).join('') 
       return list
 }
 // code tự tạo các hàm cơ bản có sẵn trong vscode
  Array.prototype.map2 = function (callback) {
    if (typeof callback === 'function'){
      var array = []
        for(var key in this) {
            if(this.hasOwnProperty(key)) {
              var data = callback(this[key],key,this)
              array.push(data)
            }
        }
      return array  
    }else{
      console.log(`${this} is not function`)
    }
  }

  Array.prototype.filter2 = function (callback) {
   if (typeof callback === 'function') {
     var arr = []
         for (var key in this) {
           if (this.hasOwnProperty(key)) { 
               var list = callback(this[key],key,this)
               if (list) {
                 arr.push(this[key])
               }
           }
         }
     return arr    
   }else {
    console.log(`${callback} isn't function`)
   }
  }
  Array.prototype.some = function (callback) {
    if (typeof callback === 'function') {
      for (var key in this) {
        if(this.hasOwnProperty(key)) {
          if (callback(this[key],key,this)) {
            return true
          }
        }
      }
      return false
    }else{
      console.log(`${callback} isn't function`)
    }
  }
  Array.prototype.every2 = function (callback) {
    if(typeof callback === 'function') {
       for (var key in this) {22
        if(this.hasOwnProperty(key)) {
          if(!callback(this[key],key,this)) {
            return false
          }
        }
       }
       return true
    }else{
      console.log(`${callback} is not function`)
    }
  }
  Array.prototype.reduce2 = function(callback,currentValue) {
    var i = 0
    if(arguments.length < 2) {
        i = 1
        currentValue = this[0]
    }
    for (;i < this.length; i++) {
      currentValue = callback(currentValue,this[i],i,this) 
    }
    return currentValue
}
  // Expected results
  
  console.log(calculateRating(watchList)); // Output: 8.675
  console.log(test(watchList))
  // Promise
  const names = ["java","javascip","php","ruby"]
function callHell(value) {
    return new Promise(function(result)
    {
          result(value)
    })
}
callHell(1)
     .then(function(value) {
        return value + 1
     })
     .then(function(value) {
        return value + 1
     })
     .then(function(value) {
        return value + 1
     })
     .then(function(value) {
        return value + 1
     })
     .then(function(value) {
        return value + 1
     })
     .then(function(value){
        console.log(value)
     })
     .finally(function() {
        console.log('test')
     })
     // kiến thức về fecth
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => {return response.json()})
     .then(datas => {
      var htmls = datas.map(data => {
        return `<li>
              <h2>${data.title}</2>
              <p>${data.body}</p>
        </li>`
      })
      var html = htmls.join('')
      document.querySelector('.block').innerHTML = html
     });  
// kiến thức code nâng cao của fecth và hoạt động json trong cơ sở dữ liệu
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
// hoạt động createCourses : data dữ liệu gửi đi đc chuyển từ js sang json sau đó mình nhận call back của js
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
function update(id) {
  var options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
     'Content-Type' : 'application/json'
    }
}
fetch(courseApi +'/'+ id,options)
.then(response =>{return response.json()})
.then(()=>{
  getCourses(renderCourses)
})
  
}
function renderCourses(courses) {
    var htmls = courses.map(course =>{
      return `<li class="courses-item-${course.id}">
             <h4>${course.name}</h4>
             <p>${course.description}</p>
             <button onclick="handleDeleteCourses(${course.id})">Xóa</button>
             <button onclick="update(${course.id})">Sửa</button>
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