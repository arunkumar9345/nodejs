// const express=require('express')
// const app=express()
// app.use(express.static(__dirname))
// // console.log('hello welcome')
// app.get('/get-data',function(request,response){
//     // console.log(request)
//     const repdata={
//         'name : ':'class',
//         'sub':'node'
//     }
//     response.status(200).json(repdata)
// })

// app.listen(8004)




const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.post('/make-new-record',function(request,response){
    console.log(request.body)
    // const repdata={'name':'hii'}
    console.log(request.body)
    if(request.body.username === 'one' && request.body.password === '1234') {
        response.status(200).json({
            "validation" : "user validated"
        })
    } else {
        response.status(200).json({
            "validation" : "invalid user"
        })
    // response.status(200).json(repdata)
    }
})
app.listen(8004)