import React from "react";
import { Directory } from "../components/Directory";
import renderer from "react-test-renderer";
import folderIcon from "../assets/folder_icon.png";

it("displays a directory with given name and icon", () => {
  const fn = jest.fn();
  const tree = renderer
    .create(
      <Directory
        name="exampleDirectory"
        id="111"
        handleChangeDirectory={fn}
        icon={folderIcon}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
