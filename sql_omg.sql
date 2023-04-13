CREATE DATABASE blog;
USE blog;
CREATE TABLE post(
	`id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255),
    `subtitle` VARCHAR(255),
    `author` VARCHAR(255),
    `author_url` VARCHAR(255),
    `publish_date` VARCHAR(255),
    `image_url` VARCHAR(255),
    `featured` TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci;
SHOW TABLES;
INSERT INTO post (title, subtitle, author, publish_date, featured) VALUES ('post about travelling', 'my best post', 'Mat Vogels', '9/25/2015', 0);
SHOW TABLES;
INSERT INTO post (title, subtitle, author, publish_date, featured) VALUES ('Post number 2 about traveling', 'My best number 2 post', 'Mat Vogels', '9/25/2015', 0);
SHOW TABLES;
ALTER TABLE post RENAME COLUMN `image_url` TO `image_name`;
ALTER TABLE post RENAME COLUMN `image_name` TO `image_url`;
SHOW TABLES;
INSERT INTO post (title, subtitle, author, publish_date) VALUES ('post the third', 'please help i want to eat', 'Rita Richeskaya', '04/11/2023');
SHOW TABLES;
SELECT * FROM post;
INSERT INTO post (title, subtitle, author, publish_date, featured) VALUES ('Post number 4 about traveling', 'My best number 4 post', 'Alo Malo', '9/27/2015', 1);