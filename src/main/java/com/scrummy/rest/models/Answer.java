package com.scrummy.rest.models;

import javax.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ANSWERS")
@Data
@NoArgsConstructor
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
