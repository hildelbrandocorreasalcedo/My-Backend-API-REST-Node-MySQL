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
class ClienteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cliente = yield database_1.default.query('SELECT * FROM clientes');
            cliente.splice(1, 1);
            res.json(cliente);
            //res.json({text: 'listando clientes Delichicks'});
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cliente = yield database_1.default.query('SELECT * FROM clientes WHERE id = ?', [id]);
            if (cliente.length > 0) {
                return res.json(cliente[0]);
            }
            res.status(404).json({ text: 'cliente no existe' });
            //res.json({text: 'Este cliente es el: ' + req.params.id})
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO clientes set ?', [req.body]);
            res.json({ message: 'cliente guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE clientes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El cliente ha sido actualizado' });
            //res.json({text: 'Actualizacion del cliente ' + req.params.id});
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM clientes WHERE id = ?', [id]);
            res.json({ message: 'El cliente ha sido eliminado' });
            //res.json({text: 'Eliminacion del cliente '+ req.params.id});
        });
    }
}
const clienteController = new ClienteController();
exports.default = clienteController;
