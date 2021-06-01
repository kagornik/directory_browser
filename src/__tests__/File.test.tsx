import React from "react";
import { File } from "../components/File";
import renderer from "react-test-renderer";
import imageIcon from "../assets/image_icon.png";

it("displays a file with given name and icon", () => {
  const tree = renderer
    .create(<File name="exampleName" icon={imageIcon} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
