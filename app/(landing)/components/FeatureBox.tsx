import React, { ReactNode } from "react";

interface FeatureBoxProps {
  height?: string;
  width?: string;
  paddingX?: string;
  paddingY?: string;
    children?: ReactNode;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  height,
  width,
  paddingX,
  paddingY,
    children,
}) => {
  const boxStyles: React.CSSProperties = {
    height: height || "100px",
    width: width || "100px",
    padding: `${paddingY || "8px"} ${paddingX || "8px"}`,
      };

  const paddingClasses = `py-${paddingY} px-${paddingX}`;

  return (
    <div
      className={`rounded-3xl border flex-shrink-0 bg-neutral-500/10 text-stone-400 bg-opacity-30 backdrop-blur-3xl border-t border-b border-l ${paddingClasses}`}
      style={boxStyles}
    >
      {children}
    </div>
  );
};

export default FeatureBox;