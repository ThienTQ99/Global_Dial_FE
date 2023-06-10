import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

const TutorCall = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white w-[100%] h-[100%] align-middle items-center">
        <h2 className="pt-4 text-4xl font-extrabold  text-[#006B7D] mb-10 ">
          Our Tutors
        </h2>
        <div className="flex flex-row ml-[12%] pb-8">
          <div class="basis-1-4 mr-14">
            <Card
              hoverable
              style={{ width: 340 }}
              cover={
                <img
                  style={{ height: "400px" }}
                  alt="example"
                  src="https://www.deltapsychology.ca/wp-content/uploads/Emily-Johnson.jpg"
                />
              }
            >
              <Meta
                title="Emily Johnson"
                description="Literature and Writing"
              />
            </Card>
            <Button type="primary" onClick={() => navigate("/payment")}>
              Call now
            </Button>
          </div>
          <div class="basis-1-4 mr-14">
            <Card
              hoverable
              style={{ width: 340 }}
              cover={
                <img
                  style={{ height: "400px" }}
                  alt="example"
                  src="https://cdn.ameriprisecontent.com/cds/alwp/advisor/jake.t.bryant/jake-bryant_9784f_400x490.jpg"
                />
              }
            >
              <Meta
                title="David Thompson"
                description="English as a Second Language (ESL)"
              />
            </Card>
            <Button type="primary" onClick={() => navigate("/payment")}>
              Call now
            </Button>
          </div>{" "}
          <div class="basis-1-4 ">
            <Card
              hoverable
              style={{ width: 340 }}
              cover={
                <img
                  style={{ height: "400px" }}
                  alt="example"
                  src="https://urbanlawyers.co.uk/wp-content/uploads/2021/01/sarah-patel-pic.jpg"
                />
              }
            >
              <Meta
                title=" Sarah Patel"
                description="Bachelor's Degree  Linguistics"
              />
            </Card>
            <Button type="primary" onClick={() => navigate("/payment")}>
              Call now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCall;
