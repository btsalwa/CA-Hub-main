import React from "react";
import VisionMission from "./VisionMission";
import CoreValues from "./CoreValues";

const Profile = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          CONSERVATION AGRICULTURE HUB-KENYA
        </h1>

        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Conservation Agriculture (CA) is a crop production system that is
            based on three principles: minimal soil disturbance, permanent soil
            cover and crop rotations. Unique to CA is that it holds tremendous
            potential for all sizes of farms and agro-ecological systems,
            including those of smallholder farmers who are food insecure.
          </p>

          <p className="text-lg mb-6">
            Conservation Agriculture has made a significant contribution in
            increasing food production in areas where smallholder farmers
            struggle to produce food because of frequent droughts, infertile
            soils and labor shortages.
          </p>

          <p className="text-lg mb-6">
            The CA-Kenya Hub is a network of organizations and institutions and
            was established in 2011. It was started by 5 (five) organizations
            funded by the Canadian Food Grainbank (CFGB), World Relief Canada,
            World Renew, ADRA and 3 local implementing partner members: National
            Council of Churches of Kenya (NCCK), Ugunja Development Organization
            (UDO), Sahelian Solutions (SASOL). Since then, CA Kenya Hub has
            grown to almost 20 official members and 50 participants on online
            platform by 2022.
          </p>

          <p className="text-lg mb-6">
            The CA-Kenya Hub connects organizations and builds capacity of its
            members to promote sustainable food security through conservation
            agriculture. Accomplishments of the CA-Kenya Hub include the
            following trainings, linkages to conferences, exchange visits,
            consistent quarterly meetings at a hub, information sharing amongst
            members, fundraising efforts, and linking/networking with other
            organizations. Individually most of the members are involved in
            projects implemented in different counties and are aimed to promote
            the CA practice, hence bringing a diversity of experience that
            provides a very good platform for knowledge sharing.
          </p>
        </div>

        <VisionMission />
        <CoreValues />
      </div>
    </div>
  );
};

export default Profile;
