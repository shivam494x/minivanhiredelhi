export const animateSocialelements = (elements: NodeListOf<HTMLLIElement>) => {
    elements.forEach((link) => {
      link.addEventListener("mouseover", () => {
        elements.forEach((l) => l.classList.add("hovered"));
      });
  
      link.addEventListener("mouseleave", () => {
        elements.forEach((l) => l.classList.remove("hovered"));
      });
    });
  };
  
  
  