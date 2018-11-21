package com.scrummy.rest.models;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "QUESTIONS")
@Data
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue
    private Long id;

    private String text;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    @Column(name = "ANSWER")
    private Long correctAnswerId;
}
