import { Request, Response } from "express";

import pool from '../database';

class InventarioController{
    public async list (req: Request, res: Response){
        const inventarios = await pool.query('SELECT clientes.id, clientes.nombre, clientes.nit, clientes.telefono, clientes.ciudad, clientes.direccion, inventarios.id, inventarios.Referencia, inventarios.fecha, productos.codigo, productos.descripcion_Producto, productos.imagen_producto, productos.valor_unitario, inventarios.unidades, inventarios.valor_bruto, inventarios.porcentaje_descuento, inventarios.valor_descuento, inventarios.IVA, inventarios.valor_IVA, inventarios.valor_unitario_final, inventarios.valor_Neto, inventarios.imagen_factura FROM inventarios JOIN clientes ON inventarios.codigo_cliente = clientes.id JOIN productos ON inventarios.codigo_producto = productos.codigo;');
        res.json(inventarios);
        //res.json({text: 'listando Inventarios Delichicks'});
    } 
    public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;
        const inventarios = await pool.query('SELECT * FROM inventarios WHERE id = ?', [id]);
        if(inventarios.length > 0){
            return res.json(inventarios[0]);
        }
        res.status(404).json({text: 'inventario no existe'});
        //res.json({text: 'Este inventario es el: ' + req.params.id})
    } 
    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO inventarios set ?', [req.body]);
        res.json({message: 'Inventario guardado'});
    }   
    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE inventarios set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'El Inventario ha sido actualizado'})
        //res.json({text: 'Actualizacion de inventario ' + req.params.id});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM inventarios WHERE id = ?', [id]);
        res.json({message: 'El inventario ha sido eliminado'})
        //res.json({text: 'Eliminacion de inventario '+ req.params.id});
    }
}

const inventarioController = new InventarioController();
export default inventarioController