import type {
  StatefulCardsContainerProps,
  WorkoutProps,
} from "../../types/types";
import { PrevCardBtn, NextCardBtn, StartBtn } from "../buttons";

const StatefulCardsContainer = ({
  currWorkout,
  workouts,
  prevCard,
  nextCard,
}: StatefulCardsContainerProps) => {
  return (
    <div className="flex items-center">
      <PrevCardBtn prevCard={prevCard} workouts={workouts} />
      <WorkoutCard
        id={currWorkout.id}
        name={currWorkout.name}
        tooltip={currWorkout.tooltip}
      />
      <NextCardBtn nextCard={nextCard} workouts={workouts} />
    </div>
  );
};

const WorkoutCard = ({ id, name, tooltip }: WorkoutProps) => {
  return (
    <div className="relative h-[500px] w-[380px] overflow-hidden rounded-[24px] border-4 border-orange-button600 bg-slate-light50 dark:border-orange-button500 dark:bg-gradient-to-tr dark:from-slate-dark700 dark:to-slate-dark800">
      <div key={id} className="flex flex-col items-center gap-4 p-4">
        <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
          {name}
        </p>
        <p className="text-sm text-slate-light400">{tooltip}</p>
        <StartBtn />
      </div>
      <div className="absolute -left-[75px] top-[310px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#69ab69]/70"></div>
      <div className="absolute left-[280px] top-[394px] h-[160px] w-[160px] rounded-full bg-[#b4c6b1] dark:bg-[#4a784a]/80"></div>
    </div>
  );
};

export default StatefulCardsContainer;