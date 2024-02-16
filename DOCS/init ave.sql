CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					envergadura FLOAT);
					
INSERT INTO ave (nome, idade, genero, envergadura)	
    VALUES
('Mordecai', 2, 'Macho', 200);