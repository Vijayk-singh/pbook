import React from 'react'

const ContactList = () => {
  var data =new Array((localStorage.getItem('contact')))
  
  function d(arr) {
    var a=[]
    var str=''
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]==',')
      {
        a.push(str)
        str=''
      }else
      {
        str+=arr[i]
      }
    }
    a.push(str)
    return a
  }
  var ans=d(data)
 console.log(ans.pop())
  return (
    <div className='list'>
   
  <h3>Contact List</h3>
  <div>
    {data}
  </div>
    </div>
  )
}

export default ContactList