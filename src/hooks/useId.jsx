import { useId } from "react";

const useUniqueId = () => {
  const Id = useId();
  return Id;
};
export default useUniqueId;
