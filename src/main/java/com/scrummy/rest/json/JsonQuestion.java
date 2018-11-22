package com.scrummy.rest.json;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JsonQuestion {

    private Long id;

    private String question;

    private List<JsonAnswer> answers;

    @JsonProperty("correct_answer_id")
    private Long correctAnswerId;
}
