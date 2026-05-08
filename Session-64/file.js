
const fs=require('fs')


// fs.mkdir("batch-27",(err)=>
// {
// if(err)
// {
// console.log(err);
// }
// console.log("New folder  created");
// })

// //how to write a message to the notepad file

// fs.writeFile("batch-27/rose.txt","I like node-js",(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("File created");
// })

fs.appendFile("batch-27/rose.txt"," I like react-js",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("File created");
})



// how to delete file

fs.unlink("batch-27/rose.txt",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log('file deleted');
})

fs.rename("batch-27/jack.txt","batch-27/kala.txt",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log('file deleted');
})

