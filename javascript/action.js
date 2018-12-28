
var titleInput  = document.querySelector('.title-input')
var authorInput = document.querySelector('.author-input')
var bookNoInput = document.querySelector('.bookno-input')

var actionBtn   = document.querySelector('.submitBtn')

var mylist      = document.querySelector('.mylist')


actionBtn.addEventListener('click', ()=>{
    var obj = {}
    obj.title  = titleInput.value
    obj.author = authorInput.value
    obj.bNo    =   bookNoInput.value
       
      if(localStorage.getItem('bookdata'))
      {
          var mydata=  JSON.parse(localStorage.getItem('bookdata')) 
          mydata.push(obj)
          localStorage.setItem('bookdata', JSON.stringify(mydata))
      }
      else
      {
          var data  = []
          data.push(obj)
          localStorage.setItem('bookdata', JSON.stringify(data))
      }

      mylist.innerHTML= null
      var finalData = JSON.parse(localStorage.getItem('bookdata'))

      for(var i=0 ; i<finalData.length ; i++)
      {
          var li = document.createElement('li')
          li.innerHTML = 
          ` 
           <li class=book-item><span class=book-title>${finalData[i].title}</span><span class=book-author>${finalData[i].author}</span><span class=book-no>${finalData[i].bNo} <button class=delBtn onclick=delAction(this) value="${finalData[i].title}"><i class="fas fa-trash-alt"></i></button></span></li>
          `
          mylist.append(li)
      }
})


   var finalData = JSON.parse(localStorage.getItem('bookdata'))

      for(var i=0 ; i<finalData.length ; i++)
      {
          var li = document.createElement('li')
          li.innerHTML = 
          ` 
           <li class=book-item><span class=book-title>${finalData[i].title}</span><span class=book-author>${finalData[i].author}</span><span class=book-no>${finalData[i].bNo} <button class=delBtn onclick=delAction(this) value="${finalData[i].title}"><i class="fas fa-trash-alt"></i></button></span></li>
          `
          mylist.append(li)
      }


      function delAction(e)
      {
          var value = e.getAttribute('value')

          var getdata = JSON.parse( localStorage.getItem('bookdata'))

            var getindex = getdata.findIndex((oneData)=>{
                         return oneData.title === value
            })
            getdata.splice(getindex,1)

              localStorage.setItem('bookdata', JSON.stringify(getdata))

            var myfinalData = JSON.parse(localStorage.getItem('bookdata')) 
              
            mylist.innerHTML = null

             myfinalData.forEach(element => {
                var li = document.createElement('li')
                li.innerHTML = 
                ` 
                 <li class=book-item><span class=book-title>${element.title}</span><span class=book-author>${element.author}</span><span class=book-no>${element.bNo} <button class=delBtn onclick=delAction(this) value="${element.title}"><i class="fas fa-trash-alt"></i></button></span></li>
                `
                mylist.append(li)
                  
             });

      }