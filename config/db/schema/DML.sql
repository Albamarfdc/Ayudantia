-- Consultas de selección
SELECT * FROM viajes;
SELECT * FROM viajes WHERE id = $1;

-- Eliminación de registros
DELETE FROM viajes WHERE id = $1;

-- Actualización de registros
UPDATE viajes SET destino = $1 WHERE id = $2 RETURNING *;
UPDATE viajes SET destino = $1, presupuesto = $2 WHERE id = $3 RETURNING *;

-- Inserción de registros
INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2) RETURNING *;