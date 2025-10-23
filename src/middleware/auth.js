import { clerkMiddleware } from "@clerk/express";

const requireAuth = async (req, res, next) => {
    
    const authorization = await req.auth()  

    if(!authorization || !authorization.userId){
       return res.status(401).json({Message: "Usuario nao esta cadastrado no sistema. Cadastre-se por favor."})
    }
    req.user = authorization.userId
    next()

}

export { clerkMiddleware, requireAuth};