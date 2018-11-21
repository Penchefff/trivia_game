package com.scrummy.rest.services;

import com.scrummy.rest.models.Question;
import com.scrummy.rest.repositories.QuestionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TriviaServiceImpl implements TriviaService {

    @Autowired
    public QuestionRepository questionRepository;

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}
