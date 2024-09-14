export const generateHoverScaleEffect = (): string => {
  return `
      &:hover {
        filter: brightness(1.05);
        transform: scale(1.015);
      }
  
      &:active {
        filter: brightness(0.95);
        transform: scale(0.985);
      }
  
      transition:
        transform 0.15s ease-out,
        filter 0.15s ease-out;
    `;
};
