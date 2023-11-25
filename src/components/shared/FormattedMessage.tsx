import React from "react";
import { english } from "../../locales/en";
import { svenska } from "../../locales/sv";

const messages = {
  en: english,
  sv: svenska,
} as const;

type Messages = (typeof messages)["en"];

type GetExpression<T extends string> =
  T extends `${string}{${infer Ident}}${infer Rest}`
    ? Ident | GetExpression<Rest>
    : never;

type FormattedMessageProps<Id extends keyof Messages> = {
  id: Id;
  values: Record<GetExpression<Messages[Id]>, string>;
};
const FormattedMessage = <Id extends keyof Messages>(
  props: FormattedMessageProps<Id>
) => {
  return null;
};

<>
  <FormattedMessage id="GREETING" values={{ name: "nice" }} />
  <FormattedMessage id="HEADER" values={{ is: "Cool" }} />
  <FormattedMessage id="INTRO" values={{ age: "", name: "" }} />
  <FormattedMessage id="INTRO" values={{}} />
  <FormattedMessage id="SOMETHING" values={{ world: "world" }} />
</>;
