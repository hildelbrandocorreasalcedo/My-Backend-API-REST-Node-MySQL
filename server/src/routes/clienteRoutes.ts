import { Router } from "express";

import clienteController from '../controllers/clienteController';

class ClientesRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', clienteController.list);
        this.router.get('/:id', clienteController.getOne);
        this.router.post('/', clienteController.create);
        this.router.put('/:id', clienteController.update);
        this.router.delete('/:id', clienteController.delete);
    }
}

const clienteRoutes = new ClientesRoutes();
export default clienteRoutes.router;