export const Line = () => {
  return (
    <svg height="7" width="100%" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0"
        y1="10"
        x2="100%"
        y2="10"
        style={{ stroke: "var(--color-line)", strokeWidth: 12 }}
      />
    </svg>
  );
};