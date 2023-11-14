import React, { ReactNode, CSSProperties } from "react";

interface FeatCardProps {
  height?: string;
  width?: string;
  paddingX?: string;
  paddingY?: string;
  style?: CSSProperties; // Add a style prop for custom styles
  children?: ReactNode;
}

const FeatureBox: React.FC<FeatCardProps> = ({
  height,
  width,
  paddingX,
  paddingY,
  style,
  children,
}) => {
  const boxStyles: CSSProperties = {
    height: height || "100px",
    width: width || "100px",
    padding: `${paddingY || "8px"} ${paddingX || "8px"}`,
    ...style, // Merge custom styles
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