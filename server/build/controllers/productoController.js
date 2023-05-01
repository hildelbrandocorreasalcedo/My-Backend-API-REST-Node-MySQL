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
class ProductoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM productos');
            producto.splice(1, 1);
            res.json(producto);
            //res.json({text: 'listando productos Delichicks'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM productos WHERE codigo = ?', [id]);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ text: 'producto no existe' });
            //res.json({text: 'Este producto es el: ' + req.params.id})
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({ message: 'producto guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE productos set ? WHERE codigo = ?', [req.body, id]);
            res.json({ message: 'El producto ha sido actualizado' });
            //res.json({text: 'Actualizacion del producto ' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE codigo = ?', [id]);
            res.json({ message: 'El producto ha sido eliminado' });
            //res.json({text: 'Eliminacion del producto '+ req.params.id});
        });
    }
}
const productoController = new ProductoController();
exports.default = productoController;
