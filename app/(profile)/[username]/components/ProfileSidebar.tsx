import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";
import ProfileInfo from "./ProfileInfo";
import ProfileDesc from "./ProfileDesc";
import ContactInfo from "./ContactInfo";

interface ProjectProps {
  style?: CSSProperties;
}

const ProfileSidebar: React.FC<ProjectProps> = ({ style }) => {


  return (
    <div className="flex flex-col gap-6">
      {/* ProfileInfo and ProfileDesc will take up as much height as they need */}
      <ProfileInfo />
      <ProfileDesc />  
      <ContactInfo />
      </div>
  );
};

export default ProfileSidebar;
