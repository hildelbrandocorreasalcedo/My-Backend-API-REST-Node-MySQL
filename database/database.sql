CREATE DATABASE inventario_db;

USE inventario_db;
CREATE TABLE inventarios(
   id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Referencia VARCHAR(12),
   fecha VARCHAR(15),
   codigo_cliente INT(12),
   codigo_Producto INT(12),
   unidades INT(10),
   valor_bruto FLOAT(10),
   porcentaje_descuento FLOAT(5),
   valor_descuento FLOAT(10),
   IVA FLOAT(5),
   valor_IVA FLOAT(10),
   valor_unitario_final FLOAT(10),
   valor_Neto FLOAT(10),
   imagen_factura LONGTEXT,
   FOREIGN KEY (codigo_cliente) REFERENCES clientes(id),
   FOREIGN KEY (codigo_Producto) REFERENCES productos(id)
);
DESCRIBE inventarios;

USE inventario_db;
CREATE TABLE clientes (
   id INT(12) PRIMARY KEY,
   nombre VARCHAR(50),
   nit VARCHAR(12),
   telefono VARCHAR(20),
   ciudad VARCHAR(30),
   direccion VARCHAR(50),
   INDEX idx_id (id)
);
DESCRIBE clientes;

USE inventario_db;
CREATE TABLE productos (
   id INT(12) PRIMARY KEY,
   descripcion_Producto VARCHAR(50),
   imagen_producto LONGTEXT,
   valor_unitario FLOAT(10),
   INDEX idx_id (id)
);
DESCRIBE productos;

SELECT * FROM `inventarios`;
SELECT * FROM `clientes`;
SELECT * FROM `productos`;

SELECT clientes.*, productos.* inventarios.*  FROM inventarios INNER JOIN clientes ON inventarios.codigo_cliente = clientes.id JOIN productos ON inventarios.codigo_Producto = productos.codigo;

SELECT clientes.id, clientes.nombre, clientes.nit, clientes.telefono, clientes.ciudad, clientes.direccion,
inventarios.id, inventarios.Referencia, inventarios.fecha,
productos.codigo, productos.descripcion_Producto, productos.imagen_producto, productos.valor_unitario, 
inventarios.unidades, inventarios.valor_bruto, inventarios.porcentaje_descuento, inventarios.valor_descuento,
inventarios.IVA, inventarios.valor_IVA, inventarios.valor_unitario_final, 
inventarios.valor_Neto, inventarios.imagen_factura
FROM inventarios
JOIN clientes ON inventarios.codigo_cliente = clientes.id
JOIN productos ON inventarios.codigo_producto  = productos.codigo;

USE inventario_db;
DROP TABLE `inventarios`;
DROP TABLE `clientes`;
DROP TABLE `productos`;

