export const smallMargin = 10;
export const baseMargin = 20;
export const largeMargin = 30;

export const screenWidth = window.screen.width;
export const maxBoxesPerRow = 4;
export const cardWidth = Math.round(screenWidth / maxBoxesPerRow);

export const isMobile = screenWidth < 768; // use a robust library for this.
export const isTablet = screenWidth < 1280;