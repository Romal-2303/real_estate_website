import DefaultLayout from "@/components/DefaultLayout/DefaultLayout";
import Homepage from "../components/Homepage/Homepage";
import "../designSystem/_global.scss";

const Page = () => {
  return (
    <DefaultLayout>
      <Homepage />
    </DefaultLayout>
  );
};

export default Page;
