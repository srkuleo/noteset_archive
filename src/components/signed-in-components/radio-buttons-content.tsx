import { initialWorkouts } from "../../types/types";
import { StartIcon, SelectedIcon } from "../svg-components/svg";
import { useState } from "react";

const RadioButtonsContent = () => {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  function toggleIsSelected(id: number) {
    const newWorkouts = workouts.map((workout) => {
      if (workout.id === id) {
        return {
          ...workout,
          selected: true,
        };
      } else {
        return {
          ...workout,
          selected: false,
        };
      }
    });
    setWorkouts(newWorkouts);
  }

  return (
    <div className="relative z-10 mx-auto flex flex-col items-center">
      <h1 className="mt-36 mb-24 text-5xl font-bold text-orange-button500">
        Welcome, Srkuleo.
      </h1>
      <h3 className="mb-6 text-2xl font-semibold text-slate-main600 dark:text-yellow-text50">
        Choose your workout for today:
      </h3>
      <div className="flex flex-col gap-2 rounded-xl">
        {workouts.map((workout) => {
          return (
            <button
              onClick={() => {
                toggleIsSelected(workout.id);
              }}
              key={workout.id}
              className={`${
                workout.selected
                  ? "bg-gradient-to-r from-green-dark600/90 to-green-dark700 text-yellow-text50"
                  : "bg-slate-light50"
              } rounded-lg px-6 py-4`}
            >
              <div className="flex items-center justify-between gap-14">
                <div className="text-left">
                  <p
                    className={`${
                      !workout.selected && "text-slate-main600"
                    } text-xl font-medium`}
                  >
                    {workout.workout}
                  </p>
                  <p
                    className={`${
                      !workout.selected && "text-slate-light400"
                    } text-sm`}
                  >
                    {workout.tooltip}
                  </p>
                </div>
                {workout.selected ? (
                  <SelectedIcon stroke="#fefce8" />
                ) : (
                  <SelectedIcon />
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button className="mt-12 flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-button500 via-orange-button500 to-red-button500 px-8 py-2 text-lg font-semibold uppercase text-yellow-text50 hover:from-orange-button600 hover:to-red-button700">
        Start
        {StartIcon}
      </button>
    </div>
  );
};

export default RadioButtonsContent;
