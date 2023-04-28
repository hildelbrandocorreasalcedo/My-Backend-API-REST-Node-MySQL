import { Request, Response } from "express";

import pool from '../database';

class ProductoController{
    public async list (req: Request, res: Response){
        const producto = await pool.query('SELECT * FROM productos');
        res.json(producto);
        //res.json({text: 'listando productos Delichicks'});
    } 
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM productos WHERE codigo = ?', [id]);
        if(producto.length > 0){
            return res.json(producto[0]);
        }
        res.status(404).json({text: 'producto no existe'});
        //res.json({text: 'Este producto es el: ' + req.params.id})
    } 
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({message: 'producto guardado'});
    }   
    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE productos set ? WHERE codigo = ?', [req.body, id]);
        res.json({message: 'El producto ha sido actualizado'});
        //res.json({text: 'Actualizacion del producto ' + req.params.id});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM productos WHERE codigo = ?', [id]);
        res.json({message: 'El producto ha sido eliminado'});
        //res.json({text: 'Eliminacion del producto '+ req.params.id});
    }
}

const productoController = new ProductoController();
export default productoController;