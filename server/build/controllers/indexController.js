"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API iS /api/inventario' });
    }
}
exports.indexController = new IndexController();
