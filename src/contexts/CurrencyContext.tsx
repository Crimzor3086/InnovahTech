import React, { createContext, useContext, useState } from "react";

type Currency = "USD" | "KES";

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  formatPrice: (usdAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const KES_RATE = 153; // approximate USD to KES

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const toggleCurrency = () => setCurrency((prev) => (prev === "USD" ? "KES" : "USD"));

  const formatPrice = (usdAmount: number) => {
    if (currency === "USD") return `$${usdAmount.toLocaleString()}`;
    return `KES ${(usdAmount * KES_RATE).toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
};
