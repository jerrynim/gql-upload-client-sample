import React from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
const SINGLEUPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

const MULTIUPLOAD = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

const App: React.FC = () => {
  const singleUploadMutation = useMutation(SINGLEUPLOAD);
  const multiUploadMutation = useMutation(MULTIUPLOAD);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = e.target.files;
    if (files && files.length === 1) {
      const file = files[0];
      const {
        data: { singleUpload }
      } = await singleUploadMutation({
        variables: {
          file
        }
      });
      console.log(`upload success😀 ${singleUpload.filename}`);
    } else {
      const data = await singleUploadMutation({
        variables: {
          files
        }
      });
      console.log(`upload success ${data}`);
    }
  };
  return (
    <div
      style={{
        height: "-webkit-fill-available",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>
        <label>Single Upload</label>
        <br />
        <input type="file" onChange={onChange} />
      </div>
      <div>
        <label>Multi Upload</label>
        <br />

        <input type="file" multiple required onChange={onChange} />
      </div>
    </div>
  );
};

export default App;
