import {
  animate,
  query,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const enterFromSide = trigger("EnterLeave", [
  state("flyIn", style({ transform: "translateX(0)" })),
  transition(":enter", [
    style({ transform: "{{direction}}" }),
    animate("0.3s 100ms ease-in")
  ])
]);
