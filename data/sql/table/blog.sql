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
    `content` VARCHAR(255),
    `featured` TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci;
SHOW TABLES;
