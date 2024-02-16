CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					tipo_de_escamas VARCHAR(50));
				
INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)	
    VALUES
('Leonardo', 2, 'Macho', 'Cosmoides');

ALTER TABLE reptil
ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50);

SELECT * FROM mamifero;