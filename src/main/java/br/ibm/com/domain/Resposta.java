package br.ibm.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Resposta.
 */
@Entity
@Table(name = "resposta")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Resposta implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Min(value = 0)
    @Max(value = 5)
    @Column(name = "nota", nullable = false)
    private Integer nota;

    @OneToOne
    @NotNull
    @JoinColumn(unique = true)
    private Pergunta pergunta;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNota() {
        return nota;
    }

    public Resposta nota(Integer nota) {
        this.nota = nota;
        return this;
    }

    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public Pergunta getPergunta() {
        return pergunta;
    }

    public Resposta pergunta(Pergunta pergunta) {
        this.pergunta = pergunta;
        return this;
    }

    public void setPergunta(Pergunta pergunta) {
        this.pergunta = pergunta;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Resposta resposta = (Resposta) o;
        if (resposta.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, resposta.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Resposta{" +
            "id=" + id +
            ", nota='" + nota + "'" +
            '}';
    }
}
