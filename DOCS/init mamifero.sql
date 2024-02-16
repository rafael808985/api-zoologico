CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
					nome VARCHAR(50) NOT NULL, 
					idade INT, 
					genero VARCHAR(12) NOT NULL, 
					raca VARCHAR(50));
					
INSERT INTO mamifero (nome, idade, genero, raca)	
    VALUES
('Rigby', 2, 'Macho', 'guaxinim');