import React from "react";
import Vision1 from "../../assets/Vision1.png";
import "../../../public/styles/slider.css";
const CoporatePartnerDetails = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Vision1})` }}
      className=" h-auto relative bg-cover bg-center bg-no-repeat w-full "
    >
      <div className="flex justify-center items-center bg-white/10">
        <div className="w-[85%] md:w-[80%] text-[14px] nunito-font flex flex-col justify-center  items-center gap-[20px] my-[38px] md:my-[60px]">
          <div className="flex justify-between flex-col gap-[32px] md:flex-row">
            <div className="left md:w-[48%] flex flex-col gap-[32px]">
              <div className="above p-[28px] md:p-[40px] bg-white rounded-2xl">
                <div className=" flex flex-col gap-[20px]">
                  <div className="font-[800] text-[32px] md:text-[40px]">
                    Making a PACT Together
                  </div>
                  <div className="text-[14px] md:text-[20px] font-[600]">
                    🌟 When you partner with PACT Foundation, you choose to
                    equip, empower, and motivate vulnerable communities to
                    realize their potential and transform their lives. At the
                    heart of our work, we aim to: 🌟
                  </div>
                  <div className="font-[600] text-[12px] md:text-[16px]">
                    <div>
                      📚 Improve education in impoverished communities.
                    </div>
                    <div>
                      🌍 Ensure health by conducting frequent medical camps to
                      maintain the community's optimum health conditions.
                    </div>
                    <div>
                      🤝 Provide self-employment through skill development and
                      vocational training programs
                    </div>
                  </div>
                  <div className="font-[600] text-[12px] md:text-[16px]">
                    📢 Our corporate partners' contribution is much more than
                    just financial. It’s about sharing knowledgeand expertise,
                    inspiring creativity, and cultivating the drive to make a
                    difference.
                  </div>
                </div>
              </div>
              <div className="bottom p-[28px] md:p-[40px] bg-white rounded-2xl">
                <div className=" flex flex-col gap-[20px]">
                  <div className="font-[800] text-[32px] md:text-[40px]">
                    Why Partner with Us?
                  </div>
                  <div className="text-[14px] md:text-[20px] font-[600]">
                    🌟 By partnering with PACT Foundation, your organisation
                    benefits in several ways:
                  </div>
                  <div className="font-[600] text-[12px] md:text-[16px]">
                    <div>
                      Brand Enhancement: Associating with a respected charity
                      enhances your corporate image and makes your brand more
                      appealing to a wider audience.
                    </div>
                    <div>
                      Employee morale boost: Through employee engagement
                      programs, employees will feel a sense of pride by making a
                      difference, driving satisfaction and productivity.
                    </div>
                    <div>
                      Receive Recognition: We acknowledge our partners'
                      contributions in various ways, such as featuring your
                      company logo on our website, displaying mention at our
                      events, and recognition on our social media platforms
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right md:w-[48%] flex flex-col gap-[32px]">
              <div className="above p-[28px] md:p-[40px] bg-white rounded-2xl">
                <div className=" flex flex-col gap-[20px]">
                  <div className="font-[800] text-[32px] md:text-[40px]">
                    How Can Your Organisation Partner with Us?
                  </div>
                  <div className="text-[20px] font-[600]">
                    🌟 At PACT Foundation, we recognise that a one-size-fits-all
                    approach to partnerships is not the mostbeneficial. That’s
                    why we offer an array of options for your business to engage
                    and contribute:
                  </div>
                  <div className="font-[600] text-[12px] md:text-[16px]">
                    <div>
                      Direct Funding: Your organisation can sponsor various
                      programs and initiatives that we run, whether it’s our
                      education programs, healthcare initiatives, or vocational
                      training initiatives.
                    </div>
                    <div>
                      🌍 Ensure health by conducting frequent medical camps to
                      Employee Engagement Programs: Embed your social
                      responsibility commitments at the heart ofyour company. We
                      can assist in creating customized programs where your
                      employees can volunteerand drive change.
                    </div>
                    <div>
                      Cause Marketing Initiatives: Collaborate with PACT
                      Foundation to show your stakeholders that you care. We can
                      create co-branded campaigns on substantive issues that
                      align with your company's mission and values.
                    </div>
                    <div>
                      In-kind Support: Do you have resources that can benefit
                      our communities? Goods, services, space,or expertise, can
                      greatly impact our mission and programs
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom p-[28px] md:p-[40px] bg-white rounded-2xl">
                <div className=" flex flex-col gap-[20px]">
                  <div className="text-[16px] md:text-[20px] font-[600]">
                    Join PACT Foundation today and let’s work together to
                    contribute towards a better and equal world. For further
                    information on corporate partnerships, please contact us at
                    contact <span className="text-[#8EC641]">@pactfoundation.org</span>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoporatePartnerDetails;
