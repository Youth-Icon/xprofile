import React, { CSSProperties } from "react";
import FeatureBox from "@/app/(landing)/components/FeatureBox";
import { Star, ExternalLink, Plus } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";

interface ProjectProps {
  style?: CSSProperties;
}

const ContactInfo: React.FC<ProjectProps> = ({ style }) => {


  return (
      <FeatureBox
        height="450px"
        width="350px"
        paddingX="20px"
        paddingY="24px"
        style={{
        background:
          "linear-gradient(to left, rgba(70, 6, 6, 0.1), rgba(233, 30, 99, 0.1))",
      }}
      >
    <div>
    <div>
        Reach me At
    </div>
    <div>
        Social Links
    </div>
    </div>

      <div>
    <div>
        Other links
    </div>
    </div>


      </FeatureBox>
  );
};

export default ContactInfo;
