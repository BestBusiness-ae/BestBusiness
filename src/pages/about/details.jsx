import React from "react";
import Layout from "../../layouts";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class AboutDetailsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page-title-area">
          <Container>
            <Row>
              <Col lg="12">
                <div className="page-title-item text-center">
                  <h2 className="title">Know About Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Know About Us
                      </li>
                    </ol>
                  </nav>
                  <p></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="team-details-area pt-30 pb-50">
          <div className="pl-50 pb-50 pr-20 pt-20 team-details-content">
            <p>
              Collaborating as a team with diverse backgrounds and experiences
              can be highly beneficial in achieving the best results. When
              individuals with different perspectives and skill sets come
              together, they can complement each other's strengths and
              compensate for each other's weaknesses. Here are some ways you can
              make the most of your team's diverse backgrounds and experiences:
              Foster open communication: Encourage your team members to
              communicate openly and share their ideas and opinions without fear
              of judgment. This can help to create an environment of trust and
              respect where everyone feels comfortable contributing. Embrace
              diversity: Appreciate and celebrate the differences among team
              members. Each person brings a unique perspective and experience to
              the table, which can help to broaden the team's understanding of
              the problem at hand. Focus on common goals: Ensure that everyone
              on the team is aligned on the goals and objectives of the project.
              This can help to create a sense of purpose and motivation that can
              drive the team forward. Play to each other's strengths: Identify
              the strengths and weaknesses of each team member and delegate
              tasks accordingly. This can help to ensure that each person is
              working on tasks that they are well-suited for, which can lead to
              better results. Seek feedback: Encourage team members to give and
              receive feedback constructively. This can help to improve the
              quality of the team's work and build a culture of continuous
              improvement. Remember, working as a team with diverse backgrounds
              and experiences requires patience, empathy, and understanding.
              With the right approach, your team can harness the power of
              diversity to achieve great things.
            </p>
          </div>
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="team-details-thumb">
                  <img src="assets/images/founder-0.png" alt="" />
                </div>
              </Col>
              <Col lg="6">
                <div className="team-details-content">
                  <h4 className="title">Alina Bogolyubova</h4>
                  <span>Founder and CEO</span>
                  <p>
                    Has 4 higher educations, including legal and economic.
                    Lawyer of the highest category, candidate of legal sciences,
                    15 years of experience in jurisprudence.
                    <br />I have assisted more than 50 satisfied clients in a
                    complete business set ups and visa processing and bank
                    accounts.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="team-details-area pt-30 pb-50">
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="team-details-thumb">
                  <img src="assets/images/founder-2.jpg" alt="" />
                </div>
              </Col>
              <Col lg="6">
                <div className="team-details-content">
                  <h4 className="title">Devananda Reddy Gangasani</h4>
                  <span>Investment Department Director</span>

                  <p>
                    He has 16 years of banking and global investment experience
                    with HNIs (High Net Worth Individuals) and real estate
                    experience.
                    <br />
                    <b> Qualification:</b> Master of Business Applications
                    PROFESSIONAL QUALIFICATION International Certificate in
                    Wealth and Investment Management | Chartered Institute of
                    Securities and Investments | Risk in financial services |
                    Chartered Institute of Securities and Investments | UAE
                    Financial Rules and Regulations| Chartered Institute of
                    Securities and Investments | International Introduction to
                    Securities and Investments | Chartered Institute of
                    Securities and Investments.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="team-details-area pt-30 pb-50">
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="team-details-thumb">
                  <img src="assets/images/founder-3.png" alt="" />
                </div>
              </Col>
              <Col lg="6">
                <div className="team-details-content">
                  <h4 className="title">Lana Verina</h4>
                  <span>Creative Director of Best Business Group. </span>
                  <p className="pb-15">
                    <br /> Multi-talented individual with a passion for
                    producing, fashion, and writing. I have a strong creative
                    vision and an eye for detail which I use to bring my
                    projects to life.
                    <br />
                    As a writer, I have written for various publications,
                    including fashion magazines, lifestyle blogs, and online
                    journals. My writing style is versatile and I am able to
                    adapt to the tone and style required for each project.
                    <br />
                    <b> Influence:</b>
                    <br />
                    As a fashion influencer, I am constantly creating content
                    for my social media platforms, where I have a significant
                    following. My content ranges from outfit ideas to beauty
                    tutorials and lifestyle vlogs. I love sharing my ideas with
                    my followers and inspiring them to try new things.
                    <br />
                    <b> Passion:</b>
                    <br />
                    My passion for fashion and creativity drives me to
                    continuously explore new ideas and concepts. I believe that
                    fashion is an art form that can be used to express oneself
                    and showcase individuality. As a producer, I enjoy the
                    process of bringing ideas to life, from conception to
                    execution.
                    <br />
                    <b> Future goals:</b>
                    <br />
                    My future goals include creating my own fashion brand,
                    producing a successful television series, and publishing a
                    book on fashion and lifestyle. I am excited to continue
                    exploring my passions and sharing my creativity with the
                    world.
                    <br />
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default AboutDetailsPage;
