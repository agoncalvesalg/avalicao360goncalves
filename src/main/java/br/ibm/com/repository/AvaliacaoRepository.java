package br.ibm.com.repository;

import br.ibm.com.domain.Avaliacao;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Avaliacao entity.
 */
@SuppressWarnings("unused")
public interface AvaliacaoRepository extends JpaRepository<Avaliacao,Long> {

    @Query("select avaliacao from Avaliacao avaliacao where avaliacao.user.login = ?#{principal.username}")
    List<Avaliacao> findByUserIsCurrentUser();

}
