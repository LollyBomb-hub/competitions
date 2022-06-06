package ru.council.competitions.enums;

import ru.council.competitions.entities.ParticipationAuditEntity;
import ru.council.competitions.models.CompetitionModel;

import java.util.List;
import java.util.function.BiConsumer;
import java.util.stream.Collectors;

public enum WeightCategoriesMapperEnum {

    FiftyThree(CompetitionModel::setCountFiftyThree, null, 53),
    FiftyEight(CompetitionModel::setCountFiftyEight, 53, 58),
    SixtyFour(CompetitionModel::setCountSixtyFour, 58, 64),
    SeventyOne(CompetitionModel::setCountSeventyOne, 64, 71),
    SeventyNine(CompetitionModel::setCountSeventyNine, 71, 79),
    EightyEight(CompetitionModel::setCountEightyEight, 79, 88),
    NinetyEight(CompetitionModel::setCountNinetyEight, 88, 98),
    NinetyEightPlus(CompetitionModel::setCountNinetyEightPlus, 98, null),
    Hundred(CompetitionModel::setCountHundred, 98, 100),
    HundredAndOne(CompetitionModel::setCountHundredAndOne, 100, 101),
    HundredAndTwo(CompetitionModel::setCountHundredAndTwo, 101, 102),
    HundredAndThree(CompetitionModel::setCountHundredAndThree, 102, 103);

    private final BiConsumer<CompetitionModel, Long> setter;
    private final Integer lowerBoundary;
    private final Integer upperBoundary;

    WeightCategoriesMapperEnum(BiConsumer<CompetitionModel, Long> setter, Integer lowerBoundary, Integer upperBoundary) {
        this.setter = setter;
        this.lowerBoundary = lowerBoundary;
        this.upperBoundary = upperBoundary;
    }

    public void process(CompetitionModel model, List<ParticipationAuditEntity> currentCompetitionEntities) {
        setter.accept(
                model,
                (long) filterByWeightOfParticipant(currentCompetitionEntities, lowerBoundary, upperBoundary).size()
        );
    }

    private List<ParticipationAuditEntity> filterByWeightOfParticipant(List<ParticipationAuditEntity> currentCompetitionParticipants, Integer lowerBoundary, Integer upperBoundary) {
        return currentCompetitionParticipants.stream().filter(el -> {
            double weight = el.getParticipant().getWeight();
            if (upperBoundary != null && lowerBoundary != null) {
                return weight > lowerBoundary && weight <= upperBoundary;
            } else if (upperBoundary == null && lowerBoundary != null) {
                return weight > lowerBoundary;
            } else if (upperBoundary != null) {
                return weight <= upperBoundary;
            } else return true;
        }).collect(Collectors.toList());
    }

    public static void processAllWeightCategories(CompetitionModel model, List<ParticipationAuditEntity> currentCompetitionAudit) {
        for (WeightCategoriesMapperEnum categoryMapper: values()) {
            categoryMapper.process(model, currentCompetitionAudit);
        }
    }
}
