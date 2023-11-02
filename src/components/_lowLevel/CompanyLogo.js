import React from "react";

export const CompanyLogo = ({ height, style }) => {
  return (
    <img
      src="data:image/png;base64,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"
      alt="company-logo"
      height={height}
      style={style}
    />
  );
};
