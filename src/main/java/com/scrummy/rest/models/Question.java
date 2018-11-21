package com.scrummy.rest.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "QUESTIONS")
public class Question {

    @Id
    @GeneratedValue
    private Long id;

    private String text;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

}
