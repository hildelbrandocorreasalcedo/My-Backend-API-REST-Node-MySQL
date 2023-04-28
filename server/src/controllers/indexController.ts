import { Request, Response } from "express";

class IndexController{
    public index (req: Request, res: Response){
        res.json({text: 'API iS /api/inventario'});
    }
}

 export const indexController = new IndexController();
