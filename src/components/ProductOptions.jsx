import React, { useState } from "react";

const ProductOptions = ({ options, radius, shape, type, label }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const colors = {
    "light-gray-2": "#cccccc",
    "dark-gray-2": "#474747",
    primary: "#C92071",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && (
        <span style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#8F8F8F",      
          marginBottom: 4,
          fontFamily: "Inter",
          paddingTop:10
        }}>
          {label}
        </span>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {options.map((option, i) => {
          const isSelected = i === selectedIndex;

          const baseStyle = {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            borderRadius: shape === "square" ? radius || 0 : "50%",
            borderWidth: isSelected ? 2 : 1,
            borderColor: isSelected ? colors.primary : colors["light-gray-2"],
            borderStyle: "solid",
            transition: "border-color 0.3s, border-width 0.3s",
          };

          if (shape === "square") {
            baseStyle.width = 48;
            baseStyle.height = 48;
          } else if (shape === "circle") {
            baseStyle.width = 31;
            baseStyle.height = 31;

          }

          if (type === "text") {
            baseStyle.fontSize = 16;
            baseStyle.userSelect = "none";
            baseStyle.fontWeight = 600;
            baseStyle.backgroundColor = isSelected ? colors.primary : "#fff";
            baseStyle.color = isSelected ? "#fff" : colors["dark-gray-2"];
          } else if (type === "color") {
            baseStyle.backgroundColor = option;
            baseStyle.color = "transparent";
            baseStyle.fontSize = 0;
          }

          return (
            <div
              key={i}
              style={baseStyle}
              onClick={() => handleSelect(i)}
              title={type === "color" ? option : undefined}
              role="button"
              aria-pressed={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelect(i);
                }
              }}
            >
              {type === "text" ? option : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOptions;
