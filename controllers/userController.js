
const credentialEmail = process.env.EMAIL
const credentialPassword = process.env.PASSWORD


const home = (req,res)=>{
    res.render('home',{message:req.session.user})
}

const showLogin = (req,res)=>{
    res.render('login')
}

const session = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.render('login', { error: 'All fields required' });
    }
    if (email !== credentialEmail || password !== credentialPassword) {
        return res.render('login', { error: 'Email or password does not match' });
    }
    req.session.user = email;
    res.redirect('/');
}

const logout =(req,res)=>{
    req.session.destroy()
    res.redirect('/login')
}


module.exports = {home,showLogin,session,logout}