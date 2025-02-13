import { FormRules } from "wot-design-uni/components/wd-form/types";

export const rules: FormRules = {
  motherBloodType: [
    {
      required: true,
      message: "请选择母亲血型",
      validator: (value) => {
        if (value && value.length) {
          return Promise.resolve();
        } else {
          return Promise.reject("请选择母亲血型");
        }
      },
    },
  ],
  fatherBloodType: [
    {
      required: true,
      message: "请选择父亲血型",
      validator: (value) => {
        if (value && value.length) {
          return Promise.resolve();
        } else {
          return Promise.reject("请选择父亲血型");
        }
      },
    },
  ],
};

export const bloodTypeList = [
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "AB",
    label: "AB",
  },
  {
    value: "O",
    label: "O",
  },
];

export const bloodTypeCompatibility: { [key: string]: { [key: string]: string[] } } = {
  A: { A: ["A", "O"], B: ["A", "B", "AB", "O"], AB: ["A", "B", "AB"], O: ["A", "O"] },
  B: { A: ["A", "B", "AB", "O"], B: ["B", "O"], AB: ["A", "B", "AB"], O: ["B", "O"] },
  AB: { A: ["A", "B", "AB"], B: ["A", "B", "AB"], AB: ["A", "B", "AB"], O: ["A", "B", "AB"] },
  O: { A: ["A", "O"], B: ["B", "O"], AB: ["A", "B", "AB"], O: ["O"] },
};
