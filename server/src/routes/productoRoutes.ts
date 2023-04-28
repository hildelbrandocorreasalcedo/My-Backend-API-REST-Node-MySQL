import { Router } from "express";

import productoController from '../controllers/productoController';

class ProdutosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', productoController.list);
        this.router.get('/:id', productoController.getOne);
        this.router.post('/', productoController.create);
        this.router.put('/:id', productoController.update);
        this.router.delete('/:id', productoController.delete);
    }
}

const productoRoutes = new ProdutosRoutes();
export default productoRoutes.router;