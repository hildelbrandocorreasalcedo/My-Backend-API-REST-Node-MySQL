"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InventarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventarios = yield database_1.default.query('SELECT clientes.id, clientes.nombre, clientes.nit, clientes.telefono, clientes.ciudad, clientes.direccion, inventarios.id, inventarios.Referencia, inventarios.fecha, productos.codigo, productos.descripcion_Producto, productos.imagen_producto, productos.valor_unitario, inventarios.unidades, inventarios.valor_bruto, inventarios.porcentaje_descuento, inventarios.valor_descuento, inventarios.IVA, inventarios.valor_IVA, inventarios.valor_unitario_final, inventarios.valor_Neto, inventarios.imagen_factura FROM inventarios JOIN clientes ON inventarios.codigo_cliente = clientes.id JOIN productos ON inventarios.codigo_producto = productos.codigo;');
            inventarios.splice(1, 1);
            res.json(inventarios);
            //res.json({text: 'listando Inventarios Delichicks'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const inventarios = yield database_1.default.query('SELECT * FROM inventarios WHERE id = ?', [id]);
            if (inventarios.length > 0) {
                return res.json(inventarios[0]);
            }
            res.status(404).json({ text: 'inventario no existe' });
            //res.json({text: 'Este inventario es el: ' + req.params.id})
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO inventarios set ?', [req.body]);
            res.json({ message: 'Inventario guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE inventarios set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El Inventario ha sido actualizado' });
            //res.json({text: 'Actualizacion de inventario ' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM inventarios WHERE id = ?', [id]);
            res.json({ message: 'El inventario ha sido eliminado' });
            //res.json({text: 'Eliminacion de inventario '+ req.params.id});
        });
    }
}
const inventarioController = new InventarioController();
exports.default = inventarioController;
