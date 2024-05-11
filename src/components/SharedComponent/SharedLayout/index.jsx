import { SharedFooter } from "../SharedFooter";
import { SharedHeader } from "../SharedHeader";

export const SharedLayout = ({ children }) => {
  return (
    <>
      <SharedFooter />
      {children}
      <SharedHeader />
    </>
  );
};
