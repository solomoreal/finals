CREATE TABLE admin(
		id int(11) NOT NULL auto_increment,
		username varchar(255) NOT NULL,
		password varchar(255) NOT NULL,
		PRIMARY KEY (id),
		UNIQUE KEY id (id)
	);