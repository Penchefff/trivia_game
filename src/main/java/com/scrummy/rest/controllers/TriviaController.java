package com.scrummy.rest.controllers;

import com.scrummy.rest.json.JsonAnswer;
import com.scrummy.rest.json.JsonQuestion;
import com.scrummy.rest.services.TriviaService;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/questions")
public class TriviaController {

    @Autowired
    public TriviaService service;

    @CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<JsonQuestion>> getQuestions() {
        return new ResponseEntity<>(service.getAllQuestions()
            .stream()
            .map(q -> JsonQuestion.builder()
                .id(q.getId())
                .question(q.getText())
                .correctAnswerId(q.getCorrectAnswerId())
                .answers(q.getAnswers().stream()
                    .map(a -> JsonAnswer.builder()
                        .id(a.getId())
                        .answer(a.getText()).build())
                    .collect(Collectors.toList()))
                .build())
            .collect(Collectors.toList()), HttpStatus.OK);
    }
}
