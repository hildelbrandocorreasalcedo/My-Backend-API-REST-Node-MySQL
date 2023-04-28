import { Router } from "express";

import inventarioController from '../controllers/inventarioController';

class InventarioRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', inventarioController.list);
        this.router.get('/:id', inventarioController.getOne);
        this.router.post('/', inventarioController.create);
        this.router.put('/:id', inventarioController.update);
        this.router.delete('/:id', inventarioController.delete);
    }
}

const inventarioRoutes = new InventarioRoutes();
export default inventarioRoutes.router;