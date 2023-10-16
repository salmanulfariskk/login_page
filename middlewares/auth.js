const isAuthed = (req,res,next)=>{
    if(req.session.user){
        next()
    }else{ 
        res.redirect('/login')
    }
}

const isNotAuthed = (req,res,next)=>{
    if(!req.session.user){
        next()
    }else{
        res.redirect('/')
    }
}


module.exports = {isAuthed,isNotAuthed}