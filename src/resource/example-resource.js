import { Create, Edit } from "react-admin";

import ExampleResourceForm from "../component/form/ExampleResourceForm";

const ExampleResourceCreate = (props) => (
  <Create {...props}>
    <ExampleResourceForm />
  </Create>
);

const ExampleResourceEdit = (props) => (
  <Edit {...props}>
    <ExampleResourceForm />
  </Edit>
);

const config = {
  create: ExampleResourceCreate,
  edit: ExampleResourceEdit,
};

export default config;
