package com.scrummy.rest.models;

import javax.persistence.*;
import java.util.List;
import lombok.Builder;
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

}
