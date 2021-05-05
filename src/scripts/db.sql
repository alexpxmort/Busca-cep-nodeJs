###SCRIPT PARA CRIAR DATABASE E TABELA DE enderecos

CREATE DATABASE teste_cep;
use teste_cep;

CREATE TABLE `enderecos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cep` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `logradouro` varchar(255) COLLATE utf8_unicode_ci  NOT NULL,
    `complemento` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
    `bairro` varchar(255) COLLATE utf8_unicode_ci  NOT NULL,
     `localidade` varchar(255) COLLATE utf8_unicode_ci  NOT NULL,
     `uf` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
     `ibge` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
     `gia` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
      `ddd` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
       `siafi` varchar(255) COLLATE utf8_unicode_ci  DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;