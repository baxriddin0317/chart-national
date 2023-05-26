import {
  FaLaptopCode,
  FaUsers,
  FaFileContract,
  FaChartLine,
  FaMoneyBillAlt,
  FaListAlt,
} from "react-icons/fa";

import Sequoia from "../assets/img/sequoia-logo.png";
import SNA from "../assets/img/sna-logo.png";
import Six from "../assets/img/sixgen.png";
import Bg1 from "../assets/img/bg-client.jpg"
import Bg2 from "../assets/img/bg-quote.jpg"

// navigation data
export const navigation = [
  {
    id: 1,
    href: "home",
    name: "home",
  },
  {
    id: 2,
    href: "about",
    name: "about us",
  },
  {
    id: 3,
    href: "profile",
    name: "investment profile",
  },
  {
    id: 4,
    href: "portifolio",
    name: "portifolio",
  },
  {
    id: 5,
    href: "team",
    name: "team",
  },
  {
    id: 6,
    href: "board",
    name: "advisory board",
  },
  {
    id: 7,
    href: "contact",
    name: "contact",
  },
];

// investment profile data
export const Investment = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    text: "Identifiable and differentiated intellectual property, developed either independently or with customer funding, with the potential to command commercial pricing within the Sector or other markets",
  },
  {
    id: 2,
    icon: <FaUsers />,
    text: "Talented and creative management teams, dedicated to providing innovative solutions in service to the Sector and its mission",
  },
  {
    id: 3,
    icon: <FaFileContract />,
    text: "Strong customer relationships, demonstrated by long term Sector contracts, with visibility into projected revenue through contract backlog and identified new customers",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    text: "Demonstrated Record of Performance, with at least $2 million in EBITDA",
  },
  {
    id: 5,
    icon: <FaMoneyBillAlt />,
    text: "History of high margin cash flow generation",
  },
  {
    id: 6,
    icon: <FaListAlt />,
    text: "Defensible, niche positions within high priority, high growth budget areas within the Sector",
  },
];

// portifolio data
export const Portifolio = [
  {
    id:1,
    img: Sequoia,
    title: "Sequoia",
    text: "Sequoia Solutions is a leading provider of high-end mission oriented professional services to the US Intelligence Community and Department of Defense. Sequoia also offers Combine, an emulation software tool for air-gapped clouds including Microsoft Azure and AWS Government / Secret / Top Secret.",
    linkUrl: "https://www.sequoiainc.com/"
  },
  {
    id:2,
    img: SNA,
    title: "SNA International",
    text: "SNA International provides forensics, biometrics, and identity intelligence to the Department of Defense, Department of Homeland Security and other federal agencies, state and local governments, private industry and international organizations.",
    linkUrl: "https://sna-intl.com/"
  },
  {
    id:3,
    img: Six,
    title: "SixGen",
    text: "SixGen Inc. is a full spectrum cybersecurity company that offers products and services to the US government and commercial clients. SixGen employees maintain the highest security clearances and are experts in penetration testing, red teaming and vulnerability assessments.",
    linkUrl: "https://www.sixgen.io/"
  }
]

