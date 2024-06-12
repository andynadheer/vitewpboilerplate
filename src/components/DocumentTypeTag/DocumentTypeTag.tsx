import { FC } from "react";

export interface Props {
  title: string;
}

export const DocumentTypeTag: FC<Props> = ({ title }: Props) => {
  return title ? <span className="document-type-tag">{title}</span> : null;
};
