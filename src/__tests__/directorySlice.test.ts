import reducer, { setFiles, setPath, removePath } from "../api/directorySlice";

describe("directorySlice", () => {
  describe("reducers", () => {
    const initialState = {
      name: null,
      id: null,
      path: [],
      files: [],
      directories: [],
    };

    const data = {
      name: "example",
      id: "23",
      files: [
        {
          name: "file_12.txt",
        },
        {
          name: "file_22",
        },
      ],
      directories: [
        {
          name: "dir_22",
          id: "22",
        },
      ],
    };

    it("sets root files", () => {
      const action = { type: setFiles, payload: data };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        name: "example",
        id: "23",
        path: [],
        directories: [
          {
            name: "dir_22",
            id: "22",
          },
        ],
        files: [
          {
            name: "file_12.txt",
          },
          {
            name: "file_22",
          },
        ],
      });
    });

    it("sets directory path", () => {
      const action = { type: setPath, payload: data };
      const state = reducer(initialState, action);
      expect(state.path).toEqual([{ id: "23", name: "example" }]);
    });

    it("removes paths greater than the specified number", () => {
      const action = { type: removePath, payload: 1 };
      const currentState = {
        id: "0",
        name: "example",
        files: [],
        directories: [],
        path: [
          { id: "0", name: "example0" },
          { id: "1", name: "example1" },
          { id: "2", name: "example2" },
          { id: "3", name: "example3" },
        ],
      };
      const state = reducer(currentState, action);
      expect(state.path).toEqual([
        { id: "0", name: "example0" },
        { id: "1", name: "example1" },
      ]);
    });
  });
});