// quote data
export const quotes = [
  {
    text: <>Chart and SFI Financial saw the potential of EOTech early on and worked together to improve the product and then get it sold to Units rotating into the theater. It was gratifying to work with <span className="text-brand-primary">a group that clearly understood how government works</span> and, more importantly, defense. </>, 
    smallText: "Bud Evans, former Board Chairman of EOTech, Inc.", 
    imgUrl: Bg1
  },
  {
    text: <>I partnered with Chart because the firm understands the challenges of working in the national security space. Chart provided our management team with precisely what it needed to fuel our next phase of growth. During our partnership we were able to jointly craft a strategy that transformed a struggling business and provided an exit at a <span className="text-brand-primary">significant increase in value.</span></>, 
    smallText: "Jamie Benoit, former CEO of FedData", 
    imgUrl: Bg2
  },
  {
    text: <>
    As founder and CEO of NAR, it was great to have a PE firm that understood the DoD and government in general. As an investor in NAR, Chart was a useful ally as we grew our business globally. Rapid growth, due to world events, led to tough management decisions and <span className="text-brand-primary">Chart was firmly in management's corner.</span></>, 
    smallText: "Bob Castellani, CEO and Founder of North American Rescue (NAR)", 
    imgUrl: Bg1
  },
  {
    text: <>I have had the great pleasure working with Chart in several capacities in my position as CEO of Maritime Telecommunications Company (MTN). Chart was instrumental in MTN winning the auction of its targeted acquisition and raising the necessary funds, including Chart directly investing funds into the company. After the successful completion of the transaction, Mr. Brady agreed to continue to advise the company in the capacity of a director on our Board. His contributions and guidance <span className="text-brand-primary">helped the company realize substantial growth and diversification</span>. His connections within and understanding of the U.S. Department of Defense quickly helped the company to transform its customer base from maritime only to one that was deeply integrated into the U.S. and intelligence branches. </>, 
    smallText: "Bill Marks, former CEO of Maritime Telecommunications Company (MTN)", 
    imgUrl: Bg2
  },
]

// our team data
export const Team = [
  {
    id: 1,
    title: "Christopher D. Brady",
    job: "partner",
    description: ["Christopher D. Brady co-founded Chart National in 2018. Chris spent fourteen years in the corporate finance and capital markets departments of Lehman Brothers and Dillon Read. Thereafter, he was a founding member of The Chart Group, formed in 1995. With over 30 years’ experience in private equity, corporate finance and capital markets, Chris focuses on identifying and building defense and intelligence portfolio companies.", "Chris has been actively involved channeling the resources of the business community to assist with defense, security and intelligence initiatives. Projects include a leadership role with Warfighter Sports/DSUSA, a foundation dedicated to working with injured soldiers; and serving as a member of the Transition Team for the US Army Secretary Dr. Francis Harvey. He has served in senior management positions in numerous New Jersey political campaigns, including Millicent Fenwick (1978), Christine Whitman (1991) and George H.W. Bush (1992).", "Chris currently serves as a director of Miami International Holdings, and several other Chart investments and affiliates, including Chart Capital Partners II, LP, where he retains an advisory role pending dissolution of the fund. Chris earned his B.A. from Middlebury College and his M.B.A. from Columbia University Graduate School of Business."]
  },
  {
    id: 2,
    title: "Khaled Elmarsafy",
    job: "partner",
    description: ["Khaled (Kal) Elmarsafy is a Partner and Investment committee member at Chart National, L.P. responsible for investment process, due diligence, post-acquisition and fund operations. He helps manage the growth of portfolio companies through relationships within the Sector.", "Kal has more than 25 years’ experience in U.S. and International Private Equity, having led and managed transactions aggregating more than $500mm invested capital. His role in Private Equity has been sourcing private opportunities; structuring the investments terms and closing investment process. Kal has also managed the growth of the portfolio companies through his various roles as an operating partner and board member. Prior to Chart National, L.P. Kal worked at Univest Group, a PE investment Advisory company based in Kuwait; Al-Deera Holding, a publicly traded investment company in Kuwait; Fletcher Asset Management, a hedge fund in NYC and UBS in New York.", "Kal is a member of ABANA in New York and sits on the board of several companies including Miami International Holdings (US) and Abwab Capital (UAE). Kal graduated from University of Hartford with a Bachelors’ Degree in Business and International Finance."]
  },
  {
    id: 3,
    title: "Joseph J. Boyle",
    job: "VICE PRESIDENT",
    description: ["Joseph J. Boyle is a Vice President and Chief Compliance Officer at Chart National. He was previously Vice President at Chart Group Advisors, the investment banking division of The Chart Group L.P. Joe was involved in every stage of private placements and mergers & acquisitions including creating integrated financial models, authoring information memorandum, determining capital structure and liquidity events across multiple industries including transportation, defense, energy and financial products.", "Previously, Joe worked for Univest Group, a partner of The Chart Group in Dubai. His primary responsibility was to evaluate cash flow potential for new investments in real estate projects. Joe began his career at UBS as a Trade Management Specialist for derivatives in Stamford, Connecticut.", "Joe graduated from the University of Illinois at Chicago with a Bachelor of Science in Business Management."]
  },
  {
    id: 4,
    title: "Deirdre E. Kilmartin",
    job: "OPERATIONS MANAGER",
    description: ["Deirdre E. Kilmartin is Operations Manager at Chart National. She is responsible for overseeing administrative activities, IT, and daily operations of the office.", "Prior to joining The Chart Group, L.P. in 2004, Deirdre was an agent at Wilhelmina Models. She earned her B.A. in Communications from Central Connecticut State University and received her M.S. in Real Estate Development from New York University."]
  },
  {
    id: 5,
    title: "Margaret E. Saracco",
    job: "CONTROLLER",
    description: ["Margaret E. Saracco is Controller for Chart National where she handles accounting functions to support the preparation of tax and audit documents for investors. Other responsibilities include payroll processing, human resource compliance and vendor relations.", "Margaret has worked at The Chart Group for 24 years and has served in the roles of executive assistant, bookkeeper, accounts payable and investor relations. Prior to working at Chart, she was in the not-for-profit fundraising field for 7 years.", "Margaret earned a B.A. in Economics from Oklahoma State University and a Master’s in Regional and City Planning from the University of Oklahoma."]
  },
  {
    id: 6,
    title: "Helen Fletcher",
    job: "EXECUTIVE ASSISTANT",
    description: ["Helen Fletcher is Executive Assistant at Chart National. She is responsible for administrative activities for the group, including Board minute taking.", "Helen has over 30 years experience within the field of administration and human resources. She graduated from Dublin College of Business Studies and has a degree with the London Institute of Personnel Management."]
  },
]

