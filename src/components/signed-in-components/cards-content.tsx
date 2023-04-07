import { useEditingId } from "../../hooks/useEditingId";
import { useInFocus } from "../../hooks/useInFocus";
import type { CardsContentProps } from "../../types/types";
import { WorkoutCardsCarousel } from "../wrappers";
import { StatelessCardContent } from "./stateless-cards-content";
import { WorkoutCard } from "./workout-card";
import { CardNavArrows } from "./card-nav-arrows";
import { CardsNavButtons } from "./cards-nav-buttons";
import { CardsEditBtns } from "../buttons";

export const CardsContent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
}: CardsContentProps) => {
  const { InFocus, prevCard, nextCard, switchInFocus, jumpToCard } =
    useInFocus(workouts);
  const { editingId, handleEditingId } = useEditingId();

  const currWorkout = workouts[InFocus];

  if (!currWorkout) {
    return (
      <StatelessCardContent
        addWorkout={addWorkout}
        handleEditingId={handleEditingId}
        toggleEdit={toggleEdit}
      />
    );
  }

  return (
    <div className="relative flex flex-col gap-2">
      <div className="relative px-12">
        <CardNavArrows
          workouts={workouts}
          prevCard={prevCard}
          nextCard={nextCard}
        />
        <WorkoutCardsCarousel InFocus={InFocus}>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              editingId={editingId}
              handleEditingId={handleEditingId}
              changeWorkout={changeWorkout}
              removeWorkout={removeWorkout}
              switchInFocus={switchInFocus}
              isEditing={isEditing}
              toggleEdit={toggleEdit}
            />
          ))}
        </WorkoutCardsCarousel>
      </div>
      <CardsNavButtons
        InFocus={InFocus}
        workouts={workouts}
        jumpToCard={jumpToCard}
      />
      {isEditing && (
        <CardsEditBtns
          workouts={workouts}
          addWorkout={addWorkout}
          jumpToCard={jumpToCard}
          handleEditingId={handleEditingId}
          toggleEdit={toggleEdit}
        />
      )}
    </div>
  );
};
