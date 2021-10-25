import Page from "../../../components/Page/Page";
import { AuthUser } from "../../../models/AuthUser";

type Props = {
  authedData?: AuthUser;
};
const Banner: React.FC<Props> = () => {
  return <Page title=""></Page>;
};

export default Banner;
