import Page from "../../../components/Page/Page";
import { AuthUser } from "../../../models/AuthUser";

type Props = {
  authedData?: AuthUser;
};
const User: React.FC<Props> = () => {
  return <Page title=""></Page>;
};

export default User;
