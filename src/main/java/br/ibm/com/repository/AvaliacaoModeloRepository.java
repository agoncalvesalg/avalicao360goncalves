package br.ibm.com.repository;

import br.ibm.com.domain.AvaliacaoModelo;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the AvaliacaoModelo entity.
 */
@SuppressWarnings("unused")
public interface AvaliacaoModeloRepository extends JpaRepository<AvaliacaoModelo,Long> {

}
