import useBoredData from "./useBoredData";

const useActivities = (boredQuery) =>
  useBoredData(
    {
      participants: boredQuery.participants,
      ...(boredQuery.type && { type: boredQuery.type }), //optionally adding prop
      ...(boredQuery.accessibility && { accessibility: 0 }),
      ...(boredQuery.price && { price: 0 }),
    },
    [boredQuery]
  );

export default useActivities;
