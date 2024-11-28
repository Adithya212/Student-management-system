const {MongoClient,ObjectId} =require('mongodb')
const express=require('express')

const app= express()
app.use(express.json())
// app.use(express.static('public'))
//mongodb connection setup using mongoclient
const url = 'mongodb://localhost:27017'; 
const dbName= 'studentDB'
let db
MongoClient.connect(url)
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(dbName);
    })
    .catch(error => console.error(error));

//add new student
const addNewStudent= async(req,res)=>{
    try{
        const student= req.body
        console.log(student)
        const result= await db.collection('students').insertOne(student);
        res.status(201).json({
            status: 'success',
            data: student
        })

    }
    catch(err){
        console.error('Error in createTour',err)
        res.status(500).json({status:'error',message:'Database error'})
    }
}
//get all students
const getAllStudents= async(req.res)=> {
    try{
        
    }
}


app.listen(4000, () => {
    console.log('App listening on port 4000')
  })

app.route('/api/v1/student').get(getAllStudents).post(addNewStudent);