package com.scrummy.rest.services;

import com.scrummy.rest.models.Question;
import java.util.List;

public interface TriviaService {

    List<Question> getAllQuestions();

}
