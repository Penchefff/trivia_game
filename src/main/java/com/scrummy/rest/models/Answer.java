package com.scrummy.rest.models;

import javax.persistence.*;

@Entity
@Table(name = "ANSWERS")
public class Answer {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "TEXT")
    private String text;

    @ManyToOne
    @JoinColumn(name="QUESTION_ID")
    private Question question;
}
