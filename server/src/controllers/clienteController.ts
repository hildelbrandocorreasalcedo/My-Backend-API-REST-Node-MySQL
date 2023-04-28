import { Request, Response } from "express";

import pool from '../database';

class ClienteController{
    public async list (req: Request, res: Response){
        const cliente = await pool.query('SELECT * FROM clientes');
        res.json(cliente);
        //res.json({text: 'listando clientes Delichicks'});
    } 
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const cliente = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if(cliente.length > 0){
            return res.json(cliente[0]);
        }
        res.status(404).json({text: 'cliente no existe'});
        //res.json({text: 'Este cliente es el: ' + req.params.id})
    } 
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO clientes set ?', [req.body]);
        res.json({message: 'cliente guardado'});
    }   
    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE clientes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El cliente ha sido actualizado'});
        //res.json({text: 'Actualizacion del cliente ' + req.params.id});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
        res.json({message: 'El cliente ha sido eliminado'});
        //res.json({text: 'Eliminacion del cliente '+ req.params.id});
    }
}

const clienteController = new ClienteController();
export default clienteController;