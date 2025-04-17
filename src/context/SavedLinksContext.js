import React, { createContext, useState, useEffect } from "react";

export const SavedLinksContext = createContext();

export const SavedLinksProvider = ({ children }) => {
  // Cargar los contactos desde localStorage al iniciar
  const [savedLinks, setSavedLinks] = useState(() => {
    const storedLinks = localStorage.getItem("savedLinks");
    return storedLinks ? JSON.parse(storedLinks) : [];
  });

  // Guardar los contactos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("savedLinks", JSON.stringify(savedLinks));
  }, [savedLinks]);

  return (
    <SavedLinksContext.Provider value={{ savedLinks, setSavedLinks }}>
      {children}
    </SavedLinksContext.Provider>
  );
};