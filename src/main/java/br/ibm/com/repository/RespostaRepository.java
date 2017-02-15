package br.ibm.com.repository;

import br.ibm.com.domain.Resposta;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Resposta entity.
 */
@SuppressWarnings("unused")
public interface RespostaRepository extends JpaRepository<Resposta,Long> {

}
