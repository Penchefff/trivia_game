package com.scrummy.rest.controllers;

import com.google.common.collect.ImmutableList;
import com.scrummy.rest.json.JsonAnswer;
import com.scrummy.rest.json.JsonQuestion;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/questions")
public class TriviaController {

    @GetMapping
    public ResponseEntity<List<JsonQuestion>> getQuestions() {
        JsonAnswer answer1 = JsonAnswer.builder().id(1).answer("Answer 1").build();
        JsonAnswer answer2 = JsonAnswer.builder().id(2).answer("Answer 2").build();
        JsonAnswer answer3 = JsonAnswer.builder().id(3).answer("Answer 3").build();
        JsonQuestion question1 = JsonQuestion.builder()
            .id(1)
            .question("Question 1")
            .answers(ImmutableList.of(answer1, answer2, answer3))
            .correctAnswerId(2)
            .build();

        return new ResponseEntity<>(ImmutableList.of(question1), HttpStatus.OK);
    }
}
