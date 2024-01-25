// const data=document.getElementById('but')
// data.addEventListener('click',touch)
//  async function touch(){
    //    const resp= await fetch('/get-data')
    //    const dt= await resp.json()
    //    console.log(dt)
    // }
    const data=document.getElementById('but')
    const username=document.getElementById('username')
    const password=document.getElementById('password')
    data.addEventListener('click',touch)
    async function touch(){
        const resp=await fetch('/make-new-record',{
        method:'POST',
        body:JSON.stringify({
            'username':username.value,
            'password':password.value
        }),
        headers:{
            Accept : 'application/json',
            'content-type':'application/json'
        }
    })
       const dt= await resp.json()
       console.log(dt)
}