-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22-Out-2026 às 18:43
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gastromatch`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `criador_conteudo`
--

CREATE TABLE `criador_conteudo` (
  `id_criador` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo_perfil` varchar(50) NOT NULL,
  `documento_curadoria` varchar(255) NOT NULL,
  `status_validacao` varchar(50) DEFAULT 'Pendente',
  `termo_sanitario_aceito` tinyint(1) NOT NULL,
  `raio_entrega_km` decimal(5,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `criador_conteudo`
--

INSERT INTO `criador_conteudo` (`id_criador`, `id_usuario`, `tipo_perfil`, `documento_curadoria`, `status_validacao`, `termo_sanitario_aceito`, `raio_entrega_km`) VALUES
(1, 2, 'Chef', 'DIPLOMA-GASTRO-123.pdf', 'Aprovado', 1, 15.00);

-- --------------------------------------------------------

--
-- Estrutura da tabela `receita`
--

CREATE TABLE `receita` (
  `id_receita` int(11) NOT NULL,
  `id_criador` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `descricao` text DEFAULT NULL,
  `instrucoes_passo_a_passo` text DEFAULT NULL,
  `link_videoaula` varchar(255) DEFAULT NULL,
  `categoria_restricao_alimentar` varchar(100) DEFAULT NULL,
  `tempo_preparo` int(11) DEFAULT NULL,
  `modelo_venda` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `receita`
--

INSERT INTO `receita` (`id_receita`, `id_criador`, `titulo`, `descricao`, `instrucoes_passo_a_passo`, `link_videoaula`, `categoria_restricao_alimentar`, `tempo_preparo`, `modelo_venda`) VALUES
(1, 1, 'Tagliatelle ao Ragu', 'Massa artesanal com molho ragu tradicional.', '1. Cozinhar a massa... 2. Preparar o molho...', 'https://video.com/tagliatelle', 'Sem Lactose', 45, 'Pay-Per-View');

-- --------------------------------------------------------

--
-- Estrutura da tabela `transacao_financeira`
--

CREATE TABLE `transacao_financeira` (
  `id_transacao` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_receita` int(11) NOT NULL,
  `valor_total` decimal(10,2) NOT NULL,
  `status_pagamento` varchar(50) NOT NULL,
  `tipo_compra` varchar(50) NOT NULL,
  `cupom_promocional` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `autenticado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `email`, `senha`, `autenticado`) VALUES
(1, 'João Silva', 'joao@email.com', 'senha123', 1),
(2, 'Chef Carlos', 'carlos@restaurante.com', 'chef123', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `criador_conteudo`
--
ALTER TABLE `criador_conteudo`
  ADD PRIMARY KEY (`id_criador`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `receita`
--
ALTER TABLE `receita`
  ADD PRIMARY KEY (`id_receita`),
  ADD KEY `id_criador` (`id_criador`);

--
-- Índices para tabela `transacao_financeira`
--
ALTER TABLE `transacao_financeira`
  ADD PRIMARY KEY (`id_transacao`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_receita` (`id_receita`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `criador_conteudo`
--
ALTER TABLE `criador_conteudo`
  MODIFY `id_criador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `receita`
--
ALTER TABLE `receita`
  MODIFY `id_receita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `transacao_financeira`
--
ALTER TABLE `transacao_financeira`
  MODIFY `id_transacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `criador_conteudo`
--
ALTER TABLE `criador_conteudo`
  ADD CONSTRAINT `criador_conteudo_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `receita`
--
ALTER TABLE `receita`
  ADD CONSTRAINT `receita_ibfk_1` FOREIGN KEY (`id_criador`) REFERENCES `criador_conteudo` (`id_criador`) ON DELETE CASCADE;

--
-- Limitadores para a tabela `transacao_financeira`
--
ALTER TABLE `transacao_financeira`
  ADD CONSTRAINT `transacao_financeira_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `transacao_financeira_ibfk_2` FOREIGN KEY (`id_receita`) REFERENCES `receita` (`id_receita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
