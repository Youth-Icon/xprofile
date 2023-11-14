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
    <div className="flex-col">
        <ProfileInfo/>
        <ProfileDesc/>
        <ContactInfo/>


    </div>
  );
};

export default ProfileSidebar;