// Advisory Board data
export const Board = [
  {
    id: 1,
    title: "Joseph Robert Wright, Jr.",
    job: "CHAIRMAN",
    description: ["Joe currently serves as Executive Chairman of Sequoia, Chairman of SNA and Chairman of Altamira Technologies. He is also Executive Partner/Consultant to Comvest Partners, Chairman of the Investment Committees of Surry Capital, LLC, ClearSky Power and Technology Fund, LLC, and ClearSky Security Fund. Joe joined Chart National in 2018 as Chairman of the Advisory Board.", "Joe was Executive Chairman of Federal Data Systems; Chairman of Intelsat; CEO of PanAmSat; Chairman of GRC International; Executive Chairman of MTN Satellite Communications; CEO of Scientific Games; Co-Chairman of Baker & Taylor; EVP, Vice Chairman and Director of W. R. Grace, Chairman of Grace Energy Company and President of Grace Environmental Company; Senior Advisor to Providence Equity; Vice Chairman of Terremark; President of two Citibank subsidiaries; Vice President and Partner of Booz, Allen and Hamilton; in addition to executive positions in several other companies.", "Joe is also on the Board of Systems Control, and is a member of the Council of Chief Executives, Council on Foreign Relations, Economic Club of New York, Committee for a Responsible Federal Budget and Oklahoma Medical Research Foundation (OMRF). He previously served as a Director of The Cowen Group, EBIX, Priority Holdings, Travelers, Terremark Worldwide, Harcourt Brace Janovich, Kroll, Titan, Proxim, Federal Signal, Education Management Corporation (EDMC), Hampton University, AT&T Government Markets and others.", "Joe served in the U.S. Government under President Reagan as Deputy Secretary of Commerce and Deputy Director/Director of the Federal Office of Management and Budget (OMB), and was a member of the President's Cabinet. In addition, he held various management and economic positions in the Federal Departments of Defense, Commerce and Agriculture under three other Presidents: Nixon, Ford and Kennedy. Joe received the Distinguished Citizens Award, and was appointed to the President’s Export Council by President Reagan and continued under President H.W. Bush as Chairman of the Export Control Sub-Committee. He was also appointed to the President’s Commission on U.S. Postal Service Reform and the National Security Telecommunications Advisory Committee (NSTAC), the Federal Communications Commission’s Network Reliability and Interoperability Council and several other advisory boards by President W. Bush. He also served on the Defense Business Board under three Presidents, including the present Administration. Joe has an active Top Secret clearance with the U.S. Government.", "Joe received his undergraduate degree from the Colorado School of Mines and his graduate degree from Yale University."]
  },
  {
    id: 2,
    title: "Jourdan B. Frain",
    job: "BOARD MEMBER",
    description: ["Mr. Jourdan Frain currently serves as Managing Director, Head of Execution for Rosenblatt Securities, Inc. responsible for the firm's trading desks and management of the equity broker dealer business. Prior to becoming a part of Rosenblatt's management team, he led the Broker-Dealer Business in Electronic Equities at JP Morgan Securities. A subject matter expert, Mr. Frain has intimate knowledge of equity markets, algorithmic trading, and transaction analytics. He is a former New York Stock Exchange Member and holds FINRA Series 7, 19, 55, and 63 licenses. Mr. Frain is also the current COO of Rosenblatt's affiliate RIA, Rosenblatt Global Advisors and the Chairman of the Board for Revolution Capital Advisors, an RIA managing listed products.", "Prior to his career in finance, Mr. Frain served with distinction as a paratrooper in the US Army’s 18th Airborne Corps, being awarded the Bronze Star with Valor Device and the Purple Heart for his heroic actions in combat during Operation Iraqi Freedom. Mr. Frain finished his career with the storied First Troop Philadelphia City Cavalry as an elected Cavalry Officer. Later furthering his commitment to the public sector, Jourdan served as a District Representative for a sitting Congressman in Pennsylvania’s 7th District focused on Veteran, Military, and Environmental issues brought before the US House of Representatives. Mr. Frain holds undergraduate degrees from Valley Forge Military College and the University of Pennsylvania, and an MBA from Columbia Business School graduating with Dean's Honors."]
  },
  {
    id: 3,
    title: "Kenneth R. Reynolds",
    job: "BOARD MEMBER",
    description: ["Ken earned his B.A. Degree in Business Administration from Wittenberg University in 1980. Following graduation he worked for Dennis & Schisler, Certified Public Accountants, and later became a partner in the firm, managing the audit practice.", "n 1997, Ken was named Chief Financial Officer of Ariel Corporation. Founded in 1966, Ariel Corporation designs and manufactures a wide variety of compressors for a diverse global market. Nearly 60,000 Ariel compressors are in service worldwide in refineries, gas fields, pipeline service and gas gathering. Ariel’s world standard gas compressors, outstanding service and exceptional customer support have made it the world leader in gas compression. Ken continues to serve as a board member of Ariel Corporation.", "Ken is a member of a number of trade organizations including the American Institute of Certified Public Accountants and the Ohio Society of Certified Public Accountants. Past business and community affiliations include service on the board of Black Horse LLC (Black Horse is a Houston-based joint venture between Caterpillar Inc. and Ariel Corporation), Knox Community Hospital, Knox County Board of Elections, United Way allocation committee and the Knox County Public Defender Commission.", "Currently Ken serves as a board member of the Gorman-Rupp Company. Gorman-Rupp is headquartered in Mansfield, Ohio and manufactures pumps and pump systems. Ken is an avid golfer and resides in Mount Vernon with his wife, Jan. They have three adult children."]
  },
]