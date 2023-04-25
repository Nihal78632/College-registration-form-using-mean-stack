const db= require('./db')
const register=( firstname,
    lastname,
    address,
    email,
    phone,
    gender,
    course)=>{

    
    console.log('inside logic');

    
   return db.User.findOne({
   email
    

    }).then((response)=>{
        console.log(response);
        if(response){
            
            return{
                statusCode:401,
                message:"Already registered.."
            }
        }
        else{
            
            const newuser=new db.User({
                firstname,
                lastname,
                address,
                email,
                phone,
                gender,
                course
            })

            
            newuser.save()
           
            return{
                statusCode:200,
                message:"Successfully registered",
                

            }
        }
    })

}

const show=()=>{
    console.log('inside show')
    // checking if username and password is in db

    return db.User.find().then((result)=>{if(result){
        return{
            statusCode:200,
            message:"Showing details",
            data:result
        }
    }
        if(result){
            //present in db
            return {
                statusCode:200,
                message:'data is successful',
                data:result
            }
        }
        else{
            return {
                statusCode:404,
                message:'Invalid'
            }
        }
    })

}

module.exports={
    register,
    show

}