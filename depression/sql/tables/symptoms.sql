CREATE TABLE symptoms(
		id int(11) NOT NULL auto_increment,
		symptom varchar(255) NOT NULL,
		PRIMARY KEY (id),
		UNIQUE KEY id (id)
	);