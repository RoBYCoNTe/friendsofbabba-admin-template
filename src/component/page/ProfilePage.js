import {
  BaseProfileForm,
  ProfilePage as FobProfilePage,
} from "ra-friendsofbabba";
import { FormDataConsumer, email, required } from "ra-core";

import { TextInput } from "react-admin";

const ProfilePage = (props) => (
  <FobProfilePage {...props}>
    <BaseProfileForm>
      <TextInput source="email" validate={[required(), email()]} />
      <TextInput source="profile.phone" maxLength={30} />
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.auth === "local" && (
            <TextInput type="password" source="password" />
          )
        }
      </FormDataConsumer>
    </BaseProfileForm>
  </FobProfilePage>
);

export default ProfilePage;
